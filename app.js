require('angular');
require('angular-animate');
require('angular-route');
require('angularfire');

var app = angular.module('meetings', ['ngRoute', 'ngAnimate', 'firebase'])
    .constant('FIREBASE_URL', 'https://meeting-app-49154.firebaseio.com/');

app.controller('regisCtrl', ['$scope', '$createUser', 'FIREBASE_URL',
    function($scope, $createUser, FIREBASE_URL){
    var creds = require('./creds');

    var ref = firebase.initializeApp(creds);

    $scope.login = function() {
        $scope.message = "Welcome " + $scope.user.email;
    };

    $scope.register = function() {
        $scope.message = "Welcome " + $scope.user.email;
    };

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