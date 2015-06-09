	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	
	// services
	scotchApp.service('myService', function () {
		var listData = {};
		this.setListData = function(_listData) {
			listData = _listData;
		}
		this.getListData = function() {
			return listData;
		}
	});	
	/*
	scotchApp.factory('myService', function () {
		var listData = {};
		this.setListData = function(_listData) {
			listData = _listData;
		}
		this.getListData = function() {
			return listData;
		}
	});
	*/
	
	
	
	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController',
				reloadOnSearch: true,
				caseInsensitiveMatch: true
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController',
				caseInsensitiveMatch: true
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController',
				caseInsensitiveMatch: true
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', ['$scope', 'myService', '$http', function($scope, myService, $http) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		
		
		$scope.listObj = myService.getListData();
		
		$scope.loadAjax = function (){
			
			$scope.loading = true;
			
			// Simple GET request example :
			$http.get('https://api.github.com/users/mralexgray/repos').
			  success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				$scope.listObj = data;
				// store data to service
				myService.setListData(data);
				$scope.loading = false;
			  }).
			  error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
				alert(data);
			  });			
		}
		
	}]);

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});