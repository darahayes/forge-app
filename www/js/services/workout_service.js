angular.module('workoutServiceModule', ['ngStorage', 'syncServiceModule'])

.factory('workoutService', function($rootScope, $localStorage, syncService) {

  if (!$localStorage.workouts) {
    console.log('Creating workouts object')
    $localStorage.workouts = {}
  }

  function save_workout(workout) {
    console.log('Saving workout for ', workout.date);
    $localStorage.workouts[workout.date] = workout;
    $rootScope.$emit('WorkoutSaved', workout.date);
    syncService.update_sync_token();
    console.log('Workout Saved')
  }

  function get_workout(date) {
    console.log('get_workout called')
    console.log('Retrieving workout for ', date)
    return $localStorage.workouts[date] || {exercises: [], date: date};
  }

  function workout_exists(date) {
    return $localStorage.workouts[date] ? true : false
  }

  return {
    save_workout: save_workout,
    get_workout: get_workout,
    workout_exists: workout_exists
  }

})
