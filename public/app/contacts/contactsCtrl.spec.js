describe('contactsCtrl >', function () {
  beforeEach(module('angular-testing'));

  var $scope, contactsCtrl;

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    contactsCtrl = $controller('contactsCtrl', {$scope: $scope});
  }));

  it('creates the controller', function () {
    expect(contactsCtrl).toBeDefined();
  });

  it('has a message', function () {
    expect($scope.message).toEqual('hello world');
  });
});