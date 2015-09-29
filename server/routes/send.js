var express = require('express');
var router = express.Router();
var request = require('request');

var mailGunUrl = 'https://api:key-3188ca5ee2af760410a61c6e3772fc7a@api.mailgun.net/v3/sandboxf36386f5333e47e5b0875382c7ab6094.mailgun.org/messages';

var to = 'swcoderdojo@gmail.com';

/* Post volunteer page. */
router.post('/', function(req, res, next) {
    console.log('req.body:', req.body);
    var options = {
        from: req.body.fromEmail,
        to: to, // An array if you have multiple recipients.
        subject: 'Mail from ' + req.body.name + ': ' + req.body.subject,
        text: req.body.message
    };
    console.log('options:', options);

    request.post(mailGunUrl, {form: options }, function (err, httpResponse, body) {
        if (err) {
            console.log(err);
            next(err);
        }
        else {
            console.log('Response: ', httpResponse.statusCode, httpResponse.statusMessage);
            if (httpResponse.statusCode === 200) {
                res.status(200).send('Email sent.');
            } else {
                res.status(500).send('There was an error processing your request. Try again later!');
            }
        }
    });

});

module.exports = router;