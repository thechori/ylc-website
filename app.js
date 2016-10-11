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

    // routes
    index = require('./routes/index.js'),
    about = require('./routes/about.js'),
    conference = require('./routes/conference.js'),
    partners = require('./routes/partners'),
    contact = require('./routes/contact'),
    //newpost = require('./routes/newpost.js'), TODO: Implement this

    // app
    app = express(),
    port = process.env.PORT || 3000;

app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + "/views")
app.use(express.static(__dirname + "/public", { redirect: false }));
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap"));
app.use('/jquery', express.static(__dirname + "/node_modules/jquery"));
app.use('/sweetalert', express.static(__dirname + '/node_modules/sweetalert'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// tell express to look in the public dir for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// copy and pasted from method-override, necessary
// using use will make sure that every req that hits this controller
// will pass through these controllers
router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

router.route('/')
  .get(function(req, res, next) {
    console.log('GET "/"');

    // retrieve 5 most recent posts
    mongoose.model('Post')
      .find()
      .sort({
        createdAt: -1
      })
      .limit(5)
      .exec(function(err, posts) {

        // console.log(posts);

        res.render('pages/index', {
          title: 'YLC Home Page',
          posts: posts
        });
      })
    ;
  })
;
router.route('/newpost')
  // new post
  .get(function(req, res, next) {
    res.render('pages/newPost', {
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
      if (err) {
        console.error(err);
      }
      console.log("Created new post!");
      console.log(newpost);
    });
  })
;
router.route('/')

// register routes
app.use(router); // could also prepend "/api" or something if we wanted all routes to contain this prefix
app.use(index);
app.use(about);
app.use(conference);
app.use(partners);
app.use(contact);

// app.use(newpost); TODO: Implement this


// Connect to DB
var dbConnectionString = 'mongodb://ylcadmin:YLC!p455w0rd@ds053954.mongolab.com:53954/ylc-website';
mongoose.connect(dbConnectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(callback) {
  console.log('db open!');
});



// fire the bitch up
app.listen(port, function() {
  console.log('listening on ' + port);
});
