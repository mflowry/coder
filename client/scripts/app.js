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

