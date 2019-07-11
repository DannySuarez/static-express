const express = require('express');
const app = express();

const colorsArray = [
  { name : 'red', hex: 'FF0000', r: 255, g: 0, b: 0 },
  { name : 'yellow', hex: 'FFFF00', r: 255, g: 255, b: 0 },
  { name : 'blue', hex: '0000FF', r: 0, g: 0, b: 255 }
];

app.use(express.static('./http/public'));

app.get('/api/v1/colors', (req, res) => {
  res.send(colorsArray);
});

app.get('/api/v1/colors/:name', (req, res) => {
  const colors = colorsArray.find(color => color.name === req.params.name) || {};
  res.send(colors);
});

module.exports = app;
