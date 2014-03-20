describe('random >', function () {
  beforeEach(module('angular-testing'));

  var random;
  beforeEach(inject(function (_random_) {
    random = _random_;
  }));

  describe('age >', function () {
    var age;
    beforeEach(function () {
      age = random.age();
    });

    it('is greater than 0', function () {
      expect(age).toBeGreaterThan(0);
    });

    it('is less than 100', function(){
      expect(age).toBeLessThan(100);
    });
  });
});