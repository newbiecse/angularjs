// create the controller and inject Angular's $scope
scotchApp.controller('homeController', ['$scope', '$filter', 'homeService', '$http', function($scope, $filter, homeService, $http, $modal) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';

	
	// sort & pagination
	$scope.predicate = "id";
	$scope.reverse = false;
	$scope.order = function(columnName) {
		// handle sort
		$scope.reverse = ($scope.predicate == columnName) ? !$scope.reverse : false;
		$scope.predicate = columnName;
		
		// execute sort
		$scope.listObj = $filter('orderBy')($scope.listObj, $scope.predicate, $scope.reverse);
		
		// store result to service
		homeService.setListData($scope.listObj);
	}
	
	// search
	/*
	$scope.search = function(seachText) {
		$scope.listObj = $filter('filter')($scope.listObj, $scope.predicate, $scope.reverse);
	}
	*/
	
	// get current data from service
	$scope.listObj = homeService.getListData();
	
	// invoke service load data
	$scope.loadAjax = function() {
		homeService.loadData().then(function(){
			$scope.listObj = homeService.getListData();
		});			
	}
	
	
	// Show a basic modal from a controller
	var myModal = $modal({title: 'My Title', content: 'My Content', show: true});
}]);