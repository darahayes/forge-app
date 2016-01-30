angular.module('starter.services', ['ngStorage'])

.factory('userService', ['$http', '$localStorage', function($http, $localStorage) {
  
  var logged_in = false

  var user = $localStorage.user;
  var token = $localStorage.token;
  if (user && token) { logged_in = true };
  console.log('logged_in', logged_in);
  console.log(JSON.stringify(user));
  console.log('token', JSON.stringify(token));

  $http.defaults.headers.common.Authorization = token;

  function register(signupData, cb) {
    $http.post('http://192.168.192.58:4000/api/register', signupData)
    .then(function success(response, status, headers) {
      if (response.data) {
        console.log(response.data);        
        store_user_data(response.data);
        cb(null, response.data.user);
        $http.defaults.headers.common.Authorization = token;
      }
    }, function error(err) {
      cb(err);
    });
  }
  
  function login(loginData, cb) {
    return $http.post('http://192.168.192.58:4000/api/login', loginData)
    .then(function success(response, status, headers) {
      if (response.data) {
        console.log(response.data);        
        store_user_data(response.data);
        $http.defaults.headers.common.Authorization = token;
        cb(null, response.data.user);
      }
    }, function error(err) {
      console.log("ERROR\n", JSON.stringify(err));
      cb(err);
    });;
  }

  function logout(cb) {
    return $http.post('http://192.168.192.58:4000/api/logout')
    .then(function success(response, status, headers) {
      if (response.data) {
        logged_in = undefined;
        $localStorage.user = undefined;
        user = undefined;
        $localStorage.token = undefined;
        token = undefined;
        $http.defaults.headers.common.Authorization = token;
        cb(null, response.data.user);
      }
    }, function error(err) {
      console.log("ERROR\n", JSON.stringify(err));
      cb(err);
    });;
  }

  function store_user_data(data) {
    logged_in = true;
    user = data.user;
    oken = data.token;
    $localStorage.user = data.user;
    $localStorage.token = data.token;
    console.log('user details saved in localstorage');
  }

  function success(response, status, headers) {

  }

  function get_logged_in() {
    return logged_in;
  }

  function get_user() {
    return user;
  }

  return {
    register: register,
    login: login,
    logout: logout,
    logged_in: get_logged_in,
    user: get_user
  }
}])


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
