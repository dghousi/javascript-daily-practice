function x() {
  var a = 7;

  function y() {
    console.log(a);
  }

  a = 100;
  return y;
}


var z = x();

console.log(z)

z();

function setTout() {
  var i = 1;

  setTimeout(function() {
    console.log(i)
  }, 500);

  console.log("Hello, Javacsript! setTout")
}

setTout();

// problem with var inside loop which is in global scope
function printToFiveWithVar()
{
  // in here w is supposed to have the copy of this w which is inside closure refers to the same memory location,
  // so some how we have to give the copy of w every time 
  // a closure is a function along with its lexical environment, it can access to its variables of its lexal scope 
  // so what will happen when the setTimeout takes the closure function and store's it somewhere and attach's it a timer,
  // so that closure function remebers its refrence to i so that the copy of w's all refrence to same memory space and it print's w five time
  // in below code the refrence for the w is 6 which it prints 5 times 6 
  // to solve this problem we can use the let which is block scope or we can use another callback and call it to have each copy of w's;
  for (var w = 1; w <= 5; w++) {
    setTimeout(function() {
      console.log(w)
    }, w*1000);
  }

  
  console.log("Hello, Javacsript! printToFiveWithVar")
}

printToFiveWithVar();

// solution 1:
// we can use let instead of var to fix the above problem;
// let has a block scope, so when we say that let has a block scope that in every and each iteration the below i is a new variable together;
// its a new copy of i together and when ever the setTimeOut is run, the callback function have the new copy of i on it 
// so whenever the callback is called it refering to different memory location which is there inditual seperate copy of i which were in the scope
// 
function printToFiveWithLet() {
  for (let i = 1; i <=5; i++) {
    setTimeout(function() {
      console.log(i)
    }, i*1000);
  }

  console.log("Hello, Javacsript! printToFiveWithLet")
}

printToFiveWithLet();

// solution 2:
// with let inside for loop we can solve this problem
function printToFiveWithLet2() {
  for (var i = 1; i <=5; i++) {
    let x = i;
    setTimeout(function() {
      console.log(x)
    }, x*1000);
  }

  console.log("Hello, Javacsript! printToFiveWithLet2")
}

printToFiveWithLet2();

// solution 3:
// with closure we can solve problem as will;
function printToFiveWithClosure() {
  for (var i = 1; i <=5; i++) {
    function printTheValue(i) {
      setTimeout(function() {
        console.log(i)
      }, i*1000);
    }

    printTheValue(i)
  }

  console.log("Hello, Javacsript! printToFiveWithClosure")
}

printToFiveWithClosure();

// 
function closureTest()
{
  for(var i=1; i<=5; i++) {
	  setTimeout(() => {
  	  console.log(i);
          i = i + 1;
       },  i*1000);
}
  console.log("outside: ", i)
  if( i < 10 ) i = 10;
}

closureTest();