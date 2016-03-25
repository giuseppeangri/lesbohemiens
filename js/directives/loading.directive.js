(function() {
	
	'use strict';
	
	angular
		.module('app')
		.directive('loading', loading);

  loading.$inject = ['$rootScope', '$timeout'];
	
	function loading($rootScope, $timeout) {
		
		var directive = {
	    link : link
		};
		
    return directive;
            
		function link(scope, element, attrs) {
						
			scope.isRouteLoading = false;

      $rootScope.$on('$routeChangeStart', function() {
	      document.getElementsByTagName('body')[0].scrollTop = 0;
        scope.isRouteLoading = true;
      });
      
      $rootScope.$on('$routeChangeSuccess', function() {
        $timeout(function(){
          scope.isRouteLoading = false;
		    }, 600);
      });
        
		}
		
  }
    
})();