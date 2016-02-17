angular.module('Exercises', ['ngStorage'])

.factory('ExercisesService', ['$http', '$localStorage', function($http, $localStorage) {

	var host = '192.168.192.58';
	var localExercises = $localStorage.exercises;

	function get_exercises(cb) {
		console.log('get_exercises called');
		if (localExercises) {
			console.log('exercises retrieved locally')
			cb(null, localExercises)
		}
		else {
			console.log('exercises retrieved from api')
			fetch_exercises(cb);
		}
	}

	function fetch_exercises(cb) {
		$http.get('http://'+host+':4000/api/exercises')
		.then(function(response) {
			console.log('good')
			$localStorage.exercises = response.data;
			cb(null, response.data)
		}, function(err) {
			console.log('bad')
			console.log(JSON.stringify(err))
			cb(err)
		});
	}

	return {get_exercises: get_exercises}
}])