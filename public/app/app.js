angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/partials/main', controller: 'MainCtrl'})
    // .when('/admin/users', {
    //   templateUrl: '/partials/admin/user-list',
    //   controller: 'mvUserListCtrl',
    //   resolve: routeRoleChecks.admin
    // })
    // .when('/signup', {
    //   templateUrl: '/partials/account/signup',
    //   controller: 'mvSignupCtrl'
    // });
});

angular.module('app').controller('MainCtrl', function  ($scope) {
  $scope.myVar = "Hello Angular"
})

