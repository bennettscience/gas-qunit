function calcTests() {
  QUnit.test('Checking the Calcs class parameters', function() {
    ok(Calcs.name, 'The name parameter should be available in the namespace.');
    equal(Calcs.about(), 'A class of calculation methods', 'The about method should return the Calcs class description.');
    ok(Calcs.author(), 'The author method should return the Calcs class author description.');
  });
  
  QUnit.test('Checking the `add` method in Calcs', function() {
    ok(Calcs.add(1, 1), 'The method is available and received two variables.');
    equal(Calcs.add(2, 2), 4, 'When 2 and 2 are entered, the function should return 10.');
    equal(Calcs.add('hello', 2), false, 'When a non-number is added, the function will return false.');
    equal(Calcs.add(2, 'bar'), false, 'When a non-number is passed in the second param, the function will return false.');
	equal(Calcs.add('foo', 'bar'), false, 'When two non-numbers are passed, the function will return false.');
  });
  
  QUnit.test('Checking the `isNumber` method in Calcs', function() {
    equal(Calcs.isNumber(2), true, 'The value entered is a number');
    equal(Calcs.isNumber('foo'), false, 'The value entered is NOT a number.');
    notEqual(Calcs.isNumber('foo'), true, 'The value entered is NOT a number.');
  });

}