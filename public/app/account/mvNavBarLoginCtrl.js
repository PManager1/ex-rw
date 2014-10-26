angular.module('app').controller('mvNavBarLoginCtrl', function ($scope, $location) {

  $scope.signin = function (username, password) {
    console.log(' -------  -----  signin clicked ');
    // mvAuth.authenticateUser(username, password).then(function (success) {
    //   if (success) {
    //     Notifier.notify('You have successfully signed in!');
    //   } else {
    //     Notifier.notify('Username/Password combination incorrect');
    //   }
    // })
  };

  // $scope.signout = function () {
  //   mvAuth.logoutUser().then(function () {
  //     $scope.username = "";
  //     $scope.password = "";
  //     Notifier.notify('Logged of');
  //     $location.path('/');
  //   })
  // }

});
