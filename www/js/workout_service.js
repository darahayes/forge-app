angular.module('Workouts', ['ngStorage'])

.factory('WorkoutService', ['$localStorage', function($localStorage) {

	if (!$localStorage.workouts) {
		console.log('Creating workouts object')
		$localStorage.workouts = {}
	}

	function save_workout(workout) {
		$localStorage.workouts[workout.date] = workout
		console.log('Workout Saved')
	}

	function get_workout(date) {
		console.log('get_workout called')
		return $localStorage.workouts[date] || {exercises: [], date: date};
	}

	return {
		save_workout: save_workout,
		get_workout: get_workout
	}

}])