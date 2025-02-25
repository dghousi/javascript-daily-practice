const str = "Speak softly, but carry a big can of paint.";

// we can find the count of each character in many ways but in here we use the for of syntax;
// firstly a string is an array of characters so we can looop through that.

const counterObj = {};

for (const x of str) {
    if(counterObj[x]) {
        counterObj[x] +=1;
    } else {
        counterObj[x] = 1;
    }
}

console.log(counterObj);