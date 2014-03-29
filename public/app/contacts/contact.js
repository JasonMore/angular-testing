app.directive('contact', function (random, $timeout) {
  return {
    restrict: 'E',
    templateUrl: 'app/contacts/contact.html',
    replace: true,
    scope: {
      contact: '=data'
    },
    link: function(scope) {
      scope.addYear = function() {
        if(scope.contact.$addYearDisabled) return;

        scope.contact.age +=1;
        scope.contact.$addYearDisabled = true;
        $timeout(function(){
          scope.contact.$addYearDisabled = false;
        },2000);
      };
      scope.setRandomAge = function(){
        scope.contact.age = random.age();
      }
    }
  }
});