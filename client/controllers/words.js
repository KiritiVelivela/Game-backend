var myApp = angular.module('myApp');

myApp.controller('WordsController', ['$scope', '$http', '$location', '$routeParams',function($scope, $http, $location, $routeParams) {
   console.log('WordsController loaded...');

//    var refresh = function() {
//    $http.get('/words').then(function (response) {
//      console.log("Got requested data");
//      $scope.words = response;
//      $scope.word + "";
//    });
//    };
//
// refresh();

   $scope.getWords = function(){
   		$http.get('/words').then(function(response){
   			$scope.words = response.data;
        console.log(response);
        console.log($scope.words);
   		});
    }

    $scope.addWords = function() {
      console.log($scope.wor);
      $http.post('/add', $scope.wor).then(function(response) {
        console.log(response);
        $scope.getWords();
      })
    }

}]);
