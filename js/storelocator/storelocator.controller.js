(function() {
	
	'use strict';
	
	angular
		.module('app.storelocator')
		.controller('StoreLocatorController', StoreLocatorController);
		
	StoreLocatorController.$inject = ['$scope', '$http', '$q', 'Italia'];
	
	function StoreLocatorController($scope, $http, $q, Italia) {
		
		var mc = this;

		mc.inizialize          = inizialize;
		mc.filterProvinces     = filterProvinces;
		mc.makeAllStores       = makeAllStores;
		mc.getStoresByProvince = getStoresByProvince;
    mc.createMarker      	 = createMarker;
    mc.openInfoWindow   	 = openInfoWindow;
//     mc.getGeoCode     = getGeoCode;
    
    mc.inizialize();
    
		return mc;
		
		function inizialize() {
			
			var promises = [];
			
			promises.push(Italia.getProvinces().then(function(result) {
				$scope.provinces = result.data;
			}));
			
			promises.push(Italia.getStores().then(function(result) {
				$scope.stores = result.data;
			}));
			
			$q.all(promises).then(function() {

				mc.filterProvinces();
				
				$scope.province    = {};
				$scope.province.id = $scope.provinces[0].id;
						
				$scope.mapOptions = {
		      center: { lat: 41.29246, lng: 12.5736108},
		      zoom: 6,
		      scrollwheel: false,
		      panControl: false,
		      disableDefaultUI: true,
		      zoomControl: true,
		      zoomControlOptions: {
		        style : google.maps.ZoomControlStyle.LARGE,
		        position : google.maps.ControlPosition.RIGHT_TOP
		      },
		      streetViewControl: true,
		      streetViewControlOptions: {
		        position : google.maps.ControlPosition.RIGHT_TOP
		      }
		    };
		    
		    $scope.map = new google.maps.Map(document.getElementById('map-canvas'), $scope.mapOptions);
		       
		    $scope.infoWindow = new google.maps.InfoWindow();
		    $scope.icon = 'media/pin-lb-map.png';
		    
		    mc.makeAllStores();
				
			});
		    
		}
		
		function filterProvinces() {
			
			for(var store of $scope.stores){
				
				var province = store.province;
				$scope.provinces[province-1].show = true;
				
			}
			
		}
		
		function makeAllStores() {
			
			for(var i in $scope.stores){
				var marker = mc.createMarker($scope.stores[i]);
				$scope.stores[i].marker = marker;
			}
			
		}
			
		function getStoresByProvince() {
			
			$scope.storesByProvince = [];
			for(var store of $scope.stores){
				if($scope.province.id == store.province)
					$scope.storesByProvince.push(store);
			}
			
		}
		
    function createMarker(info) {
	    
      var marker = new google.maps.Marker({
        map 			: $scope.map,
        position 	: new google.maps.LatLng(info.lat, info.lng),
        title 		: info.name,
        icon 			: $scope.icon
      });
      
      marker.content = '<div class="infoWindowContent">' + info.address + ' - ' + info.city + '</div>';
      
      google.maps.event.addListener(marker, 'click', function(){
        $scope.infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
        $scope.infoWindow.open($scope.map, marker);
      });
      
      return marker;
             
    } 
      
    function openInfoWindow(e, marker){
      e.preventDefault();
      google.maps.event.trigger(marker, 'click');
      $scope.map.setZoom(17);
      $scope.map.setCenter(marker.getPosition());
    }
    
/*
    function getGeoCode(store) {
	    
	    var googleUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
		    
	    return $http.get( googleUrl + store.address +' ' + store.city + '&sensor=false' ).
			  success(function(data, status, headers, config) {
				  data.results.push(store.name);
				  data.results.push(store.address);
				  data.results.push(store.city);
			  }).
			  error(function(data, status, headers, config) {
			    console.log('ERROR');
			  });
			  	    
    }
*/
		
	}
	
})();