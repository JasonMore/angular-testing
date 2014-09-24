function indexPage(){
  this.contacts = element.all(by.repeater('contact in contacts'));
  this.firstContact = element(by.repeater('contact in contacts').row(0));
  browser.get('http://localhost:3333');
}

describe('open main page >', function () {
  var index = new indexPage();

  it('shows 5 contacts', function () {
    expect(index.contacts.count()).toEqual(5);
  });

  describe('contact >', function () {
    it('clicking it goes up in age', function () {
      var age = index.firstContact.element(by.binding('{{contact.age}}'));
      var picture = index.firstContact.element(by.css('a[ng-click="addYear()"]'));

      var originalAge;
      age.getText().then(function (ageText) {
        originalAge = parseInt(ageText);
        picture.click();

        age.getText().then(function (newAgeText) {
          var newAge = parseInt(newAgeText);
          expect(newAge).toEqual(originalAge + 1);
        })
      })
    });
  });
});