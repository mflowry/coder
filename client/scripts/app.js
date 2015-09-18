var app = angular.module('routingApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/',
        {
            templateUrl: '/views/home.html',
            controller: 'mainController'
        }).when('/events',
        {
            templateUrl: '/views/events.html',
            controller: 'eventsController'
        }).when('/volunteer.html',
        {
            templateUrl: '/views/volunteer.html',
            controller: 'volunteerController'
        }).when('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'contactController'
        });
}]);
app.controller('mainController',['$scope', function($scope){
    $scope.message = "Welcome to the Southwest Coder Dojo - Home Page";
}]);
app.controller('registerController', ['$scope', function($scope){
    $scope.message = "Welcome to the Southwest Coder Dojo - Registration Page";
}]);
app.controller('volunteerController', ['$scope', function($scope){
    $scope.message = "Welcome to the Southwest Coder Dojo - Volunteer Page";
}]);
app.controller('contactController', ['$scope', function($scope){
    $scope.message = "Welcome to the Southwest Coder Dojo - Contact Us Page";
}]);