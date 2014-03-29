describe('contactsCtrl >', function () {
  beforeEach(module('angular-testing'));

  var $scope, contactsCtrl, $httpBackend;

  beforeEach(inject(function ($rootScope, $controller, _$httpBackend_) {
    $scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;

    $httpBackend.expectGET('/api/contacts')
      .respond([{name:'FooBar', age:1000}]);

    contactsCtrl = $controller('contactsCtrl', {$scope: $scope});
  }));

  it('creates the controller', function () {
    expect(contactsCtrl).toBeDefined();
  });

  it('has a message', function () {
    expect($scope.message).toEqual('hello world');
  });

  it('no contacts loaded yet', function () {
    expect($scope.contacts).toEqual([]);
  });

  describe('server responds >', function () {
    beforeEach(function () {
      $httpBackend.flush();
    });

    it('contacts loaded', function () {
      expect($scope.contacts).toEqual([{name:'FooBar', age:1000}]);
    });
  });

});