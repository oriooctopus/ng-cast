angular.module('video-player')
.directive('app', function() {
  return {
    scope: {

    },
    resrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(youTube) {
      this.selectVideo = (video) => {
        console.log(this, this.currentVideo);
        this.currentVideo = video;
      };
      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      };
      
      this.videos = window.exampleVideoData;
      this.currentVideo = {};

      youTube.search('donald', this.searchResults);
      
    },
    templateUrl: 'src/templates/app.html'
  };
})