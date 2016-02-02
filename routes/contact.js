var express = require('express');
var router = express.Router();

// TODO: Convert this to the main routes file for standard pages

/* GET users listing. */
router.get('/contact', function(req, res, next) {
  res.render('pages/informational-page', {
    title: 'Contact'
  });
});

// TODO: Test more than one route here!
router.get('/aaa', function(req, res, next) {
  res.render('pages/about', {
    title: 'aaa'
  });
});

module.exports = router;
