(function() {
	
	'use strict';
	
	angular
		.module('app.storelocator')
		.controller('StoreLocatorController', StoreLocatorController);
		
	StoreLocatorController.$inject = ['$scope', '$http', 'Italia'];
	
	function StoreLocatorController($scope, $http, Italia) {
		
		var mc = this;

		mc.inizialize = inizialize;
		mc.getAllStores = getAllStores;
		mc.getStoresByProvince = getStoresByProvince;
    mc.createMarker = createMarker;
    mc.getGeoCode = getGeoCode;
    mc.openInfoWindow = openInfoWindow;
    
    mc.inizialize();
    
		return mc;
		
		function inizialize() {
			
			$scope.provincia    = {};
	
			$scope.province     = Italia.getProvince();
			$scope.provincia.id = $scope.province[0].id;
					
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
	    $scope.icon = 'http://www.giuseppeangri.com/lb/v0/media/pin-lb-map.png';
	    
	    mc.getAllStores();
	    
		}
		
		function getAllStores() {
			$scope.allStores = Italia.store;
			
			for(var i in $scope.allStores){
				var marker = mc.createMarker($scope.allStores[i]);
				$scope.allStores[i].marker = marker;
			}
		}
			
		function getStoresByProvince() {
			$scope.stores = [];
			for(var s of $scope.allStores){
				if($scope.provincia.id == s.province)
					$scope.stores.push(s);
			}
		}
		
    function createMarker(info) {
	    
      var marker = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(info.lat, info.lng),
          title: info.name,
          icon : $scope.icon
      });
      marker.content = '<div class="infoWindowContent">' + info.address + ' - ' + info.city + '</div>';
      
      google.maps.event.addListener(marker, 'click', function(){
          $scope.infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
          $scope.infoWindow.open($scope.map, marker);
      });
      
      return marker;
             
    } 
      
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
    
    function openInfoWindow(e, marker){
      e.preventDefault();
      google.maps.event.trigger(marker, 'click');
      $scope.map.setZoom(17);
      $scope.map.setCenter(marker.getPosition());
    }
		
	}
	
})();