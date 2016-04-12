angular.module('exercisesServiceModule', ['ngStorage', 'exercisesDBModule'])

.factory('exercisesService', function($http, $localStorage, connectionService, exercisesDB) {

  var base_url = connectionService.url;
  var localExercises = exercisesDB.db;

  function get_exercises(cb) {
    console.log('get_exercises called');
    get_local_exercises(cb);
  }

  function get_local_exercises(cb) {
    console.log('local exercises')
    cb(null, localExercises);
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
