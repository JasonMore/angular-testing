app.controller('contactsCtrl', function ($scope) {
  $scope.message = "hello world";

  $http.get('/api/contacts').success(function(data){
    $scope.contacts = data;
  });
});
