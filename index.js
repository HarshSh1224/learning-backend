import dotenv from 'dotenv';
import express from 'express'
const app = express();
dotenv.config();

app.get('/', (req, res) => {
  res.send('Get Request');
})

app.get('/sharma', (req, res) => {
  res.send('Sharma');
})

app.listen(process.env.PORT, () => {
  console.log('Listening Harsh at port' + process.env.PORT);
})