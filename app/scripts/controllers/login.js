'use strict'

app.controller('LoginCtrl', function ($scope, $location, sharedVariables) {

$scope.user = {
    'email' : '',
    'password' : ''
};

$scope.logIn = function () {


    if($scope.password == "123") {

        sharedVariables.setLoggedIn(true);
        sharedVariables.setUser({
            email : $scope.email
        });
        $location.path('blog');
    }



};

$scope.logOut = function () {

    sharedVariables.setLoggedIn(false);

};

});