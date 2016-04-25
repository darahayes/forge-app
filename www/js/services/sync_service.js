angular.module('syncServiceModule', ['ngStorage', 'authServiceModule', 'connectionServiceModule'])

.factory('syncService', function($http, $rootScope, $localStorage, authService, connectionService) {

  if (authService.isLoggedIn) {
    console.log('Sync Service is logged in');
  }
  var url = connectionService.url;

  var sync_token = $localStorage.sync_token

  function get_history(cb) {
    console.log('get history')
    if (authService.isLoggedIn) {
      $http.get(url + '/api/calendar')
        .then(function success(response, status, headers) {
          console.log(JSON.stringify(response.data));
          save_sync_token(response.data.sync_token);
          save_workouts(response.data.history);
          cb(null, response.data);
        },
        function error(err) {
          console.log(JSON.stringify(err));
          cb(err)
        })
    }
  }

  function get_sync_token(cb) {
    console.log('get sync_token')
    if (authService.isLoggedIn) {
      $http.get(url + '/api/calendar/sync')
        .then(function success(response, status, headers) {
          console.log(JSON.stringify(response.data.sync_token));
          cb(null, response.data)
        },
        function error(err) {
          console.log(JSON.stringify(err));
          cb(err)
        })
    }
  }

  function post_history() {
    var workouts = get_workouts();
    console.log(workouts)
    if (authService.isLoggedIn) {
      $http.post(url + '/api/calendar', { workouts: workouts })
        .then(function success(response, status, headers) {
          console.log(JSON.stringify(response.data));
          save_sync_token(response.data.sync_token)
          save_workouts(response.data.history)
          cb(response.data)
        },
        function error(err) {
          console.log(JSON.stringify(err));
          cb(err)
        })
    }
  }

  //Take the workout object and return list for API
  function get_workouts() {
    var output = []
    var workouts = $localStorage.workouts
    Object.keys(workouts).forEach((key) => {
      workouts[key].date = key;
      output.push(workouts[key]);
    });
    return output;
  }

  function save_workouts(history) {
    var workouts = {}
    history.workouts.forEach(function(w) {
      w.date = moment(w.date).format('MM-DD-YYYY').toString();
      workouts[w.date] = w
    });
    $localStorage.workouts = _.merge($localStorage.workouts, workouts);
  }

  function save_sync_token(token) {
    $localStorage.sync_token = token;
  }

  function update_sync_token() {
    if (authService.isLoggedIn) {
      $localStorage.sync_token.timestamp = Date.now()
      console.log('Sync Token Updated');
    }
  }

  //get sync token
  //check to see if our thing is out of date
  //either pull down stuff or push up stuff
  function sync() {
    if (authService.isLoggedIn) {
      get_sync_token(function(err, token) {
        if (err) {
          console.log('error while syncing');
        } else {
          var localToken = $localStorage.sync_token
          console.log('LOCAL', JSON.stringify(localToken))
          console.log('TOKEN', JSON.stringify(token))
          console.log('Got Sync Token', JSON.stringify(token))
          if (!localToken || (token.timestamp > localToken.timestamp)) {
            console.log('The server has updates for us')
            get_history(function(err, success) {
              $rootScope.$emit('gotSyncUpdates');
              console.log('got updates from server')

            })
          } else if (token.timestamp < localToken.timestamp) {
            console.log('We need to send updates to the server')
            post_history(function(err, result) {
              if (!err) {
                console.log('Sent updates to server')
              }
            })
          } else {
            console.log('Everything up to date')
          }
        }
      });
    }
  }

  return {
    get_history: get_history,
    get_sync_token: get_sync_token,
    post_history: post_history,
    update_sync_token: update_sync_token,
    sync: sync
  }

})
