var indexPage = function () {
  this.bottom = element(by.model('bottom'));

  this.top = element(by.model('top'));

  this.contacts = element.all(by.repeater('contact in contacts'));

  this.firstContact = element(by.repeater('contact in contacts').row(0));

  this.navigate = function () {
    browser.get('http://localhost:3333');
  };
};


describe('open main page >', function () {
  var index = new indexPage();
  index.navigate();

  it('shows 5 contacts', function () {
    expect(index.contacts.count()).toEqual(5);
  });

  describe('contact >', function () {
    it('it goes up', function () {
      var age = index.firstContact.findElement(by.binding('{{contact.age}}'));
      var picture = index.firstContact.findElement(by.tagName('a'));

      var originalAge;
      age.getText().then(function (originalAgeText) {
        originalAge = parseInt(originalAgeText);
        picture.click();

        age.getText().then(function (newAgeText) {
          var newAge = parseInt(newAgeText);
          expect(newAge).toEqual(originalAge + 1);
        });
      });
    });
  });
});