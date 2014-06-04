var App = angular.module('App', []);
App.controller('AppCtrl', function ($scope, $filter){
var clear = "";
$scope.lng =10;
$scope.ch = {"t":""};
$scope.ch.p = 'date';
$scope.ch.n = 'All Services';    
$scope.times = [
{"id":1,"date":"2015-03-31","day":"31 Mar","yr":2015,"done":"true","team":"PS","s":"grn","pc":25,"text":"Milestone 1","note":"no note","act":"main action"},
{"id":2,"date":"2015-03-30","day":"30 Mar","yr":2015,"done":"false","team":"HS","s":"red","pc":40,"text":"Milestone 2","note":"no note","act":"main action"},
{"id":3,"date":"2015-03-28","day":"28 Mar","yr":2015,"done":"false","team":"ETS","s":"gry","pc":75,"text":"Milestone 3","note":"no note","act":"main action"},
{"id":4,"date":"2015-03-29","day":"29 Mar","yr":2015,"done":"false","team":"HS","s":"amb","pc":90,"text":"Milestone 4","note":"no note","act":"main action"},
{"id":5,"date":"2015-03-31","day":"31 Mar","yr":2015,"done":"true","team":"BS","s":"grn","pc":25,"text":"Milestone 5","note":"no note","act":"main action"},
{"id":6,"date":"2015-03-30","day":"30 Mar","yr":2015,"done":"false","team":"HS","s":"red","pc":40,"text":"Milestone 6","note":"no note","act":"main action"},
{"id":7,"date":"2015-03-28","day":"28 Mar","yr":2015,"done":"false","team":"ES","s":"gry","pc":75,"text":"Milestone 7","note":"no note","act":"main action"},
{"id":8,"date":"2015-03-27","day":"27 Mar","yr":2015,"done":"false","team":"SNH","s":"amb","pc":90,"text":"Milestone 8","note":"no note","act":"main action"},
{"id":9,"date":"2015-02-28","day":"28 Feb","yr":2015,"done":"true","team":"BS","s":"grn","pc":25,"text":"Milestone 9","note":"no note","act":"main action"},
{"id":10,"date":"2015-01-30","day":"30 Jan","yr":2015,"done":"false","team":"CS","s":"red","pc":40,"text":"Milestone 10","note":"no note","act":"main action"},
{"id":11,"date":"2015-03-02","day":"03 Mar","yr":2015,"done":"false","team":"LS","s":"gry","pc":75,"text":"Milestone 11","note":"no note","act":"main action"},
{"id":12,"date":"2015-01-29","day":"29 Jan","yr":2015,"done":"false","team":"RS","s":"amb","pc":90,"text":"Milestone 12","note":"no note","act":"main action"}
];
$scope.teams = [
{"t":"BS","n":"Business Support"},{"t":"CS","n":"Corporate Services"},{"t":"ES","n":"Electoral Services"},{"t":"ETS","n":"Environmental & Technical Services"},{"t":"HS","n":"Housing Services"},{"t":"LS","n":"Leisure Services"},{"t":"PS","n":"Planning Services"},{"t":"RS","n":"Regulatory Services"},{"t":"SNH","n":"Safer North Hants"}];
});
