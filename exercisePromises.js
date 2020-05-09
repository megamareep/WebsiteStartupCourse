// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 4000)
});

// #2) Run the above promise and make it console.log "success"
promise.then(console.log)
promise.then(result => console.log(result));
// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
//.resolve will call 'success' after 4secs without needed to call 'then'
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
  .catch(console.log('OOOOOOO SHIT'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => 
  fetch(url).then(people => people.json())
  )).then(array => {
    array.forEach(console.log);
  }).catch(error => console.log('ERRG fix it',error))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?