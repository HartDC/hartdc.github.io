var app = angular.module('StarterApp', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('grey');
});

app.controller('AppCtrl', ['$scope', function($scope){
  var newTabIndex = 0;
$scope.selectedIndex = newTabIndex;
$scope.userSub='';
$scope.subs = ['Lite', 'Standard', 'Pro'];




}]);
