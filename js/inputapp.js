var inputApp = angular.module('inputApp', [])
.service('bool', function() {
	var this.show = true;
	var setBool = function(bool) {
		this.show = bool;
	};
	var getBool = function() {
		return this.show;
	};

	return {
		setBool: setBool,
		getBool: getBool
	};
});

inputApp.controller('inputController', function($scope, bool) {
	$scope.username = '';
	$scope.token = '';
	$scope.show = bool.getBool();
});