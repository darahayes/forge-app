angular.module('Users', [])

.factory('userService', ['$http', 'authService', function($http, authService) {
  
  var host = '192.168.43.27';

  function register(signupData, cb) {
    $http.post('http://'+host+':4000/api/register', signupData)
    .then(function success(response, status, headers) {
      if (response.data.user) {
        authService.storeUser(response.data)
        cb(null, response.data.user);
      }
      else { console.log('got a response but no user', response.data); }
    }, function error(err) {
      cb(err);
    });
  }
  
  function login(loginData, cb) {
    return $http.post('http://'+host+':4000/api/login', loginData)
    .then(function success(response, status, headers) {
      if (response.data.user) {
        authService.storeUser(response.data)
        cb(null, response.data.user);
      }
      else { console.log('got a response but no user', response.data); }
    }, function error(err) {
      console.log("ERROR\n", JSON.stringify(err));
      cb(err);
    });;
  }

  function logout(cb) {
    return $http.post('http://'+host+':4000/api/logout')
    .then(function success(response, status, headers) {
      if (response.data) {
        authService.clearLogin();
        cb(null, response.data.user);
      }
    }, function error(err) {
      console.log("ERROR\n", JSON.stringify(err));
      cb(err);
    });;
  }

  function getUser() {
    return authService.getUser();
  }

  function isLoggedIn() {
    console.log('isLoggedIn called from user_service')
    return authService.isLoggedIn();
  }

  return {
    register: register,
    login: login,
    logout: logout,
    getUser: getUser,
    isLoggedIn: isLoggedIn
  }
}])

.factory('exercisesService', function() {
	var exercises = [
    { name: 'Dumbbell Bicep Curl', id: 1 },
    { name: 'Barbell Bicep Curl', id: 2 },
    { name: 'EZ bar Bicep Curl', id: 3 },
    { name: 'Preacher Curl', id: 4 },
    { name: 'Concentration Curl', id: 5 },
    { name: 'Hammer Curl', id: 6 }
  ];
  return exercises;
})
