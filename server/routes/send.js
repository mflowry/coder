var express = require('express');
var router = express.Router();
var path = require('path');

/* Post volunteer page. */
router.post('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/views/send'));
});

module.exports = router;