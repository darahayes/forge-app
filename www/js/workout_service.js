angular.module('Workouts', ['ngStorage'])

.factory('WorkoutService', ['$localStorage', function() {

	function save_workout(workout, date) {
		$localStorage.workouts[date] = workout
	}

	function get_workout(date) {
		return $localStorage.workouts[date];
	}

}])