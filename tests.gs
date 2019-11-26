function calcTests() {
  QUnit.test('About Calcs test', function() {
    ok(Calcs.name, 'the function exists in the class object');
    equal(Calcs.about(), 'A class of calculation methods', 'Calling .about() returns the correct statement about the class.');
    notEqual(Calcs.about(), 'Something something', 'The statement returned DOES NOT match the expected result');
    ok(Calcs.author(), 'The author method is publicly available');
  });
  
}