/**
* Currying in JavaScript
Currying is a functional programming technique in JavaScript where a function is transformed into
a sequence of functions, each taking a single argument. Instead of taking all arguments at once,
a curried function takes them one at a time.
**/

// Regular function
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5

// Curried version of add function
function curriedAdd(a) {
    return function (b) {
        return a + b;
    };
}

const addTwo = curriedAdd(2); // Partially applied function
console.log(addTwo(3)); // 5
console.log(curriedAdd(2)(3)); // 5

/** How Currying Works
1. Instead of add(2,3), you call curriedAdd(2)(3).
2. The first function remembers a, and returns another function that takes b.
3. The second function adds a and b and returns the result.
*/
