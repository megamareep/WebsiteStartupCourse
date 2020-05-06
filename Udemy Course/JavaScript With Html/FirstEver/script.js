/*Functions in JS*/
/*Function declaration  anonymous function lambda?*/
function sayHello() {
    console.log("Hello");
}

sayHello();

/*Function expression  anonymous function lambda?*/
var sayBye = function() {
    console.log("Bye");
}; /*ends in semi colon*/

sayBye();

function multiply(a,b) {
    return a*b;
}

/* ARRAY */
/* 
pop() pops back. 
shift()  pops front. 
push(); pushes to back.
concat(["bee", "rhino"]); appends to the end
sort();
*/
const list = ["tiger", "cat", "bear", "bird"];
 list.forEach(console.log);
 list.forEach(logList);

function logList(item)
 {
    console.log(item);
 }

 list.forEach(function(item, index){
     console.log(item, index);
 });

/*OBJECTS */
/*function inside object is a method */
const user = {
    name: "John", 
    age: 34,
    hobby: "football",
    isMarried: true,
    shout: function() {
        console.log("AAAAH");
    }
};

console.log('\n');
console.log('\n');
console.log('\n');

for(let i =0; i < list.length; ++i)
{
    list[i] += "!";
}

list.forEach(logList);

//window parent of document
//cache selectors in variables


const name = "sally";
const age = 34;
const pet = "dog";
//Template string
const greeting = `Hello ${name} you're age is ${age-1}. What a cool ${pet} you have.`;

//default parameters
function greet(name='', age=30, pet='dog')
{
    return `Hello ${name} you're age is ${age-1}. What a cool ${pet} you have.`;
}

//symbol type
//create unique not used too much
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');



//arrow functions
function add(a,b) {
    return a+b;
}

//same as above 1 line will return.
const add2 = (a,b) => a+b;

//also same
const add3 = (a,b) => {
    return a+b;
}

const whereAmI = (username, location) => (username && location) ? "I am not lost" : "I am totally Lost";


const array = [1, 2, 5, 3, 10, 16];

const double = [];
array.forEach((num) => {
    double.push(num*2);
})

//last resort as more side affects,
console.log('forEach', double);


//map, filter, reduce
//map...  similar as transform.
// do not need brackets with single parameter;
/*const mapArray = array.map((num) => {
    return num * 2;
})*/
const mapArray = array.map(num => num * 2);

//critical difference. map you want to use.
//because map is restricted as it is expecting a return;
//no side affects.
console.log('map', mapArray);

//filter
const filteredArray = array.filter(num => num <= 5);
console.log('filter', filteredArray);

//reduce  this is strange
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log('reduce', reduceArray);





// Complete the below questions using this array:
const array2 = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const exclamation = [];
array2.forEach((obj) => exclamation.push(obj.username + '!'));

console.log(array2);
console.log(exclamation);

const question = array2.map(obj => obj.username + '?');
console.log(question);

const redTeam = array2.filter(obj => obj.team === 'red');
console.log(redTeam)

const totalScore = array2.reduce((acc, obj) => {
    return acc + obj.score;
}, 0);

console.log(totalScore);