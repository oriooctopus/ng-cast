angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(str, callback) {
	  $http({
	  	method: 'GET',
	  	url: 'https://www.googleapis.com/youtube/v3/search/',
	  	params: {maxResults: 5, q: str, key: window.YOUTUBE_API_KEY, type: 'video', videoEmbeddable: true, part: 'snippet'}
	  }).then(function successCallback(data) {
	  	console.log('success');
	  	callback(data.data.items);
	  	console.log(data);
	  }, function errorCallback(response) {
	  	console.log('failure');
	  	console.log(response);

	  });
  	
  }
});
