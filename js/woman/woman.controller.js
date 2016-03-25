(function() {
	
	'use strict';
	
	angular
		.module('app.woman')
		.controller('WomanController', WomanController);
			
	WomanController.$inject = ['$scope', 'collection'];
	
	function WomanController($scope, collection) {
		
		var wc = this;
		
		wc.inizialize = inizialize;
		wc.fw1516 = fw1516;
		wc.ss15 = ss15;
		
		wc.inizialize();
		
		return wc;
		
		function inizialize() {
			
			wc[collection]();
						
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
				},
				
			];
			
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
					},				
			];
			
		}
		
	}
	
})();