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
angular.module('scApp').controller('homepageCtrl', function ($scope, $sce) {
	
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