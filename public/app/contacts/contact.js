app.directive('contact', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/contacts/contact.html',
    replace: true,
    scope: {
      contact: '=data'
    }
  }
});