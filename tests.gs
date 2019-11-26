function calcTests() {
  QUnit.test('Checking the Calcs class parameters', function() {
    ok(Calcs.name, 'The name parameter should be available in the namespace.');
    equal(Calcs.about(), 'A class of calculation methods', 'The about method should return the Calcs class description.');
    ok(Calcs.author(), 'The author method should return the Calcs class author description.');
  });
}