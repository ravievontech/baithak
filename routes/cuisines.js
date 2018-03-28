var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cuisines', { title: 'Cuisines' });
});

module.exports = router;
