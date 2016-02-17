angular.module('starter.controllers', ['Users', 'Auth', 'UserSettings', 'ionic'])

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

.controller('CalendarCtrl', function($scope, $ionicHistory, $ionicSideMenuDelegate, $stateParams) {
  //by default start with the current month of the year
  $scope.$on('$ionicView.enter', function() {
       // Code you want executed every time view is opened
       $ionicSideMenuDelegate.canDragContent(false);
  });

  var month_labels = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var today = new Date();
  
  $scope.year = today.getFullYear();
  $scope.month = today.getMonth();
  $scope.month_label = month_labels[$scope.month]
  $scope.weeks = build_month(today.getMonth(), today.getFullYear());

  function build_month(month, year) {
    $scope.light = true;
    var days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //find the previous month 0...11
    var previous_month = (month >= 1) ? month-1 : 11;
    var previous_year = (previous_month === 11) ? year - 1 : year;

    //find the next month 0...1
    var next_month = (month < 11) ? month+1 : 0;
    var next_year = (next_month === 0) ? year + 1: year;


    //get the first date of the month 
    var first_day = new Date(year, month, 1);
    
    // finds the weekday the first day falls on
    //0...6 have to account for 0 = sunday
    var offset = first_day.getDay() -1;
    var first_day_index = (offset > -1) ? offset : 6;

    var weeks = []
    
    //calculates what number the very first day
    //in the calendar we get a negative number
    //if last month
    var day =  first_day.getDate() - first_day_index -1;
    do {
      var week = [];
      weeks.push(week);
      for (var i = 0; i <=6; i++) {
        if (day < 0) {
          week[i] = {date: get_days_in_month(previous_month, year) + day +1, month: previous_month, year: previous_year}
        }
        else if (day === 0) {
          day++;
          week[i] = {year: year, date: 1, month: month};
        }
        else if (day <= get_days_in_month(month, year)) {
          week[i] = {year: year, date: day, month: month}
        }
        else {
          week[i] = {date: (day - get_days_in_month(month, year)), month: next_month, year: next_year}
        }
        day++;
      }

    } while (day <= get_days_in_month(month, year))
    return weeks;

    function get_days_in_month(month, year) {
      //leap year check
      if(month === 1 && (year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return 29;
      }
      return days_in_month[month];
    }
  }

  $scope.nextMonth = function() {
    console.log("next month called")
    if ($scope.month < 11) {
      $scope.month++;
    }
    else {
      $scope.month = 0;
      $scope.year++;
    }
    $scope.month_label = month_labels[$scope.month]
    $scope.weeks = build_month($scope.month, $scope.year);
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
    $scope.month_label = month_labels[$scope.month]
    $scope.weeks = build_month($scope.month, $scope.year);
  }

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
