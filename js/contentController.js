angular.module('myApp', []).controller('contentController', ['$scope', function($scope) {
  $http.get('https://graph.facebook.com/v2.2/136845026417486/feed')
  .success(function(response){
    $scope.feed_data = response.data;
  })
}]);