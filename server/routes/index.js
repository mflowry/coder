var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/*', function(req,res,next){
  res.redirect('/');
});

module.exports = router;
