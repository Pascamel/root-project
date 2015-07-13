//angular.module('CiulApp', ['facebook'])
angular.module('scApp', ['ui.router', 'ui.bootstrap']);

angular.module('scApp').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('welcome');
    });

    $stateProvider.state('welcome', {
        templateUrl: 'src/homepage/homepage.html',
        controller: 'homepageCtrl'
    });
});

angular.module('scApp').controller('mainMenuCtrl', function($scope) { 

	$scope.menuItems = [
        {
            label: 'Link 2',
            uisref: 'test2a'
        },
        {
            label: 'Link 3',
            uisref: 'test2b'
        }
    ];

	console.log('mainMenuCtrl');
});	