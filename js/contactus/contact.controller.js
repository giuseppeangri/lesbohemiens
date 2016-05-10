(function() {
	
	'use strict';
	
	angular
		.module('app.contact')
		.controller('ContactController', ContactController);
			
	ContactController.$inject = ['$scope'];
	
	function ContactController($scope) {
		
		var hc = this;
		
		$scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
		
		hc.inizialize = inizialize;
		
		hc.inizialize();
		
		return hc;
		
		$scope.submitForm = function() {

            // check to make sure the form is completely valid
            if ($scope.userForm.$valid) {
                alert('our form is amazing');
            }

        };
		
		function inizialize() {
			$scope.menu_mobile = false;
		}
		
	}
	
})();