angular.module('Auth', ['ngStorage'])

.factory('authService', ['$http', '$localStorage', function($http, $localStorage) {
	var logged_in = false
	
	var user = $localStorage.user;
	var token = $localStorage.token;
	if (user && token) { 
		logged_in = true
		$http.defaults.headers.common.Authorization = token;
		console.log('logged_in', logged_in);
		console.log(JSON.stringify(user));
		console.log('token', JSON.stringify(token));
	};

	function storeUser(data) {
	  logged_in = true;
	  user = data.user;
	  token = data.token;
	  $localStorage.user = data.user;
	  $localStorage.token = data.token;
	  $http.defaults.headers.common.Authorization = token;
	  console.log('user details saved in localstorage');
	}

	function isLoggedIn() {
		console.log('isLoggedIn called', logged_in)
	  return logged_in;
	}

	function getUser() {
	  return user;
	}

	function clearLogin() {
		$http.defaults.headers.common.Authorization = undefined;
		logged_in = undefined;
		$localStorage.user = undefined;
		user = undefined;
		$localStorage.token = undefined;
		token = undefined;
	}

	function getToken() {
		return token;
	}

	return {
		storeUser: storeUser,
		getUser: getUser,
		clearLogin: clearLogin,
		isLoggedIn: isLoggedIn,
		getToken: getToken
	}
}])

// .service('Auth_Interceptor', function(authService) {
//     var service = this;

//     service.request = function(config) {
//         var user = authService.getUser();
//         var token = authService.getToken();
//         if (user && authService.isLoggedIn() && token) {
//         	console.log('Is Logged in, adding authorization header')
//           config.headers.authorization = 'Fuck';
//         }
//         return config;
//     };

//     service.responseError = function(response) {
//         return response;
//     };
// })

