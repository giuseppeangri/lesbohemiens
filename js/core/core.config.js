(function() {
	
	'use strict';
	
	angular
		.module('app.core')
		.config(config)
		.run(run);
	
	config.$inject = ['$httpProvider', '$routeProvider', '$locationProvider'];	
	
	function config($httpProvider, $routeProvider, $locationProvider) {
		
		var baseUrl = 'views/';
		
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		
		$routeProvider
			.when('/', {
				templateUrl 	: baseUrl + 'home.html',
				controller		: 'HomeController',
				controllerAs	: 'HomeCtrl'
			})
			.when('/home', {
				templateUrl 	: baseUrl + 'home.html',
				controller		: 'HomeController',
				controllerAs	: 'HomeCtrl'
			})
			.when('/man/fw1516', {
				templateUrl 	: baseUrl + 'man.html',
				controller		: 'ManController',
				controllerAs	: 'ManCtrl',
				resolve 			: {
					collection	: function() { return 'fw1516'; }
				}
			})
			.when('/man/ss15', {
				templateUrl 	: baseUrl + 'man.html',
				controller		: 'ManController',
				controllerAs	: 'ManCtrl',
				resolve 			: {
					collection	: function() { return 'ss15'; }
				}
			})
			.when('/woman/fw1516', {
				templateUrl 	: baseUrl + 'woman.html',
				controller		: 'WomanController',
				controllerAs	: 'WomanCtrl',
				resolve 			: {
					collection	: function() { return 'fw1516'; }
				}
			})
			.when('/woman/ss15', {
				templateUrl 	: baseUrl + 'woman.html',
				controller		: 'WomanController',
				controllerAs	: 'WomanCtrl',
				resolve 			: {
					collection	: function() { return 'ss15'; }
				}
			})
			.when('/storelocator', {
				templateUrl 	: baseUrl + 'storelocator.html',
				controller		: 'StoreLocatorController',
				controllerAs	: 'StoreLocatorCtrl'
			})
			.otherwise({
	      redirectTo		: '/home'
	    });
	    
		$locationProvider.html5Mode(true);	    
		
	}
	
	run.$inject = ['$rootScope', '$location'];	
	
	function run($rootScope, $location) {
		
		$rootScope.firstOpen = true;
		
		$rootScope.$on('$routeChangeSuccess', function () {
			
			var path = $location.path();
			
			if( (path == '/' || path == '/home') ) {
				$rootScope.isHome = true;
			}
			else {
				$rootScope.isHome = false;
				$rootScope.firstOpen = false;
			}
							
		});
	  
	}
	
})();