angular.module('video-player')
.service('youTube', function() {
  $http({
  	method: 'GET',
  	url: '',
  }).then(function successCallback(respone) {
  	console.log('Success!');
  }, function errorCallback(response) {
  	console.log('Failure!');
  });
});
