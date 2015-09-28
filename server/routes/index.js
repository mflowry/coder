var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

//router.get('/*', function(req,res,next){
//  res.redirect('/');
//});

//app.get('/send.html',function(req,res){
//  var mailOptions={
//    name: req.body.name,
//    fromEmail: req.body.fromEmail,
//    subject : req.body.subject,
//    message : req.body.message
//  }
//  console.log(mailOptions);
//  smtpTransport.sendMail(mailOptions, function(error, response){
//    if(error){
//      console.log(error);
//      res.end("error");
//    }else{
//      console.log("Message sent: " + response.message);
//      res.end("sent");
//    }
//  });
//});

module.exports = router;
