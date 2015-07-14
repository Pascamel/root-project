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