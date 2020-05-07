//Evaluate these:
//#1
[2] === [2]  //false
{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;
// object1 4
// object2 4
// object3 4
// object4 5


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
    constructor(name, type, colour) {
        this.name = name;
        this.type = type;
        this.colour = colour;
    }
}

class Mamal extends Animal {
    constructor(name, type, colour) {
        super(name, type, colour);
    }

    sound() {
        console.log(`MOOOOO ${this.name} MOOO ${this.type} MOOOO ${this.colour}`);
    }
}

const myCow = new Mamal('Cecily', 'BIG', 'White');