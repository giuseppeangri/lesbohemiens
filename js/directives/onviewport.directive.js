(function() {
	
	'use strict';
	
	angular
		.module('app')
		.directive('onviewport', onviewport);

  onviewport.$inject = ['$window'];
	
	function onviewport($window) {
		
		var directive = {
			restrict : 'A',
	    link : link
		};
		
    return directive;
        
		function link(scope, element, attrs) {
			
			if( element[0].getBoundingClientRect().top < $window.innerHeight ) {
	      angular.element(element).addClass(attr.onviewport);
      }

      angular.element($window).on('scroll', function() {
	      if( element[0].getBoundingClientRect().top < $window.innerHeight ) {
		      return angular.element(element).addClass(attrs.onviewport);
        }
      });
								
		}
		
  }
    
})();