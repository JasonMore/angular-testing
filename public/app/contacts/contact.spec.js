describe('contact.js >', function () {
  beforeEach(module('preloadAllHtmlTemplates'));
  beforeEach(module('angular-testing'));

  var parentScope, directiveScope, element;

  beforeEach(inject(function ($rootScope, $compile) {
    parentScope = $rootScope.$new();
    parentScope.testContact = {name: 'Johnny', age: 45};

    element = angular.element('<contact data="testContact"></contact>');
    $compile(element)(parentScope);
    parentScope.$digest();

    directiveScope = element.scope();
  }));

  it('creates and element with Johnny', function () {
    expect(element.html()).toContain('Johnny');
  });

  it('has age', function () {
    expect(element.html()).toContain('45');
  });
}); 