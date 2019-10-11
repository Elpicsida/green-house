const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
var cors = require('cors')
const app = express();
const pg = require('pg');

const queries = require('./sql');

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

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(express.static(__dirname + './../../dist/green-house/'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/app', function(req,res) {
  res.sendFile(path.join(__dirname + './../../dist/green-house/index.html'));
});

app.use(cors(corsOptions));

app.get('/api/reservations', function (req, res, next) {
  console.log('api triggered');
  
  pool.connect(function(err, client, done) {
      if(err){
          res.status(400).send(err);
      } 
      client.query(queries.GET_RESERVATION_ITEMS, function(err, result) {
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
  const data = {
    DateFrom : req.body.DateFrom,
    DateTo : req.body.DateTo
  }
  console.log(req.body.DateTo);
 console.log(req.body.DateFrom);

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


app.post('/api/login', function (req, res, next) {
  console.log('api login');
  
  pool.connect(function(err, client, done) {
      if(err){
          res.status(400).send(err);
      } 
      client.query(queries.GET_RESERVATION_ITEMS, function(err, result) {
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

app.listen(process.env.PORT || 8080);


