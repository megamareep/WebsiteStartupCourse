// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = person;


// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {
    a,
    b,
    c
};


// Template strings
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
const isValidAge = (age=10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"
let sym = Symbol('This is my first symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI = (username, location) => (username && location) ? "I am not lost" : "I am totally Lost";


const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();
//closures - a function ran. the function executed.
// never execute again but will remember there are references to those variables
//so the child scope will have access to the parent scope.




//currying
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

curriedMultiply(3);//returns a function (b) => a * b;
const multiplyBy5 = curriedMultiply(5);//returns result 12
//Why? now i can just multiply 5 by calling the new function.


//Compose
const compose = (f,g) => (a) => (f(g(a)));
//composing a new function?

const sum = (num) => num + 1;
compose(sum,sum)(5);// sum(sum(5))  5+1 = 6; then sum again 6+1 =7;