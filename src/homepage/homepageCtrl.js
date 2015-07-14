

angular.module('scApp').controller('homepageCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService, Session) {

    $scope.AuthService = AuthService;

    $scope.login = function () {
        AuthService.login().then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.setCurrentUser(user);
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };

    $scope.setCurrentUser = function (user) {
        $scope.currentUser = user;
    };

    AuthService.getLoginStatus();

    console.log('homepageCtrl');
});