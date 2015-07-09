angular.module('scApp').config(function ($stateProvider) {
	$stateProvider.state('test2a', {
	    templateUrl: 'src/test2/test2a.html',
	    controller: 'test2aCtrl'
	}).state('test2b', {
	    templateUrl: 'src/test2/test2b.html',
	    controller: 'test2bCtrl'
	});
});
  