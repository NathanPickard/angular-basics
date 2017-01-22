angular.module("todoListApp", [])
  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      console.log("Hello there! This is the hellowWorld controller fucntion in the mainCtrl");
    };
  })
  
  .controller('coolCtrl', function($scope){
    $scope.whoAmI = function() {
      console.log("hello there, this is the coolCtrl function!");
    };
  });
