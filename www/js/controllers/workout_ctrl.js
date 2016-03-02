angular.module('workoutCtrlModule', ['ionic', 'settingsServiceModule', 'workoutServiceModule', 'exercisesServiceModule'])

.controller('WorkoutCtrl', function($scope, workoutService, settingsService, $ionicListDelegate, $ionicSideMenuDelegate, $ionicFilterBar, exercisesService) {
  $scope.$on('$ionicView.enter', function() {
    $ionicSideMenuDelegate.canDragContent(true);
  });

  $scope.model = {
    addExercise: addExercise,
    removeExercise: removeExercise,
    addSet: addSet,
    remove_set: remove_set,
    increment: increment,
    decrement: decrement,
    save_workout: save_workout,
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
    save_workout(workout);
    console.log("workout: ", JSON.stringify(workout));
  }

  function removeExercise(workout, index) {
    workout.exercises.splice(index, 1);
    save_workout(workout);
    console.log('remoive exercise called')
  }

  function addSet(exercise) {
    var next = {unit: settingsService.getDefaultMassUnit(), reps: 0}
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
    workoutService.save_workout(workout);
  }

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
  }

  $scope.search = '';
  var searchBar;

  exercisesService.get_exercises(function(err, exercises) {
    if (err) {'Must handle the error'}
    else if (exercises) {
      console.log('Woo we got the exercises')
      $scope.model.exercises = exercises;
    }
  });
})

.controller('WorkoutOverviewCtrl', function($scope, $state, $ionicHistory, $ionicSideMenuDelegate, $ionicModal, workout, date) {
  
  $scope.$on('$ionicView.enter', function() {
    $ionicSideMenuDelegate.canDragContent(true);
  });   
  
  $scope.workout = workout;
  $scope.date = date;
  $scope.model = $scope.model;
  var selected = [];

  console.log('Child Workout controller initiated');
  console.log('\n\nCHILD Workout', JSON.stringify($scope.model.workout));
  console.log('FROM CHILD DATE', date);
  console.log('FROM CHILD WORKOUT', JSON.stringify(workout));

  $ionicModal.fromTemplateUrl('templates/exercises_modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.model.exercises_modal = modal;
  });

  $scope.show_exercises = function() {
    $scope.model.exercises_modal.show();
  }

  $scope.hide_exercises = function() {
    $scope.model.exercises_modal.hide();
  }

  $scope.addExercise = function(exercise) {
    $ionicHistory.nextViewOptions({
        disableAnimate: true
    });
    $scope.model.addExercise($scope.workout, exercise);
    $state.go('app.workout.exercise', {date: $scope.date, exercise_index: $scope.workout.exercises.length-1})
    $scope.model.exercises_modal.hide();
  }

  $scope.action = function(workout) {
    if (!$scope.itemsSelected()) {
      $scope.model.save_workout(workout)
    }
    else {
      $scope.deleteSelected()
    }
  }

  $scope.itemsSelected = function() {
    return selected.length > 0;
  }

  $scope.isSelected = function(index) {
    return selected.includes(index);
  }

  $scope.select = function(index) {
    if (!$scope.isSelected(index)) {
      selected.push(index);
    }
  }

  $scope.exerciseTapped = function(index) {
    if (selected.length === 0) {
      $state.go('app.workout.exercise', {date: $scope.date, exercise_index: index})
    }
    else if ($scope.isSelected(index)) {
      $scope.unselect(index);
    }
    else {
      $scope.select(index);
    }
  }

  $scope.deleteSelected = function() {
    $scope.workout.exercises = $scope.workout.exercises.filter(function(ex, index) { return !$scope.isSelected(index)});
    selected = [];
    $scope.model.save_workout($scope.workout)
  }

  $scope.unselect = function(index) {
    selected.splice(selected.indexOf(index), 1)
  }
})

.controller('ExerciseLogCtrl', function($scope, $state, $ionicPopup, workout, exercise_index) {
  $scope.exercise = workout.exercises[exercise_index];
  console.log('EXERCISE LOG CONTROL')
  console.log('Workout from exercise_log_ctrl', JSON.stringify(workout))
  console.log('exercise_index', exercise_index)
  console.log('Workout', JSON.stringify($scope.model.workout, null, 2))

  console.log('EXERCISE SETS LENGTH', $scope.exercise.sets.length)

  $scope.goBack = function() {
    if ($scope.exercise.sets.length === 0) {
      $scope.model.removeExercise(workout, exercise_index)
    }
    $state.go('app.workout.overview', {date: workout.date});
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
})