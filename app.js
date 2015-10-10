var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/pages/index.html'))
});


app.listen(3000);
console.log('YLC running at 3000');
