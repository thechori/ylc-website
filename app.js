var express = require('express'),
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    cons = require('consolidate'),
    bodyParser = require('body-parser'),
    dustjs = require('dustjs-linkedin'),
    mongoose = require('mongoose'),

    // my shit
    // post = require('./server/controllers/PostController.js'),
    post = require('./server/models/post.js')


var app = express()
// set the port

var port = process.env.PORT || 3000;
// assign the dust engine to the dust files
app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + "/views")
app.use(express.static(__dirname + "/public", { redirect: false }));
app.use('/bootstrap', express.static(__dirname + "/bower_components/bootstrap"));
app.use('/jquery', express.static(__dirname + "/bower_components/jquery"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// tell express to look in the public dir for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', function(req, res) {
  res.render('pages/index', {
    title: 'home'
  });
});
app.get('/about', function(req, res) {
  res.render('pages/about', {
    title: 'about'
  });
});
app.get('/newpost', function(req, res) {
  res.render('pages/new_post', {
    title: 'newpost'
  })
});
app.post('/newpost', function(req, res) {

});

// Connect to DB
mongoose.connect('mongodb://localhost/ylc-website');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback) {
  console.log('db open!');




});



// tell server which port to listen on
app.listen(port, function() {
  console.log('listening on ' + port);
});
