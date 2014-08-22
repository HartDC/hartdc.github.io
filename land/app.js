(function () {
var app = angular.module('app', ['leaflet-directive','ui.bootstrap']);

app.controller("appCtrl", [ '$scope', '$timeout', function($scope, $timeout) {
	
	$scope.$on("leafletDirectiveMap.geojsonClick", function(ev, featureSelected, leafletEvent) {
                Click(featureSelected, leafletEvent);            });
    
	var col = {color: '#F37B1D',fillColor: '#F37B1D',opacity: 1.0,fillOpacity: 0.4,weight: 1,smoothFactor: 1.0};
  	angular.extend($scope, { 
        center: { lat: 51.275592, lng: -0.892855,  zoom: 11     },
		layers: { baselayers: {
                    osm: {  
                        name: 'OpenStreetMap',
                        url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',                
                        type: 'xyz'  } } },

		geojson: {  data: land,    style: col      },
 		markers: {
            point: {
                lat: 0,
                lng: 0,
                focus: false,
                draggable: false
            }  }
			
	     
			});

  	function Click(Land, event) {
		    $scope.choice = Land.meta.owner;
		    $scope.url = Land.meta.url;
		    $scope.markers.point.lat = event.latlng.lat;
	  	    $scope.markers.point.lng = event.latlng.lng;
		  }

      $scope.postcodes = pcodes;
}]);

})();
