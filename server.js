const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback');
const pg = require('pg');
const cookieParser = require('cookie-parser');
var nodemailer = require('nodemailer');

const app = express();

const config = {
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  ssl: process.env.DB_SSL,
  max: 20
};

var pool = pg.Pool(config);

app.use(history({
  verbose: true
}));


app.use(cookieParser());
app.use(express.static(__dirname + '/dist/green-house/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/app', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/green-house/index.html'));
});

app.get('/api/reservations', function (req, res, next) {
  console.log('api triggered');
  
  pool.connect(function(err, client, done) {
      if(err){
          res.status(400).send(err);
      } 
      client.query(`SELECT "Id", "DateFrom", "DateTo" FROM public."dbo.Reservations" ORDER BY "DateFrom"`, function(err, result) {
          done();
          if(err) {
              res.status(400).send(err);
              console.log(err);
              return;
          }
          res.status(200).send(result.rows);
      });
  });
});

app.post('/api/reservations', function (req, res, next) {
  if (req.cookies.auth_token !== process.env.AUTH_TOKEN) {
    res.status(503).send({
      status: 'User not authorized'
    });
    return;
  }
  const data = {
    DateFrom : req.body.DateFrom,
    DateTo : req.body.DateTo
  }

 console.log(req.body);
  pool.connect((err, client, done) => {
    const query = 'INSERT INTO "dbo.Reservations"("DateFrom", "DateTo") VALUES ($1, $2) RETURNING "Id"';
    const values = [data.DateFrom, data.DateTo];
    console.log("Setting query");
    client.query(query, values, (error, result) => {
      console.log("call client");
      done();
      console.log("Done");
      if (error) {
        res.status(400).json({error});
        console.log("ERROR");
        return;
      }
      console.log("HERE?");
      res.status(202).send(result.rows[0]);
    });
  });
});

app.delete('/api/reservations/:id', function (req, res) {
  const id = req.params.id;

  pool.connect((err, client, done) => {
    if (req.cookies.auth_token !== process.env.AUTH_TOKEN) {
      res.status(503).send({
        status: 'User not authorized'
      });
      return;
    }
    const query = 'DELETE FROM "dbo.Reservations" WHERE "Id" = $1';
    const values = [id];

    client.query(query, values, (error, result) => {
      done();
      if (error) {
        res.status(400).json({error});
      }
      res.status(202).send({
        status: 'Successful'
      });
    });
  });
});

app.get('/api/gallery', function (req, res, next) {
  
  pool.connect(function(err, client, done) {
      if(err){
          console.log(err);
          throw err;
      } 
      client.query(`SELECT "Id", "Url" FROM "dbo.Gallery" ORDER BY "Id" DESC`, function(err, result) {
          done();
          if(err) {
              res.status(400).send(err);
              console.log(err);
              return;
          }
          res.status(200).send(result.rows);
      });
  });
});

app.post('/api/gallery', function (req, res, next) {
  if (req.cookies.auth_token !== process.env.AUTH_TOKEN) {
    res.status(503).send({
      status: 'User not authorized'
    });
    return;
  }

  const data = {
    Url : req.body.Url
  }
  
  pool.connect((err, client, done) => {
    if(err){
      console.log(err);
      throw err;
    }
    const query = 'INSERT INTO "dbo.Gallery"("Url") VALUES ($1) RETURNING "Id"';
    const values = [data.Url];
    client.query(query, values, (error, result) => {
      done();
      if (error) {
        res.status(400).json({error});
        return;
      }
      res.status(202).send(result.rows[0]);
    });
  });
});

app.delete('/api/gallery/:id', function (req, res) {
  
  const id = req.params.id;
  if (req.cookies.auth_token !== process.env.AUTH_TOKEN) {
    res.status(503).send({
      status: 'User not authorized'
    });
    return;
  }

  pool.connect((err, client, done) => {
    if(err){
      console.log(err);
      throw err;
    } 
    const query = 'DELETE FROM "dbo.Gallery" WHERE "Id" = $1';
    const values = [id];

    client.query(query, values, (error, result) => {
      done();
      if (error) {
        res.status(400).json({error});
      }
      res.status(202).send({
        status: 'Successful'
      });
    });
  });
});

app.post('/api/validate', function (req, res, next) {
  if (req.cookies.auth_token === process.env.AUTH_TOKEN) {
    res.send(true);
  }
  else {
    res.send(false);
  }
});

app.post('/api/login', function (req, res, next) {
  console.log(req.cookies.auth_token);
  console.log('api login');
  const credentials = {
    login: req.body.user,
    pass: req.body.pass
  }

  if (credentials.login === process.env.ADMIN_USER &&
    credentials.pass === process.env.ADMIN_PASS) {
      res.cookie('auth_token', process.env.AUTH_TOKEN, { maxAge: 20 *60 * 1000, httpOnly: true, sameSite: 'strict' });
        res.send({ loggedIn: true });
  }
  else {
    res.clearCookie("auth_token");
    res.send({ loggedIn: false });
  }
});

app.post('/api/logout', function (req, res, next) {
  if (req.cookies.auth_token) {
    res.clearCookie("auth_token");
  }
  res.send({ loggedIn: false });
});

app.post('/api/question/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    }
  });
  
  var mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_TARGET,
    subject: 'Question from Website',
    text: req.body.name + " napisał : " + req.body.content,
    html: '<div><p>E-mail: ' + req.body.email + '</p></div>' +
          '<div><p>Użytkownik: '+ req.body.name + '</p></div>' +
          '<div><p>'+ req.body.content +'</p></div>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send({ success: false});
    } else {
      res.send({ success: true});
    }
  });
});

app.listen(process.env.PORT || 8080);


