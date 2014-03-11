app.controller('contactsCtrl', function ($scope, $http) {
  $scope.message = "hello world";
  $scope.bottom = 0;
  $scope.top = 100;
  $scope.contacts = [];
  $http.get('/api/contacts').success(function (data) {
    $scope.contacts = data;
  });
});
