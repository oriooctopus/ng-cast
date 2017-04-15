angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      onClick: '<'
    },
    restrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
