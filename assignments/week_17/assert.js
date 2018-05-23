var assertThrows = function(func, x, y) {
  var threw = false;
  // Wrap func with a try/catch
  try {
    func(x, y);
  } catch (error) {
    threw = true;
    console.error(error);
  }
  // If an error is thrown, set threw to true

  // Depending on whether an error was thrown, threw is either true or false
  return threw;
};

var multiply = function(x, y) {
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  if (isNaN(x) || isNaN(y)) {
    // throw an error if either x or y is not a number
    // assertThrows(multiply,x,y);
    throw new Error('There is an error', assert.js);
  }
  else return x * y;
};

var multiplication = assertThrows(multiply,5, 5);
console.log(multiplication);
