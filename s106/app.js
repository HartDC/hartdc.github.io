(function () {
var app = angular.module('app', ['leaflet-directive']);


app.controller("appCtrl", [ '$scope', function($scope) {
 $scope.parishes = parishes;
 $scope.pg = 0;
 $scope.$on("leafletDirectiveMap.geojsonClick", function(ev, featureSelected, leafletEvent) {
                Click(featureSelected, leafletEvent);            });

  angular.extend($scope, { center: { lat: 51.275592, lng: -0.892855,  zoom: 11     },
		layers: { baselayers: {
                osm: {name: 'OpenStreetMap',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'   }            }        },
	      defaults: {maxZoom: 18,		minZoom: 10,      scrollWheelZoom: true  },
		geojson: {  data: parishData,    style: col      },
 		markers: {
            point: {
                lat: 0,
                lng: 0,
                focus: false,
                draggable: false
            }  }
			
	     
			});

  function Click(Parish, event) {
		    $scope.parish = Parish.properties.name;
            $scope.parishC = Parish.properties.c;
		    $scope.markers.point.lat = event.latlng.lat;
	  	    $scope.markers.point.lng = event.latlng.lng;
		  }









 		$scope.Math = window.Math;

            /* Setting up the form for inputting */
           $scope.c = {};
           $scope.c.TD = 0; /* Current-Total dwellings */
           $scope.c.D1 = 0; /* Current-No. of 1-bed units */
           $scope.c.D2 = 0; /* Current-No. of 2-bed units*/
           $scope.c.D3 = 0; /*Current-No. of 3-bed units*/
           $scope.c.D4 = 0; /*Current-No. of 4- or more bed units*/
           $scope.c.C = false; /*Current-Commercial?*/
           $scope.c.B1 = 0; /*Current-Area of B1 development (m2) */
           $scope.c.B2 = 0; /*Current-Area of B2 development (m2) */
           $scope.c.B8 = 0; /*Current-Area of B8 development (m2) */
           $scope.p = {};
           $scope.p.TD = 0; /*Proposed-Total dwellings*/
           $scope.p.D1 = 0; /*Proposed-No. of 1-bed units*/
           $scope.p.D2 = 0; /*Proposed-No. of 2-bed units*/
           $scope.p.D3 = 0; /*Proposed-No. of 3-bed units*/
           $scope.p.D4 = 0; /*Proposed-No. of 4- or more bed units*/
           $scope.p.C = false; /*Proposed-Commercial?*/
           $scope.p.B1 = 0; /*Proposed-Area of B1 development (m2) */
           $scope.p.B2 = 0; /*Proposed-Area of B2 development (m2) */
           $scope.p.B8 = 0; /*Proposed-Area of B8 development (m2) */


            /* Placeholders for your net increases and location configs*/

           $scope.n = {};
           $scope.n.TD = 0; /*Net-Total dwellings*/
           $scope.n.D1 = 0; /*Net-No. of 1-bed units*/
           $scope.n.D2 = 0; /*Net-No. of 2-bed units*/
           $scope.n.D3 = 0; /*Net-No. of 3-bed units*/
           $scope.n.D4 = 0; /*Net-No. of 4- or more bed units*/
           $scope.n.B1 = 0; /*Net-Area of B1 development (m2) */
           $scope.n.B2 = 0; /*Net-Area of B2 development (m2) */
           $scope.n.B8 = 0; /*Net-Area of B8 development (m2) */

           $scope.v = {};
           $scope.v.ST = ''; /*SPA Mitigation -Selected */
           $scope.v.S1 = 0; /*SPA Mitigation -Selected */
           $scope.v.S2 = 0; /*SPA Mitigation -Selected */
           $scope.v.S3 = 0; /*SPA Mitigation -Selected */
           $scope.v.S4 = 0; /*SPA Mitigation -Selected */

            /*Parish */
           $scope.v.SP = {
                p: '',
                c: 0
            };

            /* Setting up the preset contribution values - updates should be applied here, make sure you include your admin fees and accounted for per person costs (this app just displays people data for info, not to calculate fees) */






           $scope.v.DL1 = 424; /*District Leisure/Community Development-1 Bed*/
           $scope.v.DL2 = 848; /*District Leisure/Community Development-2 Bed*/
           $scope.v.DL3 = 1272; /*District Leisure/Community Development-3 Bed*/
           $scope.v.DL4 = 1908; /*District Leisure/Community Development-4 or more Bed*/

           $scope.v.PL1 = 849; /*Parish Leisure/Community Development-1 Bed*/
           $scope.v.PL2 = 1699; /*Parish Leisure/Community Development-2 Bed*/
           $scope.v.PL3 = 2548; /*Parish Leisure/Community Development-3 Bed*/
           $scope.v.PL4 = 3822; /*Parish Leisure/Community Development-4 or more Bed*/

           $scope.v.EP1 = 0; /*Education Primary Schools-1 Bed*/
           $scope.v.EP2 = 3821; /*Education Primary Schools-2 Bed*/
           $scope.v.EP3 = 5731; /*Education Primary Schools-3 Bed*/
           $scope.v.EP4 = 7642; /*Education Primary Schools-4 or more Bed*/

           $scope.v.ES1 = 0; /*Education Secondary Schools-1 Bed*/
           $scope.v.ES2 = 4025; /*Education Secondary Schools-2 Bed*/
           $scope.v.ES3 = 6038; /*Education Secondary Schools-3 Bed*/
           $scope.v.ES4 = 8051; /*Education Secondary Schools-4 or more Bed*/

           $scope.v.T1 = 2079; /*NHTS-1 Bed*/
           $scope.v.T2 = 4014; /*NHTS-2 Bed*/
           $scope.v.T3 = 4014; /*NHTS-3 Bed*/
           $scope.v.T4 = 5730; /*NHTS-4 or more Bed*/

           $scope.v.TB1 = 4516 / 100; /*NHTS-B1 development */
           $scope.v.TB2 = 1811 / 100; /*NHTS-B2 development */
           $scope.v.TB8 = 2270 / 100; /*NHTS-B8 development */

           $scope.v.SHL1 = 4051; /*SPA Mitigation - Hitches Lane-1 Bed*/
           $scope.v.SHL2 = 7542; /*SPA Mitigation - Hitches Lane-2 Bed*/
           $scope.v.SHL3 = 7542; /*SPA Mitigation - Hitches Lane-3 Bed*/
           $scope.v.SHL4 = 10908; /*SPA Mitigation - Hitches Lane-4 or more Bed*/

           $scope.v.SHM1 = 3549; /*SPA Mitigation - Hawley Meadows-1 Bed*/
           $scope.v.SHM2 = 6607; /*SPA Mitigation - Hawley Meadows-2 Bed*/
           $scope.v.SHM3 = 6607; /*SPA Mitigation - Hawley Meadows-3 Bed*/
           $scope.v.SHM4 = 9555; /*SPA Mitigation - Hawley Meadows-4 or more Bed*/

           $scope.v.SA1 = 359; /*SAMM-1 Bed*/
           $scope.v.SA2 = 669; /*SAMM-2 Bed*/
           $scope.v.SA3 = 669; /*SAMM-3 Bed*/
           $scope.v.SA4 = 967; /*SAMM-4 or more Bed*/

           $scope.v.PP1 = 1.3; /*People-1 Bed*/
           $scope.v.PP2 = 2.42; /*People-2 Bed*/
           $scope.v.PP3 = 2.42; /*People-3 Bed*/
           $scope.v.PP4 = 3.5; /*People-4 or more Bed*/




}]);

})();