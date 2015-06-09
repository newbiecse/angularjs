angular.module("myapp", [])
    .controller("MyController", function($scope) {
      //empty controller function
	  $scope.myData = {};
	  $scope.myData.textf = function() { return "A text from a function"; };
	  $scope.myData.showIt = true;
	  $scope.myData.doClick = function() {
		  // alert("doclick");
		  $scope.myData.showIt = ($scope.myData.showIt) ? false : true;
		  // return $scope.myData.showIt;
	  }
	  
	  $scope.myData.switch = 1;
	  
	  $scope.myData.firstName = "fn";
	  
	  $scope.myData.isAddOrRemove = false;
	  $scope.myData.funcAddOrRemove = function() {
		  $scope.myData.isAddOrRemove = ($scope.myData.isAddOrRemove) ? false : true;
	  }
    })
	.controller('ExampleController', ['$scope', function($scope) {      
	  $scope.master = {};	 

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
	  
	  $scope.testJSON = {};
	  $scope.testJSON.id = 1;
	  $scope.testJSON.username = "abc";
    }])
	
	// test repeat
	.controller('TestRepeatController', ['$scope', function($scope) {
		// $scope.listStudents = new Array();
		$scope.listStudents = [{id: 1, name: "A"}, {id: 2, name: "B"}];
		
		$scope.predicate = 'id';
		$scope.reverse = true;

		$scope.doSort = function(predicate) {
			$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
			// $scope.reverse = !$scope.reverse;
			$scope.predicate = predicate;
		}

		
		$scope.doClickAdd = function(){
			$scope.listStudents.push({id: 3, name: "C"});
		}
		
		$scope.doClickRemove = function(){
			$scope.listStudents.pop();
		}

    }])
	
	.controller('BindHtmlEXController', ['$scope', function($scope) {
		$scope.funcForcus = function(event) {
			$(event.target).css('display', 'none');
		}
	}]);