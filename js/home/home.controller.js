(function() {
	
	'use strict';
	
	angular
		.module('app.home')
		.controller('HomeController', HomeController);
			
	HomeController.$inject = ['$scope'];
	
	function HomeController($scope) {
		
		var hc = this;
		
		hc.inizialize = inizialize;
		
		hc.inizialize();
		
		return hc;
		
		function inizialize() {
			$scope.menu_mobile = false;
		}
		
	}
	
})();