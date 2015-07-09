angular.module('scApp').controller('test1Ctrl', function ($scope, $sce) {
	
	$scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
	
	console.log('test1Ctrl');
});