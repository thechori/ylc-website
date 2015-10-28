var express = require('express')
    , http = require('http')
    , fs = require('fs')
    , path = require('path')
    , cons = require('consolidate')
    , bodyParser = require('body-parser')
    , dustjs = require('dustjs-linkedin')
    , mongoose = require('mongoose');

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

// Connect to DB
mongoose.connect('mongodb://localhost/ylc-website');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback) {
  console.log('db open!');

  var PostSchema = mongoose.Schema({
    createdAt: Date,
    editedAt: Date,
    deletedAt: Date,
    isActive: Boolean,
    author: String,
    title: String,
    description: String,
    body: String,
    tags: [String]
  });

  var Post = mongoose.model('Post', PostSchema);

  // Create a new Post
  var examplePost = new Post({
    title: "My First Post!",
    description: "This is my first post.",
    body: "Lots and lots of text about something YLC did that blew everyone away. YLC is the best! Do you know why? Because we just are, son.",
    author: "Ryan Tedoro",
    createdAt: Date.now()
  });

  console.log("Title: " + examplePost.title);
  console.log("Date.now(): " + examplePost.createdAt);

  examplePost.save(function (err, examplePost) {
    if (err)
      console.error(err);

    console.log('Successfully saved "'+ examplePost.title + '"');
  });

});



// tell server which port to listen on
app.listen(port, function() {
  console.log('listening on ' + port);
});
