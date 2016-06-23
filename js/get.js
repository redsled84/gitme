function getGitHubUserData(_url, _username, _token) {
	return $.ajax({
		type: 'GET',
	    url: _url,
	    dataType: 'json',
	    async: false,
	    beforeSend: function(xhr) {
	        xhr.setRequestHeader("Authorization", "Basic " + btoa(_username + ':' + _token));
	    }, success: function(data){}
	}).responseJSON;
}

function getRawData(_url) {
	return $.ajax({
	    url: _url,
	    dataType: 'text',
	    type: 'GET',
	    async: false
	}).responseText;
}