var app = angular.module('routingApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/',
        {
            templateUrl: '/views/home.html',
            controller: 'mainController'
        }).when('/register',
        {
            templateUrl: '/views/register.html',
            controller: 'registerController'
        }).when('/volunteer',
        {
            templateUrl: '/views/volunteer.html',
            controller: 'volunteerController'
        }).when('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'contactController'
        });
});
app.controller('mainController', function($scope){
    $scope.message = "Welcome to the Southwest Coder Dojo - Home Page";
});
app.controller('registerController', function($scope){
    $scope.message = "Welcome to the Southwest Coder Dojo - Registration Page";
});
app.controller('volunteerController', function($scope){
    $scope.message = "Welcome to the Southwest Coder Dojo - Volunteer Page";
});
app.controller('contactController', function($scope){
    $scope.message = "Welcome to the Southwest Coder Dojo - Contact Us Page";
});