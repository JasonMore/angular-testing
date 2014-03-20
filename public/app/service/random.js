app.factory('random', function() {
  return {
    age: function() {
      return parseInt(Math.random() * 100);
    }
  };
});