'use strict'

app.controller('PostCtrl', function ($scope, $routeParams, $location, sharedVariables) {

if(!sharedVariables.getLoggedIn()) $location.path('login');

$scope.post = sharedVariables.getPost($routeParams.id);

});