// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
//adds padding with ==========


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
Object.entries(obj).map(value => value.join(" ")).join(' ')


const array = [1,2,3,[4,[5]]];
array.flat(2);//how many levels to flatten

const entries = ['bob', 'sally',,,,,,,,'cindy'];
entries.flat(); //clean up ,,,,,,

flatMap()//does a flat then a map.

useremail = '      eddittheeagle@gmail.com';
userEmail2 = '  jj@gmail.com     ';

useremail.trimStart();//removes spaces at the start
userEmail2.trimEnd();//remove spaces at the end

const profiles = [['commanderTom', 30], ['derekZlander', 40], ['Cecily', 32]];
const obj = Object.fromEntries(profiles);//converts array to object.
Object.entries(obj);//reverses it back

//exception handling
try {
  bob + 'hi';
} catch {
  console.log('OPPS');
}
try {
  bob + 'hi';
} catch (error) {
  console.log('OPPS ' + error);
}