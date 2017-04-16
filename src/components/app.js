angular.module('video-player')
.directive('app', function() {
  return {
    scope: {

    },
    resrict: 'E',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function(youTube, $timeout) {
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      };

      this.result = () => {
        youTube.search(this.searchValue, this.searchResults);
      }
      


      this.searchValue = '';
      this.videos = window.exampleVideoData;
      this.currentVideo = {};

      youTube.search('donald', this.searchResults);
      
    },
    templateUrl: 'src/templates/app.html'
  };
})