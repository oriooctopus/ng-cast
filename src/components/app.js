angular.module('video-player')
.controller('appCtrl', function($scope) {
  $scope.videoListData = window.exampleVideoData;
  $scope.clickedVideo = {};
  $scope.showVideo = true;
  $scope.onClick = function(video) {
    $scope.clickedVideo = video;
    $scope.showVideo = false;
    console.log($scope.clickedVideo.snippet.title);
  };
})

.directive('app', function() {
  return {
    templateUrl: '/src/templates/app.html'
  };
})
