angular.module('exercisesCtrlModule', ['ionic', 'exercisesServiceModule'])

.controller('ExercisesCtrl', function($scope, $ionicSideMenuDelegate, $ionicFilterBar, $ionicPopover, exercisesService) {
  $scope.$on('$ionicView.enter', function() {
       // Code you want executed every time view is opened
       $ionicSideMenuDelegate.canDragContent(true);
  });
  exercisesService.get_exercises(function(err, exercises) {
    if (err) {'Must handle the error'}
    else if (exercises) {
      console.log('Woo we got the exercises in the Exercises View')
      $scope.exercises = exercises;
    }
  });

  var searchBar;

  $scope.showSearchBar = function() {
    searchBar = $ionicFilterBar.show({
      items: $scope.exercises,
      update: function (filteredItems, filterText) {
        $scope.exercises = filteredItems;
      }
    });
  };

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.popoverOptions = [
    {
      name: 'Add Exercise',
      onClick: function() {
        console.log('Add Exercise Clicked');
        $scope.popover.hide()
        //TODO bring up an add exercise menu
      }
    }
  ]
})