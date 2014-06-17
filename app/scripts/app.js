'use strict';

var app = angular
    .module('ngAdventureApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .when('/blog', {
            templateUrl: 'views/posts.html',
            controller: 'PostsCtrl'
        })
        .when('/blog/:id', {
            templateUrl: 'views/post.html',
            controller: 'PostCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
