angular.module('calendarCtrlModule', ['ionic', 'calendarServiceModule'])

.controller('CalendarCtrl', function($rootScope, $scope, $ionicHistory, $ionicSideMenuDelegate, calendarService) {
  //by default start with the current month of the year
  $scope.$on('$ionicView.enter', function() {
       // Code you want executed every time view is opened
       $ionicSideMenuDelegate.canDragContent(false);
  });

  var today = calendarService.today;
  $scope.year = calendarService.year;
  $scope.month = calendarService.month;
  $scope.month_label = calendarService.month_labels[$scope.month]
  $scope.weeks = calendarService.build_month($scope.month, $scope.year);

  $scope.nextMonth = function() {
    console.log("next month called")
    if ($scope.month < 11) {
      $scope.month++;
    }
    else {
      $scope.month = 0;
      $scope.year++;
    }
    $scope.month_label = calendarService.month_labels[$scope.month]
    $scope.weeks = calendarService.build_month($scope.month, $scope.year);
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
    $scope.month_label = calendarService.month_labels[$scope.month]
    $scope.weeks = calendarService.build_month($scope.month, $scope.year);
  }

  $scope.range = function(num) {
    return new Array(num)
  }

  $rootScope.$on('WorkoutSaved', function(event, date) {
    var dateArray = date.split('-')
    var day = _.find($scope.weeks, {month: Number(dateArray[0]) - 1, date: Number(dateArray[1]), year: Number(dateArray[2])});
    if (day) {
      day.workout_day = true;
    }
  });

})