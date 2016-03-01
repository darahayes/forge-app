// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'jett.ionic.filter.bar', 'starter.controllers', 'controllers.workout', 'Workouts', 'Exercises', 'connection', 'Calendar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.calendar', {
      url: '/calendar',
      views: {
        'menuContent': {
          templateUrl: 'templates/calendar.html',
          controller: 'CalendarCtrl'
        }
      }
    })
    .state('app.exercises', {
      url: '/exercises',
      views: {
        'menuContent': {
          templateUrl: 'templates/exercises.html',
          controller: 'ExercisesCtrl'
        }
      }
    })

  .state('app.workout', {
    abstract: true,
    url: '/workout/:date',
    views : {
      'menuContent': {
        templateUrl: 'templates/workout.html',
        controller: 'WorkoutCtrl'
      }
    }
  })

  .state('app.workout.overview', {
    url: '/overview',
    views : {
      'workoutView' : {
        templateUrl: 'templates/workout_overview.html',
        controller: 'workout_overview_ctrl'
      }
    },
    resolve: {
      workout: function($stateParams, WorkoutService) {
        console.log($stateParams.date)
        console.log(JSON.stringify(WorkoutService.get_workout(moment($stateParams.date, 'MM-DD-YYYY').format('MM-DD-YYYY'))))
        return WorkoutService.get_workout(moment($stateParams.date, 'MM-DD-YYYY').format('MM-DD-YYYY'));
      },
      date: function($stateParams) {
        return $stateParams.date;
      }
    }
  })

  .state('app.workout.exercise', {
    //:exercise is an index for workout.exercises
    url: '/exercise/:exercise_index',
    views: {
      workoutView: {
        templateUrl: 'templates/exercise_log.html',
        controller: 'exercise_log_ctrl'
      }
    },
    resolve: {
      workout: function($stateParams, WorkoutService) {
        console.log($stateParams.date)
        console.log(JSON.stringify(WorkoutService.get_workout(moment($stateParams.date, 'MM-DD-YYYY').format('MM-DD-YYYY'))))
        return WorkoutService.get_workout(moment($stateParams.date, 'MM-DD-YYYY').format('MM-DD-YYYY'));
      },
      exercise_index: function($stateParams) {
        console.log(JSON.stringify($stateParams))
        console.log('\n\nEXERCISE INDEX RESOLVE FUNCTION CALLED\n\n\n\n\n\n\n\n\n\n')
        return $stateParams.exercise_index;
      }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views : {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/calendar');
  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.useXDomain = true;
  // $httpProvider.interceptors.push('Auth_Interceptor');
}])

.constant('$ionicLoadingConfig', {
  template: '<ion-spinner icon="android"></ion-spinner>'
});