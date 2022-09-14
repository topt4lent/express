const express = require('express')
const app = express()
const PORT = 4000

app.listen(PORT,()=>{
  console.log('api listen on port 4000')
})


app.get('/', (req, res),=> {
      res.send('this is  my express api')
    }
  )

module.exports = app

