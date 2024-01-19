require('dotenv').config()
const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Get Request');
})

app.get('/sharma', (req, res) => {
  res.send('Sharma');
})

app.listen(process.env.PORT, () => {
  console.log('Listening Harsh at port' + process.env.PORT);
})