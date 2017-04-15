angular.module('video-player')
.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<',
      showVideo: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.path = (videoId) => {
        return 'https://www.youtube.com/embed/' + videoId;
      }
    },

    templateUrl: 'src/templates/videoPlayer.html'
  };
});
