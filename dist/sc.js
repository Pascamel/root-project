//angular.module('CiulApp', ['facebook'])
angular.module('scApp', ['ui.router', 'ui.bootstrap', 'ngFacebook']);

angular.module('scApp').config(function($stateProvider, $urlRouterProvider, $facebookProvider) {

    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('welcome');
    });

    $stateProvider.state('welcome', {
        templateUrl: 'src/homepage/homepage.html',
        controller: 'homepageCtrl'
    });

    $facebookProvider.setAppId('397534533768401');
    $facebookProvider.setVersion("v2.4");
});


angular.module('scApp').run(function($rootScope) {
    (function(){
        if (document.getElementById('facebook-jssdk')) {return;}
        var firstScriptElement = document.getElementsByTagName('script')[0];
        var facebookJS = document.createElement('script');
        facebookJS.id = 'facebook-jssdk';
        facebookJS.src = '//connect.facebook.net/en_US/all.js';
        firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
    }());
});
angular.module('scApp').controller('MainMenuCtrl', function($scope, $rootScope, $facebook, AuthService) {

    $scope.menuItems = [];
    $scope.AuthService = AuthService;

    $scope.$watch('AuthService.isAuthenticated()', function() {
        $scope.menuItems = [];
        if (AuthService.isAuthenticated()) {
            $scope.menuItems.push({
                label: 'Link 2',
                uisref: 'test2a'
            });
            $scope.menuItems.push({
                label: 'Link 3',
                uisref: 'test2b'
            });
        }
    });

    console.log('MainMenuCtrl');
});
angular.module('scApp').constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
});

angular.module('scApp').constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    user: 'user',
    guest: 'guest'
});
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
angular.module('scApp').service('Session', function ($facebook, USER_ROLES) {

    this.create = function (user) {
        //console.log(0, user);
        if (user.status == "connected" && true) {
            this.facebookId = user.authResponse.userID;
            this.userRole = USER_ROLES.user;
            var _this = this;
            //$facebook.cachedApi('/me')
            $facebook.api("/me").then(function(response) {
                    _this.userName = response.name;
                },
                function() {
                    this.destroy();
                });
            return;
        }
        if (user.status == "not_authorized") {
            this.destroy();
            return;
        }
    };

    this.destroy = function () {
        this.facebookId = null;
        this.userName = null;
        this.userRole = null;
    };
});


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
angular.module('scApp').config(function ($stateProvider) {
	$stateProvider.state('test1', {
	    templateUrl: 'src/test1/test1.html',
	    controller: 'test1Ctrl'
	});
});
  
angular.module('scApp').controller('test1Ctrl', function ($scope, $sce) {
	
	$scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
	
	console.log('test1Ctrl');
});
angular.module('scApp').config(function ($stateProvider) {
	$stateProvider.state('test2a', {
	    templateUrl: 'src/test2/test2a.html',
	    controller: 'test2aCtrl'
	}).state('test2b', {
	    templateUrl: 'src/test2/test2b.html',
	    controller: 'test2bCtrl'
	});
});
  
angular.module('scApp').controller('test2aCtrl', function ($scope) {
	
	console.log('test2aCtrl');
});
angular.module('scApp').controller('test2bCtrl', function ($scope) {
	
	console.log('test2bCtrl');
});