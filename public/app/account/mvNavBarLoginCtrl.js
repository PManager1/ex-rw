angular.module('app').controller('mvNavBarLoginCtrl', function ($scope, $http, $location, mvIdentity, mvNotifier) {

  $scope.signin = function (username, password) {
    console.log(' -------  -----  signin clicked ');

    $http.post('/login', {username:username, password:password}).then(function  (response) {
      if(response.data.success){
        mvIdentity.currentUser = response.data.user;
        mvNotifier.notify('You have successfully signed in!'); 
        console.log(' after notify - You have successfully signed in!'); 
      }
      else{
        mvNotifier.notify('Failed to login!');         
      }
    })

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
