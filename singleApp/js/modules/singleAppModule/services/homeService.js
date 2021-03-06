// services
scotchApp.factory('homeService', function ($http, $q) {
	var deffered = $q.defer();
	var listData = {};

	var txtSearchId = "";
	
	/**
	*	load data from API
	*/
	return {
		loadData: function (){
				$http.get('https://api.github.com/users/mralexgray/repos')
				.success(function(data, status, headers, config) {
					listData = data;
					deffered.resolve();
				})
				.error(function(data, status, headers, config) {
					alert(data);
				});
			 return deffered.promise;
		},
		getListData: function() {
			return listData;
		},
		setListData: function(data) {
			listData = data;
		}
	}
	
});	