require('angular');
require('angular-animate');
require('angular-route');

var app = angular.module('meetings', ['ngRoute', 'ngAnimate']);

app.controller('regisCtrl', ['$scope', function($scope){

}]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/login' , {
            templateUrl: './views/login.html',
            controller: 'regisCtrl'
        })
        .when('/register' , {
            templateUrl: './views/register.html',
            controller: 'regisCtrl'
        })
        .when('/success' , {
            templateUrl: 'views/success.html',
            controller: 'successCtrl'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);