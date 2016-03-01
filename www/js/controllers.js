angular.module('starter.controllers', ['Users', 'Auth', 'UserSettings', 'ionic', 'Calendar', 'Workouts'])

.controller('AppCtrl', function($scope, $ionicPopup, $ionicLoading, $ionicModal, $ionicSideMenuDelegate, $timeout, userService) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.moment = moment
  $scope.loggedIn = userService.isLoggedIn();
  $scope.user = userService.getUser();

  // Form data for the login modal
  $scope.loginData = {};
  $scope.signupData = {};

  console.log('user in controller', JSON.stringify($scope.user));

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.loginModal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.loginModal.show();
  };

  $scope.confirm_logout = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Log Out',
      template: 'Are you sure you want log out?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        $scope.logout();
      }
    })
  }

  $scope.logout = function() {
    userService.logout(function(err) {
      if (!err) {
        $scope.loggedIn = userService.isLoggedIn();
        $scope.user = userService.getUser();
        console.log("loout complete",$scope.loggedIn, $scope.user);
      }
    });
  }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', JSON.stringify($scope.loginData));
    $ionicLoading.show();
    var u = userService.login($scope.loginData, function(err, user) {
      console.log('callback called', err, user)
      $ionicLoading.hide();
      if (err) {
        var alertPopup = $ionicPopup.alert({
         title: 'Sorry',
         template: 'Username or password incorrect.'
       });
      }
      else {
        $scope.loggedIn = userService.isLoggedIn();
        $scope.user = userService.getUser();
        console.log("login complete",$scope.loggedIn, $scope.user);
        $scope.loginModal.hide();
      }
    });
  };

  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.signupModal = modal;
  });

  $scope.closeSignup = function() {
    $scope.signupModal.hide();
  };

  // Open the signup modal
  $scope.signup = function() {
    $scope.loginModal.hide();
    $scope.signupModal.show();
  };

  $scope.doSignup = function() {
    console.log('Doing Sign up')
    $ionicLoading.show();
    var u = userService.register($scope.signupData, function(err, user) {
      $scope.signupModal.hide();
      $ionicLoading.hide();
      var msg;
      var title
      if (err) {
        title = 'Sorry'
        if (err.why === 'nick-exists') {
          msg = 'That email has already been taken';
        }
        else {
          msg = 'Something went wrong. Please try again.'
        }
      }
      else if (user) {
        $scope.user = userService.getUser();
        $scope.loggedIn = userService.isLoggedIn();
        console.log("register complete",$scope.loggedIn, $scope.user);
        title = 'Success'
        msg = 'Hi ' + user.name + ', thanks for registering.'
      }
      var alertPopup = $ionicPopup.alert({
         title: title,
         template: msg
       });
    })
  };

})

.controller('ExercisesCtrl', ['$scope', '$ionicSideMenuDelegate', 'ExercisesService', '$ionicFilterBar', '$ionicPopover',
  function($scope, $ionicSideMenuDelegate, exercisesService, $ionicFilterBar, $ionicPopover) {
    $scope.$on('$ionicView.enter', function() {
         // Code you want executed every time view is opened
         $ionicSideMenuDelegate.canDragContent(true);
    });
    exercisesService.get_exercises(function(err, exercises) {
      if (err) {'Must handle the error'}
      else if (exercises) {
        console.log('Woo we got the exercises in the Exercises View')
        $scope.exercises = exercises;
      }
    });

    var searchBar;

    $scope.showSearchBar = function() {
      searchBar = $ionicFilterBar.show({
        items: $scope.exercises,
        update: function (filteredItems, filterText) {
          $scope.exercises = filteredItems;
          if (filterText) {
            console.log(filterText);
          }
        }
      });
    };

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
      scope: $scope,
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.popoverOptions = [
      {
        name: 'Add Exercise',
        onClick: function() {
          console.log('Add Exercise Clicked');
          $scope.popover.hide()
          //TODO bring up an add exercise menu
        }
      }
    ]
}])

.controller('CalendarCtrl', function($rootScope, $scope, $ionicHistory, $ionicSideMenuDelegate, $calendar, WorkoutService) {
  //by default start with the current month of the year
  $scope.$on('$ionicView.enter', function() {
       // Code you want executed every time view is opened
       $ionicSideMenuDelegate.canDragContent(false);
  });

  
  var today = $calendar.today;
  $scope.year = $calendar.year;
  $scope.month = $calendar.month;
  $scope.month_label = $calendar.month_labels[$scope.month]
  $scope.weeks = $calendar.build_month($scope.month, $scope.year);

  $scope.nextMonth = function() {
    console.log("next month called")
    if ($scope.month < 11) {
      $scope.month++;
    }
    else {
      $scope.month = 0;
      $scope.year++;
    }
    $scope.month_label = $calendar.month_labels[$scope.month]
    $scope.weeks = $calendar.build_month($scope.month, $scope.year);
    console.log(JSON.stringify($scope.weeks))
  }

  $scope.lastMonth = function() {
    console.log("last month called")
    if ($scope.month > 0) {
      $scope.month--;
    }
    else {
      $scope.year--;
      $scope.month = 11;
    }
    $scope.month_label = $calendar.month_labels[$scope.month]
    $scope.weeks = $calendar.build_month($scope.month, $scope.year);
  }

  $scope.range = function(num) {
    return new Array(num)
  }

  $rootScope.$on('WorkoutSaved', function(event, date) {
    console.log('Received Workout Saved Event in the Calendar Controller');
    console.log('Data Received', date);
  });

})


.controller('SettingsCtrl', ['$scope', '$state', '$ionicHistory', 'SettingsService', '$ionicPopup', function($scope, $state, $ionicHistory, SettingsService, $ionicPopup) {
  $scope.distanceUnits = SettingsService.getDistanceUnits();
  $scope.massUnits = SettingsService.getMassUnits();

  $scope.defaultMass = SettingsService.getDefaultMassUnit();
  $scope.defaultDistance = SettingsService.getDefaultDistanceUnit();

  $scope.setDefaultDistanceUnit = function(unit) {
    SettingsService.setDefaultDistanceUnit(unit);
    $scope.defaultDistance = unit;
  }

  $scope.setDefaultMassUnit = function(unit) {
    SettingsService.setDefaultMassUnit(unit);
    $scope.defaultMass = unit;
  }

  $scope.clearSettings = function() {
    SettingsService.clear();
  }

  $scope.confirmClear = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Are You Sure?',
      template: 'You will be logged out and all preferences will be removed.'
    });

    confirmPopup.then(function(res) {
      if(res) {
        $scope.clearSettings();
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        $state.go('app.calendar');
      }
    });
  }
  
}])
