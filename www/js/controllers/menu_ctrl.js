angular.module('menuCtrlModule', ['userServiceModule', 'ionic', 'syncServiceModule'])

.controller('MenuCtrl', function($scope, $ionicPopup, $ionicLoading, $ionicModal, userService, syncService) {

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

  $scope.sync = function() {
    syncService.sync();
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
        syncService.sync();
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
