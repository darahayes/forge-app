angular.module('exercisesServiceModule', ['ngStorage'])

.factory('exercisesService', function($http, $localStorage, connectionService) {

  var base_url = connectionService.url;
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
    $http.get(base_url + '/api/exercises')
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
})