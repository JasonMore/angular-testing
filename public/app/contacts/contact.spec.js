describe('contact.js >', function () {
  beforeEach(module('preloadAllHtmlTemplates'));
  beforeEach(module('angular-testing'));

  var parentScope, directiveScope, element, $timeout;

  beforeEach(inject(function ($rootScope, $compile, _$timeout_) {
    parentScope = $rootScope.$new();
    parentScope.testContact = {name: 'Johnny', age: 45};

    element = angular.element('<contact data="testContact"></contact>');
    $compile(element)(parentScope);
    parentScope.$digest();

    directiveScope = element.isolateScope();

    $timeout = _$timeout_;
  }));

  it('creates and element with Johnny', function () {
    expect(element.html()).toContain('Johnny');
  });

  it('has age', function () {
    expect(element.html()).toContain('45');
  });

  describe('adding age >', function () {
    beforeEach(function () {
      directiveScope.addYear();
    });

    it('age goes from 45 to 46', function () {
      expect(parentScope.testContact.age).toEqual(46);
      expect(directiveScope.contact.age).toEqual(46);
    });

    it('when addYear called again, does nothing', function(){
      directiveScope.addYear();
      expect(parentScope.testContact.age).toEqual(46);
    });

    describe('two seconds passed >', function () {
      beforeEach(function () {
        $timeout.flush(2001);
        directiveScope.addYear();
      });

      it('age goes from 46 to 47', function () {
        expect(directiveScope.contact.age).toEqual(47);
      });
    });
  });

  describe('setting random age >', function () {
    beforeEach(inject(function (random) {
      spyOn(random, 'age').andReturn(1000);
      directiveScope.setRandomAge();
    }));

    it('random age is set to 1000', function () {
      expect(directiveScope.contact.age).toEqual(1000);
    });
  });
}); 