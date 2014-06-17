'use strict'

app.controller('GlobalCtrl', function ($scope, sharedVariables) {

    $scope.loggedIn = sharedVariables.getLoggedIn();
    $scope.user = {};
    $scope.$on('logged-in-changed', function (event, args) {
        $scope.loggedIn = sharedVariables.getLoggedIn();
        if ($scope.loggedIn === true) {
            $scope.user = sharedVariables.getUser();
        } else {
            $scope.user = {};
            $location.path('/');
        }
    });
    $scope.selected = 1;
    $scope.setSelected = function (select) {

        $scope.selected = select;

    };


});