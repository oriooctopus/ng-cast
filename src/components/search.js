angular.module('video-player')
.directive('search', function() {
  return {
  	scope: {
  		searchValue: '=',
      result: '<',
  	},
  	restrict: 'E',
  	bindToController: true,
  	controllerAs: 'ctrl',
  	controller: function() {

  	},
    templateUrl: 'src/templates/search.html'
  };
})
