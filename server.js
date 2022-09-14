var express = require('express')
var cors = require('cors')
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'top_db'
});

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





app.get('/user', function (req, res, next) {
    connection.query(
      'SELECT * FROM `user_t`',
      function(err, results, fields) {
        res.json(results);
      }
    );
  })
  
  app.get('/user/:id', function (req, res, next) {
    const id = req.params.id;
    connection.query(
      'SELECT * FROM `user_t` WHERE `u_id` = ?',
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