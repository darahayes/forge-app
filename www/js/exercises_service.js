angular.module('Exercises', ['ngStorage'])

.factory('ExercisesService', ['$http', '$localStorage', function($http, $localStorage) {

	var host = '192.168.192.58';

	function get_exercises(cb) {
		console.log('get_exercises called');
		$http.get('http://'+host+':4000/api/exercises')
		.then(function(response) {
			console.log('good')
			cb(null, response.data)
		}, function(err) {
			console.log('bad')
			console.log(JSON.stringify(err))
			cb(err)
		})
	}

	return {get_exercises: get_exercises}
}])