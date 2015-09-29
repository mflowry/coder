var app = angular.module('formApp', []);

app.controller('formController', ['$scope', '$http', function ($scope, $http) {

    $scope.processForm = function () {
        console.log("Posting...");
        $http({
            method: 'POST',
            url: '/send',
            data: $scope.formData,
            dataType: 'json'
        }).then(function (response) {
            console.log(response);
            alert("Thanks, your message was sent.")
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
