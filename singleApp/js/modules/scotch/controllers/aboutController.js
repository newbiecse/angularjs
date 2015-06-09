scotchApp.controller('aboutController', ['$scope', 'homeService', function($scope, homeService) {
	$scope.message = 'Look! I am an about page.';
	
	// get current data from service
	$scope.listObj = homeService.getListData();	
}]);