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