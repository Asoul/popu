var app = angular.module('myApp', []);
app.controller('contentController', ['$scope', '$http', function($scope,$http) {
  $http.get('https://graph.facebook.com/v2.2/136845026417486/feed')
  .success(function(response){
    $scope.feed_data = response.data;
  })
}]);

var module = angular.module('bnx.module.facebook', []);
module.provider ('facebook', function facebookProvider () {
var initialized = false;
var defaultParams = { appId: '291899944267597', status: true, cookie: true, xfbml: true };
var facebookEvents = {
  'auth': [
    'authResponseChange', 
    'statusChange', 
    'login', 
    'logout'
  ]
};