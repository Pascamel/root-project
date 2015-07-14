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