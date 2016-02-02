var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/partners', function(req, res, next) {
  res.render('pages/partners', {
    title: 'Partners'
  });
});

module.exports = router;
