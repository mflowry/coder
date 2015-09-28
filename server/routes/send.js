var express = require('express');
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');

var auth = {
    auth: {
        api_key: 'key-3188ca5ee2af760410a61c6e3772fc7a',
        domain: 'https://api.mailgun.net/v3/sandboxf36386f5333e47e5b0875382c7ab6094.mailgun.org'
    }
};
var nodemailerMailgun = nodemailer.createTransport(mg(auth));

var to = 'swcoderdojo@gmail.com';

/* Post volunteer page. */
router.post('/', function(req, res, next) {
    var options = {
        from: req.body.fromEmail,
        to: to, // An array if you have multiple recipients.
        subject: 'Mail from ' + req.body.name + ': ' + req.body.subject,
        text: req.body.message
    };

    nodemailerMailgun.sendMail(options, function (err, info) {
        if (err) {
            next(err);
        }
        else {
            console.log('Response: ' + info);
            res.status(200).send('Email sent.');
        }
    });

});

module.exports = router;