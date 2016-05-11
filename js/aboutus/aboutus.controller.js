(function() {
	
	'use strict';
	
	angular
		.module('app.aboutus')
		.controller('AboutUsController', AboutUsController);
		
	AboutUsController.$inject = ['$scope', 'Italia'];
		
	function AboutUsController($scope, Italia) {
		
		var auc = this;
		
		auc.inizialize = inizialize;
		auc.changeItem = changeItem;
		
		auc.inizialize();
		
		return auc;
		
		function inizialize() {
						
			Italia.getAboutUs().then(function(result) {
				
				$scope.items = result.data;
				
				$scope.currentIndex = 0;
				$scope.currentItem  = $scope.items[$scope.currentIndex];
								
			});
			
		}
		
		function changeItem(index) {
			$scope.currentIndex = index;
			$scope.currentItem  = $scope.items[index];
		}
		
	}
	
})();