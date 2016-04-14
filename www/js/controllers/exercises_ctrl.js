angular.module('exercisesCtrlModule', ['ionic', 'exercisesServiceModule'])

.controller('ExercisesCtrl', function($state, $scope, $ionicSideMenuDelegate, $ionicFilterBar, $ionicPopover, exercisesService) {
  $scope.$on('$ionicView.enter', function() {
       // Code you want executed every time view is opened
       $ionicSideMenuDelegate.canDragContent(true);
  });
  exercises = exercisesService.exercises;
  categories = exercisesService.categories;
  $scope.list = categories
  var searchBar;

  $scope.selected = function(selected) {
    console.log(JSON.stringify($state.current))
    if (selected.type === 'category' && $state.current.url !== '/overview') {
      $state.go('app.exercises.category', {category: selected.name})
    }
  }

  $scope.showSearchBar = function(filterAllExercises) {
    console.log('SEARCH BAR')
    console.log($scope.list);
    searchBar = $ionicFilterBar.show({
      items: $scope.list,
      update: function (filteredItems, filterText) {
        $scope.list = filteredItems;
      },
      cancel: function() {
        $scope.list = categories
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

.controller('ExercisesListCtrl', function($scope, exercisesService, $ionicFilterBar, category) {

  $scope.list = exercisesService.getCategory(category)
  var searchBar;

  $scope.showSearchBar = function() {
    searchBar = $ionicFilterBar.show({
      items: $scope.list,
      update: function (filteredItems, filterText) {
        $scope.list = filteredItems;
      }
    });
  };

})
