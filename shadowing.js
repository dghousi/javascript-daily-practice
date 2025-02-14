/** Shadowing in JavaScript occurs when a variable declared in a local scope
 *  (such as inside a function or block) has the same name as a variable in an outer scope.
 *  This local variable "shadows" or overrides access to the outer variable within its scope.
 **/

let a = 100;

function shadowing()
{
    let a=90;
    console.log(a)
}

shadowing();

console.log(a)