var app = angular.module('routingApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/',
        {
            templateUrl: '/views/index.html',
            controller: 'mainController'
        }).when('/volunteer.html',
        {
            templateUrl: '/views/volunteer.html',
            controller: 'volunteerController'
        });
}]);
app.controller('mainController',['$scope', function($scope){
    $scope.message = "Welcome to the Southwest Coder Dojo - Home Page";
}]);
app.controller('volunteerController', ['$scope', function($scope){
    $scope.message = "Welcome to the Southwest Coder Dojo - Volunteer Page";
}]);
