// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000)
});

// #2) Run the above promise and make it console.log "success"
promise.then(console.log)
// or
promise.then(resp => console.log(resp))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.dev/api/people/1/',
  'https://swapi.dev/api/people/2/',
  'https://swapi.dev/api/people/3/',
  'https://swapi.dev/api/people/4/'
]

Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('ughhhh fix it!', err));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?


//ES9 Object spread operator.
const animals = {
  tiger: 23,
  lion: 5,
  monkey:2,
  bird:40
}
const array = [1,2,3,4,5];
function sum(a,b,c,d,e) {
  return a+b+c+d+e;
}
sum(...array);

const { tiger, lion, ...rest} = animals;

function objectSpread(p1,p2,p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);  
}
objectSpread(tiger, lion, rest);

//rest is a new object
/*
rest {
  lion:5,
  monkey:2
}
*/

