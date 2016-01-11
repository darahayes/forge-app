angular.module('starter.services', ['ngResource'])

.factory('User', function($resource) {
	return $resource('http://localhost\:2048/user')
})

.factory('Login', function($resource) {
	return $resource('http://192.168.43.27:2048/login')
})

.factory('exercisesService', function() {
	var exercises = [
    { title: 'Dumbbell Bicep Curl', id: 1 },
    { title: 'Barbell Bicep Curl', id: 2 },
    { title: 'EZ bar Bicep Curl', id: 3 },
    { title: 'Preacher Curl', id: 4 },
    { title: 'Concentration Curl', id: 5 },
    { title: 'Hammer Curl', id: 6 }
  ];
  return exercises;
})