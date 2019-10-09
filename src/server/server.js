const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

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

app.use(express.static(__dirname + './../../dist/green-house/'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/app', function(req,res) {
  res.sendFile(path.join(__dirname + './../../dist/green-house/index.html'));
});

app.get('/api/reservations', function (req, res, next) {
  console.log('api triggered');
  
  pool.connect(function(err, client, done) {
      if(err){
          res.status(400).send(err);
      } 
      client.query(queries.GET_RESERVATION_ITEMS, function(err,result) {
          done();
          if(err){
              res.status(400).send(err);
          }
          res.status(200).send(result.rows);
          pool.end();
      });
  });
});

app.post('/api/reservations', function (req, res) {
  const data = {
    dateFrom : req.body.dateFrom,
    dateTo : req.body.dateTo
  }

  pool.connect((err, client, done) => {
    const query = 'INSERT INTO "dbo.Reservations"("DateFrom", "DateTo") VALUES ($1, $2)';
    const values = [data.dateFrom, data.dateTo];
    
    client.query(query, values, (error, result) => {
      done();
      if (error) {
        res.status(400).json({error});
      }
      res.status(202).send({
        status: 'Successful',
        result: result
      });
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

app.listen(process.env.PORT || 8080);


