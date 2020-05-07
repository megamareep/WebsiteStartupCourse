//reference type
[] === []; //false //comparing addresses.

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

object1 === object2//comparing address;

//numbers, null. undefined, bool, string, symbol. PODS

//context vs scope
const object4 = {
    a: function() {
        console.log
    }
}

//instantiation.
class Player {
    constructor(name, type) {
        console.log('Player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi i am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('Wizard', this);
    }
    play() {
        console.log(`WEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Tom', 'Fire');
const wizard2 = new Wizard('Cecily', 'Earth');


var c = [1,2,3,4,5,6];
var d = c;//reference as its not POD.
d.push(1234);//applies to both c & d;

var f = [].concat(d); // copy the array.


let obj = { a: 'a', b:'b', c:'c'} //how to copy?
let obj2 = obj;//pass by ref.
let clone = Object.assign({}, obj);//does a shallow copy

let clone2 = {...obj}//does a shallow copy

let obj6 = { a: 'a'
, b:'b'
, c: {deep:'try to copy me'}
} //how to copy?

///deep is still a ref.
let clone3 = {...obj6}//does a shallow clone

let superClone = JSON.parse(JSON.stringify(obj6)) //Does a deep copy by parsing json.

//type coercion notice double == and not triple
1 == '1' //true ???
1 === '1' //false
