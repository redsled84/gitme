var app = angular.module('app', []);
app.controller('userController', function($scope) {
	$scope.userShow = false;

	$scope.range = function(min, max, step) {
	    step = step || 1;
	    var input = [];
	    for (var i = min; i <= max; i += step) {
	        input.push(i);
	    }
	    return input;
	};

	$scope.changeShow = function() {
		$scope.userShow = !$scope.userShow;
	};

	$scope.loadUser = function(username, token) {
		$scope.username = username;
		$scope.userURL = 'https://api.github.com/users/' + username;
		$scope.user = getGitHubUserData($scope.userURL, username, token);
		$scope.repos = getGitHubUserData($scope.userURL + '/repos', username, token);
		$scope.gists = getGitHubUserData($scope.userURL + '/gists', username, token);
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
	};
});

app.controller('inputController', function($scope) {
	$scope.username = '';
	$scope.token = '';
	$scope.show = true;
});