var app = angular.module('sharkapp.controllers', []);

app.controller("IntroCtrl", function($scope, $cordovaOauth, $localStorage, $location) {
    // Called to navigate to the main app
    $scope.startApp = function() {
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('app.dash');
    };

    $scope.login = function() {
        $cordovaOauth.facebook("593921090779069", ["email", "read_stream", "user_website", "user_location", "user_relationships"]).then(function(result) {
            $localStorage.accessToken = result.access_token;
            $location.path("/profile");
        }, function(error) {
            alert("There was a problem signing in!  See the console for logs");
            console.log(error);
        });
    };

});

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

app.controller("ChatCtrl", function($scope){

});

app.controller('PlaylistCtrl', function($scope, $stateParams) {});

<<<<<<< HEAD
app.controller('LoginCtrl', function($scope, $stateParams) {});
=======
app.controller('ForumCtrl', function($scope, $stateParams) {});

app.controller('ForumexemCtrl', function($scope, $stateParams) {});
>>>>>>> 1ca3231455fb4d5e99d9ed26b9dec82369d13169
