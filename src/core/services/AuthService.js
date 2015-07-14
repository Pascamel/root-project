angular.module('scApp').factory('AuthService', function (Session, $facebook) {

    var authService = {};

    authService.login = function () {
        return $facebook.login().then(function(data) {
            Session.create(data);
            return data;
        });
    };

    authService.isAuthenticated = function () {
        return !!Session.facebookId;
    };

    authService.getUserName = function () {
        return Session.userName || '';
    };

    //authService.isAuthorized = function (authorizedRoles) {
    //    if (!angular.isArray(authorizedRoles)) {
    //        authorizedRoles = [authorizedRoles];
    //    }
    //    return (authService.isAuthenticated() &&
    //    authorizedRoles.indexOf(Session.userRole) !== -1);
    //};

    authService.getLoginStatus = function() {
        return $facebook.getLoginStatus().then(function(data) {
            Session.create(data);
        });
    };

    return authService;
});