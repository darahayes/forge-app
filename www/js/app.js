var appModules = [
  'ionic',
  'jett.ionic.filter.bar',
  'menuCtrlModule',
  'calendarCtrlModule',
  'exercisesCtrlModule',
  'settingsCtrlModule',
  'workoutCtrlModule',
  'authServiceModule',
  'calendarServiceModule',
  'connectionServiceModule',
  'exercisesServiceModule',
  'settingsServiceModule',
  'userServiceModule',
  'workoutServiceModule',
  'PRServiceModule',
  'syncServiceModule',
  'ngStorage'
]

angular.module('starter', appModules)

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

.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
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
    abstract: true,
    url: '/exercises',
    views: {
      'menuContent': {
        templateUrl: 'templates/exercises.html',
        controller: 'ExercisesCtrl'
      }
    }
  })

  .state('app.exercises.categories', {
    url: '/categories',
    views: {
      'listView': {
        templateUrl: 'templates/exercise_list.html',
        controller: 'ExercisesCtrl'
      }
    }
  })

  .state('app.exercises.category', {
    url: '/:category',
    views: {
      'listView': {
        templateUrl: 'templates/exercise_list.html',
        controller: 'ExercisesListCtrl'
      }
    },
    resolve: {
      category: function($stateParams) {
        return $stateParams.category;
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
        controller: 'WorkoutOverviewCtrl'
      },
      'exercisesModalView' : {
        templateUrl: 'templates/exercise_list.html',
        controller: 'ExerciseCtrl'
      }
    },
    resolve: {
      workout: function($stateParams, workoutService) {
        return workoutService.get_workout(moment($stateParams.date, 'MM-DD-YYYY').format('MM-DD-YYYY'));
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
        controller: 'ExerciseLogCtrl'
      }
    },
    resolve: {
      workout: function($stateParams, workoutService) {
        console.log($stateParams.date)
        return workoutService.get_workout(moment($stateParams.date, 'MM-DD-YYYY').format('MM-DD-YYYY'));
      },
      exercise_index: function($stateParams) {
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
})

.constant('$ionicLoadingConfig', {
  template: '<ion-spinner icon="android"></ion-spinner>'
});
