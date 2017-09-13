var myApp = angular.module('myApp',['ngRoute'])
                  .run(['$rootScope', '$location', run]);

myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'AuthController',
    templateUrl: 'views/users.html'
  })
  .when('/words', {
    controller: 'WordsController',
    templateUrl: 'views/words.html'
})
  .when('/addus', {
    controller: 'AuthController',
    templateUrl: 'views/adduser.html'
  })
  .when('/logout', {
        templateUrl : 'views/users.html',
        controller : 'LogoutController'
    })
  .otherwise({
    redirectTo: '/'
  });
});

function run($rootScope, $location, authentication) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (localStorage.token == 'null') {
      $location.path('/');
    }
  });
}
