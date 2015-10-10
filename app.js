var express = require('express');
var app = express();
var path = require('path');

// set the port
var port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// tell express to look in the public dir for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
  // ejs render automatically looks in the views folder
  res.render('index');
}

// tell server which port to listen on
app.listen(port, function() {
  console.log('listening on ' + port);
});
