describe('contact.js >', function () {
  beforeEach(module('preloadAllHtmlTemplates'));
  beforeEach(module('angular-testing'));

  var scope, element;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.testContact = {name: 'Johnny', age: 45};
    element = angular.element('<contact data="testContact"></contact>');
    $compile(element)(scope);
    scope.$digest();
  }));

  it('creates and element with Johnny', function () {
    expect(element.html()).toContain('Johnny');
  });

  it('has age', function () {
    expect(element.html()).toContain('45');
  });
}); 