app.directive('contact', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/contacts/contact.html',
    replace: true,
    scope: {
      contact: '=data'
    },
    link: function(scope) {
      scope.addYear = function() {
        scope.contact.age +=1;
      }
    }
  }
});