// Scenario1 :

console.log(x); // undefined
var x = 5; //variable declarations are moved to the top
console.log(x); // 5


// Scenario2 :

//Function declarations are hoisted in a similar manner to variable declarations

foo(); // "Hello, world!"

function foo() {
    console.log("Hello, world!");
}


//the variable bar is hoisted, but its assignment to the function is not, leading to an error

//bar(); // TypeError: bar is not a function

var bar = function () {
    console.log("Hello, world!");
};


// Scenario3 :

//Function that retains access to its lexical scope

function outer() {
    var outerVar = 'I am outside!';

    function inner() {
        console.log(outerVar); // Accessing outerVar from the outer scope
    }

    return inner;
}

const innerFunc = outer();
innerFunc(); // "I am outside!"
