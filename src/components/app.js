angular.module('video-player')
// .controller('appCtrl', function($scope) {
//   $scope.videoListData = window.exampleVideoData;
//   $scope.currentVideo = {};
//   
// })
.directive('app', function() {
  return {
    scope: {

    },
    resrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      // var $injector = angular.injector();
      // console.log($injector.get('youTube'));
      this.currentVideo = {};
      this.videos = window.exampleVideoData;
      this.selectVideo = (video) => {
        console.log(this, this.currentVideo);
        this.currentVideo = video;
      };
      this.searchResults = () => {

      };

  
    },
    templateUrl: 'src/templates/app.html'
  };
})