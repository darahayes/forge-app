angular.module('controllers.workout', ['Users', 'Auth', 'UserSettings', 'ionic'])

.controller('WorkoutCtrl', ['$scope', 'SettingsService', '$ionicListDelegate', '$ionicSideMenuDelegate', '$ionicModal', '$ionicPopup', 'exercisesService',
  function($scope, SettingsService, $ionicListDelegate, $ionicSideMenuDelegate, $ionicModal, $ionicPopup, exercisesService) {
    $scope.$on('$ionicView.enter', function() {
         // Code you want executed every time view is opened
         $ionicSideMenuDelegate.canDragContent(true);
    });
    $scope.exercises = exercisesService;
    $scope.workout = []
    $scope.modals = {};
    $scope.search = '';
    $scope.distanceUnit = SettingsService.getDefaultDistanceUnit();

    $ionicModal.fromTemplateUrl('templates/exercises_modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modals.exercises_modal= modal;
    });

    $scope.addExercise = function(exercise) {
      
      function alreadyAdded(x) {
        for (ex in $scope.workout) {
          console.log("checking id: " + x.id + " against " + ex.id)
          if (x.id === ex.id) {
            console.log("Exercise Already Added")
            return true;
          }
        }
        console.log("Exercise not added before")
        return false;
      }

      if (!alreadyAdded(exercise)) {
        console.log("Checking to see if in workout")
        console.log(JSON.stringify(exercise))
        exercise.sets = [];
        $scope.workout.push(exercise);
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