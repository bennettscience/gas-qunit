function calcTests() {

  QUnit.test('Checking the Calcs class parameters', function() {
    ok(Calcs.name, 'The name parameter should be available in the namespace.');
    equal(Calcs.about(), 'A class of calculation methods', 'The about method should return the Calcs class description.');
    ok(Calcs.author(), 'The author method should return the Calcs class author description.');
  });
  
  QUnit.test('Checking the `add` method in Calcs', function() {
    ok(Calcs.add(1, 1), 'The method is available and received two variables.');
    equal(Calcs.add(2, 2), 4, 'When 2 and 2 are entered, the function should return 10.');
//    equal(Calcs.add('hello', 2), false, 'When a non-number is added, the function will return false.');
    throws(function() { Calcs.add('foo', 2) }, TypeError, 'When a non-number is passed in the first param, the function will return a TypeError.');
    throws(function() { Calcs.add(2, 'bar') }, CustomError, 'When a non-number is passed in the second param, the function will return a CustomError.');
  });

  QUnit.test('Checking the `isNumber` method in Calcs', function() {
    equal(Calcs.isNumber(2), true, 'The value entered is a number');
    equal(Calcs.isNumber('foo'), false, 'The value entered is NOT a number.');
    notEqual(Calcs.isNumber('foo'), true, 'The value entered is NOT a number.');
  });
  
  QUnit.test('Checking errors', function() {
    throws(function() { throw "error" }, "throws with an error message only");
    throws(function() { throw new Error }, Error, 'The error was a generic Error');
    throws(function() { throw new CustomError() }, CustomError, 'Creates a new instance of CustomError');
    throws(function() { throw new CustomError("you can't do that!") }, "you can't do that!", "Throws with a specific message");
    throws(function() { throw new CustomError() }, function(err) { return err.toString() === "There was a problem." }, 'When no message is passed, the default message is returned.');
    throws(function() { throw new CustomError("You can't do that.") }, function(err) { return err.toString() === "You can't do that." }, 'Error.toString() matches the expected string.');
  });
  
}