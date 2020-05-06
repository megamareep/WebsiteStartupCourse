//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const add = (a,b) => a+b;
//Correct

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
//13 - Correct

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//31 Correct

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//17 Correct

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//16 Correct

//What are the two elements of a pure function?
//deterministic always produces the same results given the same inputs
//no side affects It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.