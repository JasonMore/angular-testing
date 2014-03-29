app.filter('age', function () {
  return function (value, bottom, top) {
    return value.filter(function (item) {
      var passed = true;
      if (bottom) {
        passed = item.age >= bottom;
      }
      if (top && passed) {
        passed = item.age <= top;
      }

      return passed;
    });
  }
});