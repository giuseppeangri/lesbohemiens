(function() {
	
	'use strict';
	
	angular
		.module('app.man')
		.controller('ManController', ManController);
			
	ManController.$inject = ['$scope', 'collection'];
	
	function ManController($scope, collection) {
		
		var mc = this;
		
		mc.inizialize = inizialize;
		mc.ss15       = ss15;
		mc.fw1516     = fw1516;
		mc.ss16       = ss16;
		
		mc.inizialize();
		
		return mc;
		
		function inizialize() {
			
			mc[collection]();
						
		}
		
		function ss15() {
			
			$scope.top_image = {
				src : 'media/man/ss15/cover.jpg',
				alt : ''
			}
			
			$scope.descriptions = [
				'SPRING SUMMER 15',
				'MENSWEAR COLLECTION'
			];
			
			$scope.images = [
				{
					src : 'media/man/ss15/M1.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M2.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M3.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M4.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M5.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M6.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M7.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M8.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M9.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M10.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M11.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M12.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M13.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M14.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M15.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M16.jpg',
					alt : ''
				},
				{
					src : 'media/man/ss15/M17.jpg',
					alt : ''
				}
			];
		}
		
		function fw1516() {
			
			$scope.top_image = {
				src : 'media/man/fw1516/cover.jpg',
				alt : ''
			}
			
			$scope.descriptions = [
				'FALL WINTER 15/16',
				'MENSWEAR COLLECTION'
			];
			
			$scope.images = [
				{
					src : 'media/man/fw1516/1.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/2.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/3.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/4.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/5.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/6.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/7.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/8.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/9.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/10.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/11.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/12.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/13.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/14.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/15.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/16.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/17.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/18.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/19.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/20.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/21.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/22.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/23.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/24.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/25.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/26.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/27.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/28.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/29.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/30.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/31.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/32.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/33.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/34.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/35.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/36.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/37.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/38.jpeg',
					alt : ''
				},
				{
					src : 'media/man/fw1516/39.jpeg',
					alt : ''
				}
			];
		}
		
		function ss16() {
			
			$scope.top_image = {
				src : 'media/man/ss16/cover.jpg',
				alt : ''
			}
			
			$scope.descriptions = [
				'SPRING SUMMER 2016',
				'MENSWEAR COLLECTION'
			];
			
			$scope.images = [
				{
					src : 'media/man/ss16/SS16 - 1.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 2.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 3.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 4.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 5.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 6.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 7.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 8.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 9.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 10.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 11.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 12.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 13.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 14.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 15.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 16.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 17.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 18.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 19.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 20.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 21.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 22.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 23.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 24.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 25.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 26.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 27.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 28.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 29.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 30.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 31.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 32.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 33.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 34.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 35.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 36.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 37.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 38.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 39.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 40.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 41.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 42.jpeg',
					alt : ''
				},
				{
					src : 'media/man/ss16/SS16 - 43.jpeg',
					alt : ''
				}
			];
						
		}
		
	}
	
})();