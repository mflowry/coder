var app = angular.module('formApp', []);
//var transporter = require('transporter');
//var transport = require('some-transport-method');
//var bodyParser = require('body-parser');
//var formApp = angular.module('formApp', []);


// send.html mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

app.controller('formController', ['$scope', '$http', function ($scope, $http) {
    var to = 'swcoderdojo@gmail.com';
    var from, subject, text;
    var apiKey = "'api:key-3188ca5ee2af760410a61c6e3772fc7a' ";
    var url = "https://api.mailgun.net/v3/sandboxf36386f5333e47e5b0875382c7ab6094.mailgun.org/messages ";
    var mailMessage = "curl -s --user" + apikey + url + " -F from='<" + from + ">' -F to=" + to + " -F subject='" + subject + "' -F text='" + text + "'";

    $scope.formData = {from: formData.fromEmail, subject: formData.subject, text: formData.message};

    $scope.processForm = function () {
        console.log("Posting...");
        $http({
            method: 'POST',
            url: '/send',//do I need to create send.html.html and send.js files, too?
            data: $scope.formData,
            dataType: 'json'
        }).then(function (response) {
            console.log(mailMessage);
            //transport.send(data, callback);
            if (!data.success) {
                // if not successful, bind errors to error variables
                $scope.errorName = data.errors.name;
                $scope.errorfromEmail = data.errors.fromEmail;
                $scope.errorSubject = data.errors.subject;
                $scope.errorMessage = data.errors.message;
            } else {
                // if successful, bind success message to message
                $scope.message = data.message;
            }
        })
    };
}]);


//        transport.send = function (mail, callback) {
//            var input = mail.message.createReadStream();
//            var messageId = (mail.message.getHeader('message-id') || '').replace(/[<>\s]/g, '');
//            input.pipe(process.stdout);
//            input.on('end', function () {
//                callback(null, {
//                    messageId: messageId
//                });
//            });
//        };
//}]);

//}.then (function(response){
//        console.log(data);
//        response.status;
//    }).then transport.send.html(mail, callback);
//}]);










//function formController($scope, $http) {
//    $scope.formData = {};
//    $scope.processForm = function() {
//};
//
//    $scope.processForm = function() {
//        $http({
//            method  : 'POST',
//            url     : 'process.php',//what should my url be?
//            data    : $scope.formData,
//            dataType    : 'json'
//            //headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
//        })
//            .success(function(data) {
//                console.log(data);
//                transport.send.html(mail, callback);
//                if (!data.success) {
//                    // if not successful, bind errors to error variables
//                    $scope.errorName = data.errors.name;
//                    $scope.errorfromEmail = data.errors.fromEmail;
//                    $scope.errorSubject = data.errors.subject;
//                    $scope.errorMessage = data.errors.message;
//                } else {
//                    // if successful, bind success message to message
//                    $scope.message = data.message;
//                }
//            });
//        transport.send.html = function(mail, callback){
//            var input = mail.message.createReadStream();
//            var messageId = (mail.message.getHeader('message-id') || '').replace(/[<>\s]/g, '');
//            input.pipe(process.stdout);
//            input.on('end', function() {
//                callback(null, {
//                    messageId: messageId
//                });
//            });
//        };
//        }
//    }







    //
    //$.ajax({
    //    type        : 'POST',
    //    url         : 'process.php',
    //    data        : formData,
    //    dataType    : 'json',
    //    success     : function(data) {
    //
    //        // log data to the console so we can see
    //        console.log(data);
    //
    //        if ( ! data.success) {
    //
    //            if (data.errors.name) {
    //                $('#name-group').addClass('has-error');
    //                $('#name-group .help-block').html(data.errors.name);
    //            }
    //
    //            if (data.errors.superheroAlias) {
    //                $('#superhero-group').addClass('has-error');
    //                $('#superhero-group .help-block').html(data.errors.superheroAlias);
    //            }
    //
    //        } else {
    //
    //            // if validation is good add success message
    //            $('#messages').addClass('alert alert-success').append('<p>' + data.message + '</p>');
    //        }
    //    }
    //});
    //
    //// stop the form from submitting and refreshing
    //event.preventDefault();
//});
//
//});
//</script>
//    $("#send.html").click(function(){
//        subject=$("#subject").val();
//        message=$("#message").val();
//        $("#message").message("Sending E-mail...Please wait");
//        $.get("http://localhost:3000/send.html",{sendTo: sendTo,fromEmail:fromEmail, subject:subject, message: message},function(data){
//            if(data=="sent") {
//                $("#message").empty().html("Your email has been sent.");
//            }
//        });
//    });
//});
