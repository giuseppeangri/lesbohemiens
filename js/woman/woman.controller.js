(function() {
	
	'use strict';
	
	angular
		.module('app.woman')
		.controller('WomanController', WomanController);
			
	WomanController.$inject = ['$scope', 'collection'];
	
	function WomanController($scope, collection) {
		
		var wc = this;
		
		wc.inizialize = inizialize;
		wc.ss15       = ss15;
		wc.fw1516     = fw1516;
		wc.ss16       = ss16;
		
		wc.inizialize();
		
		return wc;
		
		function inizialize() {
			
			wc[collection]();
						
		}
		
		function ss15() {
			
			$scope.top_image = {
				src : 'media/woman/ss15/cover.jpg',
				alt : ''
			}
			
			$scope.descriptions = [
				'SPRING SUMMER 15',
				'WOMENSWEAR COLLECTION'
			];
			
			$scope.images = [
				{
					src : 'media/woman/ss15/D1.jpg',
					alt : ''
				},
				{
					src : 'media/woman/ss15/D2.jpg',
					alt : ''
				},	
				{
					src : 'media/woman/ss15/D3.jpg',
					alt : ''
				},	
				{
					src : 'media/woman/ss15/D4.jpg',
					alt : ''
				},	
				{
					src : 'media/woman/ss15/D5.jpg',
					alt : ''
				},	
				{
					src : 'media/woman/ss15/D6.jpg',
					alt : ''
				},	
				{
					src : 'media/woman/ss15/D7.jpg',
					alt : ''
				},	
				{
					src : 'media/woman/ss15/D8.jpg',
					alt : ''
				},	
				{
					src : 'media/woman/ss15/D9.jpg',
					alt : ''
				},	
				{
					src : 'media/woman/ss15/D10.jpg',
					alt : ''
				}
			];
			
		}
		
		function fw1516() {
			
			$scope.top_image = {
				src : 'media/woman/fw1516/cover.jpg',
				alt : ''
			}
			
			$scope.descriptions = [
				'FALL WINTER 15/16',
				'WOMENSWEAR COLLECTION'
			];
			
			$scope.images = [
				{
					src : 'media/woman/fw1516/1.jpg',
					alt : ''
				},
				{
					src : 'media/woman/fw1516/2.jpg',
					alt : ''
				},
				{
					src : 'media/woman/fw1516/3.jpg',
					alt : ''
				},
				{
					src : 'media/woman/fw1516/4.jpg',
					alt : ''
				},
				{
					src : 'media/woman/fw1516/5.jpg',
					alt : ''
				},
				{
					src : 'media/woman/fw1516/6.jpg',
					alt : ''
				},
				{
					src : 'media/woman/fw1516/7.jpg',
					alt : ''
				}
			];
			
		}
		
		function ss16() {
			
			$scope.top_image = {
				src : 'media/woman/ss16/cover.jpg',
				alt : ''
			}
			
			$scope.descriptions = [
				'SPRING SUMMER 2016',
				'WOMENSWEAR COLLECTION'
			];
			
			$scope.images = [
				{
					src : 'media/woman/ss16/SS16W - 1.jpeg',
					alt : ''
				},
				{
					src : 'media/woman/ss16/SS16W - 2.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 3.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 4.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 5.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 6.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 7.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 8.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 9.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 10.jpeg',
					alt : ''
				},
				{
					src : 'media/woman/ss16/SS16W - 11.jpeg',
					alt : ''
				},
				{
					src : 'media/woman/ss16/SS16W - 12.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 13.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 14.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 15.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 16.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 17.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 18.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 19.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 20.jpeg',
					alt : ''
				},
				{
					src : 'media/woman/ss16/SS16W - 21.jpeg',
					alt : ''
				},
				{
					src : 'media/woman/ss16/SS16W - 22.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 23.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 24.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 25.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 26.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 27.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 28.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 29.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 30.jpeg',
					alt : ''
				},
				{
					src : 'media/woman/ss16/SS16W - 31.jpeg',
					alt : ''
				},
				{
					src : 'media/woman/ss16/SS16W - 32.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 33.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 34.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 35.jpeg',
					alt : ''
				},	
				{
					src : 'media/woman/ss16/SS16W - 36.jpeg',
					alt : ''
				}
			];
			
		}
		
	}
	
})();