var express = require('express');
var router = express.Router();
var path = require('path');

/* GET volunteer page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/views/volunteer.html'));
});

module.exports = router;
