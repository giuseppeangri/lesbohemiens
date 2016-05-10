(function() {
	
	'use strict';
	
	angular
		.module('app.main')
		.controller('MainController', MainController);
		
	MainController.$inject = ['$scope', 'screenSize', '$timeout', '$location'];
	
	function MainController($scope, screenSize, $timeout, $location) {
		
		var mc = this;
		
		mc.inizialize        = inizialize;
		mc.isMobile          = isMobile;
		mc.showMenu          = showMenu;
		mc.clickMenu         = clickMenu;
		mc.showSubMenu       = showSubMenu;
		mc.showSubMenuMobile = showSubMenuMobile;
		
		mc.inizialize();
		
		return mc;
		
		function inizialize() {
			
			$scope.menu = [
				{
					name	: 'Home',
					url 	: 'home'
				},
				{
					name	: 'Man',
					url 	: '',
					submenu : [
						{
							name : 'Spring Summer 16',
							url : 'man/ss16'
						},
						{
							name : 'Fall Winter 15/16',
							url : 'man/fw1516'
						},
						{
							name : 'Spring Summer 15',
							url : 'man/ss15'
						}
					]
				},
				{
					name	: 'Woman',
					url 	: '',
					submenu : [
						{
							name : 'Spring Summer 16',
							url : 'woman/ss16'
						},
						{
							name : 'Fall Winter 15/16',
							url : 'woman/fw1516'
						},
						{
							name : 'Spring Summer 15',
							url : 'woman/ss15'
						}
					]
				},
				{
					name	: 'Store Locator',
					url 	: 'storelocator'
				},
				{
					name	: 'Contact Us',
					url 	: 'contactus'
				}
			];
			
			$scope.show_submenu_mobile = {};
											
		}
		
		function isMobile() {
			return screenSize.is('xs, sm');
		}
		
		function showMenu() {
			if($scope.menu_mobile)
				$scope.menu_mobile = false;
			else
				$scope.menu_mobile = true;
		}
		
		function clickMenu(url) {
			
			if(mc.isMobile()) {
				mc.showMenu();
			}
			else {
				$scope.show_submenu = false;
				$scope.submenu = null;
			}
				
			var urlLessHash = url.substring(1);
			$location.url(urlLessHash);
		}
		
		function showSubMenu(submenu) {
			if($scope.show_submenu) {
				
				if( JSON.stringify(submenu) === JSON.stringify($scope.submenu) ) {
					$scope.show_submenu = false;
					$scope.submenu = null;
				}
				else {
					$scope.submenu_change = true;
					
					$timeout(function() { 
						$scope.submenu_change = false;
					}, 400);
					
					$scope.submenu = submenu;
				}
				
			}
			else {
				$scope.show_submenu = true;
				$scope.submenu = submenu;
			}
		}
		
		function showSubMenuMobile(entry) {
			if($scope.show_submenu_mobile[entry.name])
				$scope.show_submenu_mobile[entry.name] = false;
			else
				$scope.show_submenu_mobile[entry.name] = true;
		}
		
	}
	
})();