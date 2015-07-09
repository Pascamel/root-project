//angular.module('CiulApp', ['facebook'])
angular.module('scApp', ['ui.router', 'ui.bootstrap']);

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