// Function statement and function declaration
function a() {
  console.log("a is called");
}

// Function expression
var b = function () {
  console.log("b is called");
};

// Anonymous function
// function ()
// {

// }

// Named function expression
var xy = function ab() {
  console.log("Named function expressio is called");
};


// Difference between Parameter and Arguments
// the value passed inside function is called argument.
// the label or identifier which gets those values are known as parameters.

function describParamArgument(param1, param2)
{
  console.log(param1, param2)
}

// arguments 
describParamArgument(20, 100);

// first class function
// the ability to use functions as values is known as first class function
// or the ability to pass function as an argument is called first class function
// functions are first class citizens

/**
 * In JavaScript, a first-class function is a function that can be treated like any other variable. This means you can:
    1.Assign it to a variable: Functions can be stored in variables.
    2.Pass it as an argument: You can pass a function to another function as an argument.
    3.Return it from another function: Functions can be returned from other functions.
    4.Store it in data structures: Functions can be stored in arrays, objects, etc.
 */

// Assigning a function to a variable
const greet = function(name) {
  return `Hello, ${name}!`;
};

// Passing a function as an argument
function processUserInput(callback) {
  const name = 'Alice';
  console.log(callback(name));
}

// Returning a function from another function
function multiplier(factor) {
  return function(x) {
      return x * factor;
  };
}

// Storing functions in an array
const functionsArray = [
  function(x) { return x + 1; },
  function(x) { return x * 2; }
];

// Using the functions
console.log(greet('Bob')); // Hello, Bob!
processUserInput(greet);   // Hello, Alice!
const double = multiplier(2);
console.log(double(5));     // 10
console.log(functionsArray[0](5)); // 6
console.log(functionsArray[1](5)); // 10