angular.module('exercisesServiceModule', ['ngStorage', 'exercisesDBModule'])

.factory('exercisesService', function($http, $localStorage, connectionService, exercisesDB) {

  var base_url = connectionService.url;
  var localExercises = exercisesDB.db;
  var categories = [
    {name: 'Arms', type: 'category'},
    {name: 'Legs', type: 'category'},
    {name: 'Shoulders', type: 'category'},
    {name: 'Back', type: 'category'},
    {name: 'Abdominals', type: 'category'},
    {name: 'Chest', type: 'category'}
  ]

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

  function getCategory(category) {
    return localExercises.filter(function(x) {
      return x.main_target === category
    })
  }

  return {
    exercises: localExercises,
    categories: categories,
    getCategory: getCategory
  }
})
