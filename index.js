

var express = require('express')
var cors = require('cors')
const mysql = require('mysql2');

/*
const connection = mysql.createConnection({
  host: 'https://demo.phpmyadmin.net/master-config',
  user: 'root',
  password: '',
  database: 'sakila'
});
*/

var app = express()
app.use(cors())
app.use(express.json())


app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})

app.get('/', function (req, res, next) {
  
      res.send('this is  my express api');
    }
  );

app.get('/x', function (req, res, next) {
  
      res.send('555555');
    }
  );



app.get('/users', function (req, res, next) {
    connection.query(
      'SELECT * FROM `user`',
      function(err, results, fields) {
        res.json(results);
      }
    );
  })
  
  app.get('/users/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
      'SELECT * FROM `user` WHERE `id` = ?',
      [id],
      function(err, results) {
        res.json(results);
      }
    );
  })

  
    app.post('/insert_users', function (req, res, next) {
    connection.query(
      'INSERT INTO `users`(`fname`, `lname`, `username`, `password`, `avatar`) VALUES (?, ?, ?, ?, ?)',
      [req.body.fname, req.body.lname, req.body.username, req.body.password, req.body.avatar],
      function(err, results) {
        res.json(results);
      }
    );
  })



