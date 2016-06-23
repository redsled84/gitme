var userApp = angular.module('userApp', []);
userApp.controller('userController', function($scope) {
	$scope.show = bool.getBool();
	$scope.userURL = 'https://api.github.com/users/redsled84';
	$scope.user = getGitHubUserData($scope.userURL, $scope.username, $scope.token);
	$scope.repos = getGitHubUserData($scope.userURL + '/repos', $scope.username, $scope.token);
	$scope.gists = getGitHubUserData($scope.userURL + '/gists', $scope.username, $scope.token);
	$scope.gistsCount = $scope.gists.length;
	$scope.option = 'stargazers_count';
	$scope.reverse = false;

	for (var i = 0; i < $scope.gistsCount; i++) {
		// $scope.gists[i].files.code = getRawData($scope.gists[i].files.raw_url);
		for (var key in $scope.gists[i].files) {
			var code = getRawData($scope.gists[i].files[key].raw_url);
			$scope.gists[i].files[key].code = code;
		}
	}

	$scope.range = function(min, max, step) {
	    step = step || 1;
	    var input = [];
	    for (var i = min; i <= max; i += step) {
	        input.push(i);
	    }
	    return input;
	};
});