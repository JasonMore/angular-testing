app.controller('contactsCtrl', function ($scope, $http) {
  $scope.message = "hello world";

  $http.get('/api/contacts').success(function(data){
    $scope.contacts = data;
  });
});
