var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/conference', function(req, res, next) {
  res.render('pages/templates/informational-page', {
    title: 'Conference'
  });
});

module.exports = router;
