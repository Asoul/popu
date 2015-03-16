var app = angular.module('myApp', []);
app.controller('customersController', ['$scope', '$http', function($scope,$http) {
  $http.get('https://graph.facebook.com/v2.2/136845026417486/feed')
  .success(function(response){
    $scope.feed_data = response.data;
  })
}]);