// create the controller and inject Angular's $scope
scotchApp.controller('mainController', ['$scope', 'myService', '$http', function($scope, myService, $http) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
	
	// sort & pagination
	$scope.predicate = "id";
	$scope.reverse = false;
	$scope.order = function(columnName) {
		$scope.reverse = ($scope.predicate == columnName) ? !$scope.reverse : false;
		$scope.predicate = columnName;
	}

	
	// get current data from service
	$scope.listObj = myService.getListData();
	
	// invoke service load data
	$scope.loadAjax = function() {
		myService.loadData().then(function(){
			$scope.listObj = myService.getListData();
		});			
	}
	
}]);