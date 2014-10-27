angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
  });

  $routeProvider
    .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
    
    .when('/admin/users', { templateUrl: '/partials/admin/user-list',
      controller: 'mvUserListCtrl',
      resolve: {
        auth: function  (mvIdentity, $q) {
          if(mvIdentity.currentUser && mvIdentity.currentUser.roles.indexOf('admin') > -1){
            return true; 
          }else{
            return $q.reject('not authorized'); 
          }
        }
    }
});


}); 



angular.module('app').run(function  ($rootScope, $location) {
  console.log(' calling  run ');
  $rootScope.$on('$routeChangeError', function  (evt, current, previous, rejection) {
    if(rejection === 'not authorized'){
      console.log(' rejection happened !!! ');
      $location.path('/'); 
    }
  })
})

