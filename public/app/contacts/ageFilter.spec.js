describe('age filter >', function () {
  beforeEach(module('angular-testing'));

  describe('init >', function () {
    var ageFilter, values;

    beforeEach(inject(function (_ageFilter_) {
      ageFilter = _ageFilter_;

      values = [
        {name: 'a', age: 5},
        {name: 'b', age: 10},
        {name: 'c', age: 15},
        {name: 'd', age: 20}
      ]
    }));

    it('exists', function () {
      expect(ageFilter).toBeDefined();
    });

    describe('bottom filter >', function () {
      it('when 1 returns all values', function () {
        expect(ageFilter(values, 1).length).toEqual(4);
      });

      describe('when 12 >', function () {
        var filtered;

        beforeEach(function () {
          filtered = ageFilter(values, 12);
        });

        it('first age is 15', function () {
          expect(filtered[0]).toMatch({name: 'c', age: 15});
        });

        it('second age is 20', function () {
          expect(filtered[0]).toMatch({name: 'd', age: 15});
        });
      });
    });

    describe('top filter >', function () {
      it('when 99 returns all values', function () {
        expect(ageFilter(values, null, 99).length).toEqual(4);
      });

      describe('when 12 >', function () {
        var filtered;

        beforeEach(function () {
          filtered = ageFilter(values, null, 12);
        });

        it('first age is 5', function () {
          expect(filtered[0]).toMatch({name: 'a', age: 5});
        });

        it('second age is 10', function () {
          expect(filtered[0]).toMatch({name: 'b', age: 10});
        });
      });
    });

    describe('both >', function () {
      it('when 7 to 12 99 returns b', function () {
        expect(ageFilter(values, 7, 12)[0]).toMatch({name: 'b', age: 15});
      });
    });
  });
});