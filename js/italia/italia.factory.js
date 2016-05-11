(function() {
	
	'use strict';
	
	angular
		.module('app.store_italia')
		.factory('Italia', ItaliaFactory);
		
	ItaliaFactory.$inject = ['$http'];
	
	function ItaliaFactory($http) {
				
		var factory  = {};
		
		factory.getProvinces = getProvinces;
		factory.getStores    = getStores;
		factory.getAboutUs   = getAboutUs;
		
		return factory;
		
		function getProvinces() {
			return $http.get('data/it_provinces.json');
		}
		
		function getStores() {
			return $http.get('data/it_stores.json');
		}
		
		function getAboutUs() {
			return $http.get('data/it_aboutus.json');
		}
								
	}
							
})();