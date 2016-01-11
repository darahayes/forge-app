angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $ionicSideMenuDelegate, $timeout, User, Login) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.signupData = {user: {}};
  $scope.user = {};

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

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', JSON.stringify($scope.loginData));

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.signupModal= modal;
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
    console.log('Doing Sign up', JSON.stringify($scope.signupData));
    $scope.signupData.cmd = 'save'
    $scope.user = new User($scope.signupData)
    $scope.user.$save(function(u) {
      // console.log('function called');
      $scope.user = u; 
    });
    console.log('scope.user', JSON.stringify($scope.user))
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      console.log('scope.user', JSON.stringify($scope.user))
      $scope.closeSignup();
    }, 1000);
  };

})

.controller('ExercisesCtrl', ['$scope', '$ionicSideMenuDelegate', 'exercisesService',
  function($scope, $ionicSideMenuDelegate, exercisesService) {
    $scope.$on('$ionicView.enter', function() {
         // Code you want executed every time view is opened
         $ionicSideMenuDelegate.canDragContent(true);
    });
    $scope.exercises = exercisesService;
}])

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('CalendarCtrl', function($scope, $ionicSideMenuDelegate, $stateParams) {
  //by default start with the current month of the year
  $scope.$on('$ionicView.enter', function() {
       // Code you want executed every time view is opened
       $ionicSideMenuDelegate.canDragContent(false);
  });
  var cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var month_labels = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var today = new Date();
  $scope.calendar = Calendar(today.getMonth(), today.getFullYear());

  //this should return the details for a particular month in a year
  function Calendar (month, year) {
    var firstDay = new Date(year, month, 1);
    var startingDay = firstDay.getDay();
    return {
      month: month,
      month_label: month_labels[month],
      year, year
    }
  }

  $scope.nextMonth = function() {
    console.log("next month called")
    var calendar = $scope.calendar
    var year = (calendar.month <= 10) ? calendar.year : calendar.year + 1
    var month = (calendar.year === year) ? calendar.month + 1 : 0
    $scope.calendar = Calendar(month, year);
  }

  $scope.lastMonth = function() {
    console.log("last month called")
    var calendar = $scope.calendar
    var year = (calendar.month >= 1) ? calendar.year : calendar.year - 1
    var month = (calendar.year === year) ? calendar.month - 1 : 11
    $scope.calendar = Calendar(month, year);
  }

})

.controller('WorkoutCtrl', ['$scope', '$ionicSideMenuDelegate', '$ionicModal', 'exercisesService',
  function($scope, $ionicSideMenuDelegate, $ionicModal, exercisesService) {
    $scope.$on('$ionicView.enter', function() {
         // Code you want executed every time view is opened
         $ionicSideMenuDelegate.canDragContent(true);
    });
    $scope.exercises = exercisesService;
    $scope.workout = []

    $ionicModal.fromTemplateUrl('templates/exercises_modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.exercises_modal= modal;
    });

    $scope.addExercise = function(exercise) {
      
      function alreadyAdded(x) {
        for (ex in $scope.workout) {
          console.log("checking id: " + x.id + " against " + ex.id)
          if (x.id === ex.id) {
            console.log("Exercise Already Added")
            return true;
          }
        }
        console.log("Exercise not added before")
        return false;
      }

      if (!alreadyAdded(exercise)) {
        console.log("Checking to see if in workout")
        console.log(JSON.stringify(exercise))
        $scope.workout.push(exercise);
      }
      $scope.exercises_modal.hide();
      console.log("workout: ", JSON.stringify($scope.workout));
    }

    $scope.listExercises = function() {
      $scope.exercises_modal.show();
    }

    $scope.closeModal = function() {
      $scope.exercises_modal.hide();
    };

}])
