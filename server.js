var express = require('express')
var cors = require('cors')




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



