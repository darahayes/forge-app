angular.module('userServiceModule', ['authServiceModule', 'connectionServiceModule'])

.factory('userService', function($http, authService, connectionService) {
  
  var base_url = connectionService.url;

  function register(signupData, cb) {
    $http.post(base_url + '/api/register', signupData)
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
    return $http.post(base_url + '/api/login', loginData)
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
    return $http.post(base_url + '/api/logout')
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
})