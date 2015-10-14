var express = require('express')
    , http = require('http')
    , fs = require('fs')
    , path = require('path')
    , cons = require('consolidate')
    , bodyParser = require('body-parser')
    , dustjs = require('dustjs-linkedin')
    , mongoose = require('mongoose');

var app = express();
// set the port
var port = process.env.PORT || 3000;

// assign the dust engine to the dust files
app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + "/views")
app.use(express.static(__dirname + "/public", { redirect: false }));
app.use('/bootstrap', express.static(__dirname + "/bower_components/bootstrap"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// tell express to look in the public dir for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
  // ejs render automatically looks in the views folder
  res.render('layouts/main', {
    title: 'home'
  });
});

// tell server which port to listen on
app.listen(port, function() {
  console.log('listening on ' + port);
});
