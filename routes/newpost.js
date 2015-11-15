var express = require('express');
var router = express.Router();
var post = require('./server/models/post.js');


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

module.exports = router;
