var express = require('express'),
    router = express.Router(),
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    cons = require('consolidate'),
    bodyParser = require('body-parser'),
    dustjs = require('dustjs-linkedin'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),

    post = require('./server/models/post.js'),

    app = express();
    port = process.env.PORT || 3000;

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

// copy and pasted from method-override, necessary
// using use will make sure that every req that hits this controller
// will pass through these controllers
router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

router.route('/')
  // get all posts
  .get(function(req, res, next) {
    console.log('GET "/" !!!!!');

    // retrieve all posts from mongod
    mongoose.model('Post').find({}, function(err, posts) {
      if (err) {
        return console.error(err);
      } else {
        console.log(posts[0]);
      }
    });

    res.render('pages/index', {
      title: 'YLC Home Page'
    });
  })
;

// Behavior:
// When you go to /newpost, you are shown the form to input a new
// post
router.route('/newpost')
  // new post
  .get(function(req, res, next) {
    res.render('pages/new_post', {
      title: 'New Post'
    });
  })
  // grab the data from the form and save it to the db
  .post(function(req, res, next) {
    console.log("POST('/')");
    console.log(req.body);

    // save new post to db
    var newpost = new post({
      title: req.body.title,
      body: req.body.body,
      author: req.body.author
    });
    newpost.save(function(err) {
      if (err)
        console.error(err);
      console.log("Created new post!");
      console.log(newpost);
      res.redirect('/');
    });
  })
;


// register routes
app.use(router); // could also prepend "/api" or something if we wanted all routes to contain this prefix

// Connect to DB
mongoose.connect('mongodb://localhost/ylc-website');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback) {
  console.log('db open!');
});



// fire the bitch up
app.listen(port, function() {
  console.log('listening on ' + port);
});
