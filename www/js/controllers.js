angular.module('starter.controllers', ['starter.services', 'ionic'])

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

// .controller('CalendarCtrl', function($scope, $ionicSideMenuDelegate, $stateParams) {
//   //by default start with the current month of the year
//   $scope.$on('$ionicView.enter', function() {
//        // Code you want executed every time view is opened
//        $ionicSideMenuDelegate.canDragContent(false);
//        console.log('moment', moment());
//   });
//   var cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   var month_labels = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//   var today = new Date();
//   $scope.calendar = Calendar(today.getMonth(), today.getFullYear());

//   //this should return the details for a particular month in a year
//   function Calendar (month, year) {
//     var firstDay = new Date(year, month, 1);
//     var startingDay = firstDay.getDay();
//     return {
//       month: month,
//       month_label: month_labels[month],
//       year, year
//     }
//   }

//   $scope.nextMonth = function() {
//     console.log("next month called")
//     var calendar = $scope.calendar
//     var year = (calendar.month <= 10) ? calendar.year : calendar.year + 1
//     var month = (calendar.year === year) ? calendar.month + 1 : 0
//     $scope.calendar = Calendar(month, year);
//   }

//   $scope.lastMonth = function() {
//     console.log("last month called")
//     var calendar = $scope.calendar
//     var year = (calendar.month >= 1) ? calendar.year : calendar.year - 1
//     var month = (calendar.year === year) ? calendar.month - 1 : 11
//     $scope.calendar = Calendar(month, year);
//   }

// })

.controller('CalendarCtrl', function($scope, $ionicSideMenuDelegate, $stateParams) {
  $scope.$on('$ionicView.enter', function() {
       // Code you want executed every time view is opened
       $ionicSideMenuDelegate.canDragContent(false);
  });
  // $scope.day = moment();
  $scope.selected = _removeTime($scope.selected || moment());
  $scope.month = $scope.selected.clone();

  var start = $scope.selected.clone();
  start.date(1);
  _removeTime(start.day(0));

  _buildMonth($scope, start, $scope.month);

  $scope.select = function(day) {
      $scope.selected = day.date;  
  };

  $scope.next = function() {
    console.log('moment', moment());
      var next = $scope.month.clone();

      _removeTime(next.month(next.month()+1)).date(1)

      $scope.month.month($scope.month.month()+1);
      _buildMonth($scope, next, $scope.month);
  };

  $scope.previous = function() {
      var previous = $scope.month.clone();
      _removeTime(previous.month(previous.month()-1).date(1));
      $scope.month.month($scope.month.month()-1);
      _buildMonth($scope, previous, $scope.month);
  };

  function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }

    function _buildMonth($scope, start, month) {
        $scope.weeks = [];
        var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
        while (!done) {
            $scope.weeks.push({ days: _buildWeek(date.clone(), month) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    function _buildWeek(date, month) {
        var days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            });
            date = date.clone();
            date.add(1, "d");
        }
        return days;
    }

})



.controller('WorkoutCtrl', ['$scope', '$ionicListDelegate', '$ionicSideMenuDelegate', '$ionicModal', '$ionicPopup', 'exercisesService',
  function($scope, $ionicListDelegate, $ionicSideMenuDelegate, $ionicModal, $ionicPopup, exercisesService) {
    $scope.$on('$ionicView.enter', function() {
         // Code you want executed every time view is opened
         $ionicSideMenuDelegate.canDragContent(true);
    });
    $scope.exercises = exercisesService;
    $scope.workout = []
    $scope.modals = {};

    $ionicModal.fromTemplateUrl('templates/exercises_modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modals.exercises_modal= modal;
    });

    $ionicModal.fromTemplateUrl('templates/weight_selection.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modals.weight_modal = modal;
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
        exercise.sets = [];
        $scope.workout.push(exercise);
      }
      $scope.modals.exercises_modal.hide();
      console.log("workout: ", JSON.stringify($scope.workout));
    }

    $scope.show_modal = function(modal) {
      $scope.modals[modal + '_modal'].show();
    }

    $scope.close_modal = function(modal) {
      $scope.modals[modal + '_modal'].hide();
    };

    $scope.addSet = function(exercise) {
      var next = {}
      if (exercise.sets.length > 0) {
        var previous = exercise.sets[exercise.sets.length-1];
        next.reps = (previous.reps) ? previous.reps : 0;
        next.weight = (previous.weight) ? previous.weight : null;
      }
      exercise.sets.push(next);
    }

    $scope.remove_set = function(index, exercise) {
      console.log('remove set called', index, exercise)
      $ionicListDelegate.closeOptionButtons();
      exercise.sets.splice(index, 1)
    }

    $scope.increment = function(set) {
      if (!set.reps) set.reps = 0;
      console.log('increment called')
      set.reps++;
    }

    $scope.decrement = function(set) {
      if (set.reps > 0) set.reps--;
    }

    $scope.show_popup = function(set) {
      $scope.popup = {
        weight: null,
        increment: function() {
          this.weight = this.weight + 2.5;
        },
        decrement: function() {
          if (this.weight >= 0 && this.weight <= 2.5) {
            this.weight = 0;
          }
          else if (this.weight > 2.5) {
            this.weight = this.weight - 2.5;
          }
        }
      }
      console.log("popup function");
      var weight_popup = $ionicPopup.show({
        templateUrl: 'templates/weight_popup.html',
        title: 'Weight',
        scope: $scope,
        buttons: [
          {text: 'Cancel'},
          {
            text: 'Save',
            type: 'button-positive',
            onTap: function(e) {
              return $scope.popup.weight;
            }
          }
        ]
      })

      weight_popup.then(function(res) {
        set.weight = (res) ? res : 0;
      })
    }
}])
