'use strict'

app.controller('PostsCtrl', function ($scope, $location, sharedVariables) {

    if(!sharedVariables.getLoggedIn()) $location.path('login');
    $scope.posts = sharedVariables.getPosts();
    $scope.blogItem = function (id) {

        $location.path('blog/' + id);

    }
});