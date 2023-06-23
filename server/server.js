// server.js
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/home/cemo/Documents/ders/javascript/pokeApi_apollo_graphQL'));

app.get('/', (req, res) => {
  res.sendFile(path.join('index.html'));
});

app.listen(3000, () => {
  console.log('Express server çalişiyor: http://localhost:3000');
});
