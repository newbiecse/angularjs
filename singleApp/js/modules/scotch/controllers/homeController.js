// create the controller and inject Angular's $scope
scotchApp.controller('homeController', ['$scope', 'homeService', '$http', function($scope, homeService, $http) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
	
	// sort & pagination
	$scope.predicate = "id";
	$scope.reverse = false;
	$scope.order = function(columnName) {
		$scope.reverse = ($scope.predicate == columnName) ? !$scope.reverse : false;
		$scope.predicate = columnName;
	}
	
	// search

	
	// get current data from service
	$scope.listObj = homeService.getListData();
	
	// invoke service load data
	$scope.loadAjax = function() {
		homeService.loadData().then(function(){
			$scope.listObj = homeService.getListData();
		});			
	}
	
}]);