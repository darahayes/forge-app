angular.module('exercisesServiceModule', ['ngStorage'])

.factory('exercisesService', function($http, $localStorage, connectionService) {

  var base_url = connectionService.url;
  var localExercises = $localStorage.exercises;

  function get_exercises(cb) {
    console.log('get_exercises called');
    if (localExercises) {
      console.log('exercises retrieved locally')
      get_local_exercises(cb);
    }
    else {
      console.log('exercises retrieved from api')
      get_remote_exercises(cb);
    }
  }

  function get_local_exercises(cb) {
    $http.get('json/exercises.json')
    .then(function(response) {
      console.log('good');
      $localStorage.exercises = response.data;
      cb(null, response.data)
    }, function(err) {
      console.log('bad')
      console.log(JSON.stringify(err))
      cb(err)
    });
  }

  function get_remote_exercises(cb) {
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
