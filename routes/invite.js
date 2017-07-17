var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('This is our invite page');
  res.send('This is our invite controller');
});

module.exports = router;
