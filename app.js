const express = require('express');
const app = express();
const port = 5000;
// import myJson from './example.json' assert {type: 'json'};
const countryNumber = require('./countryNum.json');
app.get('/', (req, res) => {
  res.json (countryNumber);
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});