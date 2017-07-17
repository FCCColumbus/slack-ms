var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index page');
  res.send('index of service');
});

module.exports = router;
