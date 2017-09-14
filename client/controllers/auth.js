var myApp = angular.module('myApp');

myApp.controller('LogoutController',function($location, $scope){
    localStorage.token = 'null' ;
    $location.path('/');
});

myApp.controller('AuthController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
   console.log('AuthController loaded...');
   console.log(localStorage.token);


     var getToken = function () {
         return $scope.localStorage('token');
         console.log($scope.localStorage('token'));
       };


  var isLoggedIn = function() {
     var token = getToken();
     var payload;

     if(token){
       payload = token.split('.')[1];
       payload = $scope.atob(payload);
       payload = JSON.parse(payload);

       return payload.exp > Date.now() / 1000;
     } else {
       return false;
     }
   };

   $scope.auth = function(){
     if ($scope.user.name == 'admin' && $scope.user.password == '123456') {
   		$http.post('/authenticate', $scope.user).then(function(response){
        localStorage.setItem('token', response.data.token);
        console.log(localStorage.token);
        window.location.href='#!/words'
        console.log(response);
   		});
    }
    else {
    window.alert('Please enter admin details');
    }
    }

    $scope.addUsers = function() {
      $http.post('/adduser', $scope.user).then(function(response) {
        console.log(response);
        $scope.getUsers();
      });
    }

    $scope.getUsers = function(){
       $http.get('/getu').then(function(response){
         $scope.us = response.data;
         console.log(response);
         console.log($scope.us);
       });
     }


}]);
