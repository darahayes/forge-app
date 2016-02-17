angular.module('controllers.workout', ['Users', 'Auth', 'UserSettings', 'ionic', 'Workouts', 'Exercises'])

.controller('WorkoutCtrl', ['$scope', 'WorkoutService', 'SettingsService', '$ionicListDelegate', '$ionicSideMenuDelegate', '$ionicModal', '$ionicPopup', '$ionicFilterBar', 'ExercisesService', 'workout', 'editing',
  function($scope, WorkoutService, SettingsService, $ionicListDelegate, $ionicSideMenuDelegate, $ionicModal, $ionicPopup, $ionicFilterBar, ExercisesService, workout, editing) {
    $scope.$on('$ionicView.enter', function() {
         // Code you want executed every time view is opened
         $ionicSideMenuDelegate.canDragContent(true);
    });

    var searchBar;

    ExercisesService.get_exercises(function(err, exercises) {
      if (err) {'Must handle the error'}
      else if (exercises) {
        console.log('Woo we got the exercises')
        $scope.exercises = exercises;
      }
    });
    $scope.workout = workout
    $scope.modals = {};
    $scope.search = '';

    $ionicModal.fromTemplateUrl('templates/exercises_modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modals.exercises_modal= modal;
    });

    $scope.addExercise = function(exercise) {
      
      //if not already added
      if (!_.some($scope.workout.exercises, {name: exercise.name})) {
        console.log(JSON.stringify(exercise))
        exercise.sets = [];
        $scope.workout.exercises.push(exercise);
        searchBar()
      }
      $scope.modals.exercises_modal.hide();
      console.log("workout: ", JSON.stringify($scope.workout));
    }

    $scope.show_modal = function(modal) {
      $scope.modals[modal + '_modal'].show();
    }

    $scope.close_modal = function(modal) {
      $scope.modals[modal + '_modal'].hide();
    };

    $scope.addSet = function(exercise) {
      var next = {unit: SettingsService.getDefaultMassUnit()}
      if (exercise.sets.length > 0) {
        var previous = exercise.sets[exercise.sets.length-1];
        next.reps = (previous.reps) ? previous.reps : 0;
        next.weight = (previous.weight) ? previous.weight : null;
      }
      exercise.sets.push(next);
    }

    $scope.remove_set = function(index, exercise) {
      console.log('remove set called', index, exercise)
      $ionicListDelegate.closeOptionButtons();
      exercise.sets.splice(index, 1)
    }

    $scope.increment = function(set) {
      if (!set.reps) set.reps = 0;
      console.log('increment called')
      set.reps++;
    }

    $scope.decrement = function(set) {
      if (set.reps > 0) set.reps--;
    }

    $scope.save_workout = function() {
      WorkoutService.save_workout($scope.workout);
    }

    $scope.showSearchBar = function() {
      searchBar = $ionicFilterBar.show({
        items: $scope.exercises,
        update: function (filteredItems, filterText) {
          $scope.exercises = filteredItems;
          if (filterText) {
            console.log(filterText);
          }
        }
      });
    };

    $scope.show_popup = function(set) {
      $scope.popup = {
        weight: null,
        increment: function() {
          this.weight = this.weight + 2.5;
        },
        decrement: function() {
          if (this.weight >= 0 && this.weight <= 2.5) {
            this.weight = 0;
          }
          else if (this.weight > 2.5) {
            this.weight = this.weight - 2.5;
          }
        }
      }
      console.log("popup function");
      var weight_popup = $ionicPopup.show({
        templateUrl: 'templates/weight_popup.html',
        title: 'Weight',
        scope: $scope,
        buttons: [
          {text: 'Cancel'},
          {
            text: 'Save',
            type: 'button-positive',
            onTap: function(e) {
              return $scope.popup.weight;
            }
          }
        ]
      })

      weight_popup.then(function(res) {
        set.weight = (res) ? res : 0;
      })
    }
}])