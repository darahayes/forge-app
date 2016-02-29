angular.module('controllers.workout', ['Users', 'Auth', 'UserSettings', 'ionic', 'Workouts', 'Exercises'])

.controller('WorkoutCtrl', ['$scope', 'WorkoutService', 'SettingsService', '$ionicListDelegate', '$ionicSideMenuDelegate', '$ionicModal', '$ionicPopup', '$ionicFilterBar', 'ExercisesService',
  function($scope, WorkoutService, SettingsService, $ionicListDelegate, $ionicSideMenuDelegate, $ionicModal, $ionicPopup, $ionicFilterBar, ExercisesService) {
    $scope.$on('$ionicView.enter', function() {
         // Code you want executed every time view is opened
         $ionicSideMenuDelegate.canDragContent(true);
    });

    $scope.model = {
      addExercise: addExercise,
      addSet: addSet,
      remove_set: remove_set,
      increment: increment,
      decrement: decrement,
      save_workout: save_workout,
      show_exercises: show_exercises,
      hide_exercises: hide_exercises,
      showSearchBar: showSearchBar
    }

    console.log('Parent Workout controller initiated');

    function addExercise(workout, exercise) {
      //if not already added
      if (!_.some(workout.exercises, {name: exercise.name})) {
        console.log(JSON.stringify(exercise))
        exercise.sets = [];
        workout.exercises.push(exercise);
        if (searchBar) { 
          console.log('Added exercise while search bar was open')
          searchBar(); 
        }
      }
      $scope.model.exercises_modal.hide();
      save_workout(workout);
      console.log("workout: ", JSON.stringify(workout));
    }

    function addSet(exercise) {
      var next = {unit: SettingsService.getDefaultMassUnit()}
      if (exercise.sets.length > 0) {
        var previous = exercise.sets[exercise.sets.length-1];
        next.reps = (previous.reps) ? previous.reps : 0;
        next.weight = (previous.weight) ? previous.weight : null;
      }
      exercise.sets.push(next);
    }

    function remove_set(index, exercise) {
      console.log('remove set called', index, exercise)
      $ionicListDelegate.closeOptionButtons();
      exercise.sets.splice(index, 1)
    }

    function increment(set) {
      if (!set.reps) set.reps = 0;
      console.log('increment called')
      set.reps++;
    }

    function decrement(set) {
      if (set.reps > 0) set.reps--;
    }

    function save_workout(workout) {
      WorkoutService.save_workout(workout);
    }

    function show_exercises() {
      $scope.model.exercises_modal.show();
    }

    function hide_exercises() {
      $scope.model.exercises_modal.hide();
    }

    ExercisesService.get_exercises(function(err, exercises) {
      if (err) {'Must handle the error'}
      else if (exercises) {
        console.log('Woo we got the exercises')
        $scope.model.exercises = exercises;
      }
    });

    $ionicModal.fromTemplateUrl('templates/exercises_modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.model.exercises_modal= modal;
    });

    $scope.search = '';
    var searchBar;

    function showSearchBar() {
      searchBar = $ionicFilterBar.show({
        items: $scope.model.exercises,
        update: function (filteredItems, filterText) {
          $scope.model.exercises = filteredItems;
          if (filterText) {
            console.log(filterText);
          }
        }
      });
    };
}])

.controller('workout_overview_ctrl', ['$scope', 'WorkoutService', 'SettingsService', '$ionicListDelegate', '$ionicSideMenuDelegate', '$ionicModal', '$ionicPopup', '$ionicFilterBar', 'ExercisesService', 'workout', 'date',
  function($scope, WorkoutService, SettingsService, $ionicListDelegate, $ionicSideMenuDelegate, $ionicModal, $ionicPopup, $ionicFilterBar, ExercisesService, workout, date) {
    $scope.$on('$ionicView.enter', function() {
         // Code you want executed every time view is opened
         $ionicSideMenuDelegate.canDragContent(true);
    });   
    $scope.workout = workout;
    $scope.date = date;
    $scope.model = $scope.model;

    console.log('Child Workout controller initiated');
    console.log('\n\nCHILD Workout', JSON.stringify($scope.model.workout));
    console.log('FROM CHILD DATE', date);
    console.log('FROM CHILD WORKOUT', JSON.stringify(workout));

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

.controller('exercise_log_ctrl', ['$scope', 'WorkoutService', '$ionicHistory', 'SettingsService', '$ionicModal', '$ionicPopup', 'ExercisesService', 'workout', 'exercise_index',
  function($scope, WorkoutService, $ionicHistory, SettingsService, $ionicModal, $ionicPopup, ExercisesService, workout, exercise_index) {
    $scope.exercise = workout.exercises[exercise_index];
    console.log('EXERCISE LOG CONTROL')
    console.log('Workout from exercise_log_ctrl', JSON.stringify(workout))
    console.log('exercise_index', exercise_index)
    console.log('Workout', JSON.stringify($scope.model.workout, null, 2))

    $scope.goBack = function() {
      console.log(JSON.stringify($ionicHistory.viewHistory(), null, 2))
      $ionicHistory.goBack();
    }
  }
])