angular.module('settingsCtrlModule', ['ionic', 'settingsServiceModule'])

.controller('SettingsCtrl', function($scope, $state, $ionicHistory, settingsService, $ionicPopup) {
  $scope.distanceUnits = settingsService.getDistanceUnits();
  $scope.massUnits = settingsService.getMassUnits();

  $scope.defaultMass = settingsService.getDefaultMassUnit();
  $scope.defaultDistance = settingsService.getDefaultDistanceUnit();

  $scope.setDefaultDistanceUnit = function(unit) {
    settingsService.setDefaultDistanceUnit(unit);
    $scope.defaultDistance = unit;
  }

  $scope.setDefaultMassUnit = function(unit) {
    settingsService.setDefaultMassUnit(unit);
    $scope.defaultMass = unit;
  }

  $scope.clearSettings = function() {
    settingsService.clear();
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
})
