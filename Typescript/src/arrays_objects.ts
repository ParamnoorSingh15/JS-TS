let stringArr = ['one', 'hey', 'Dave'];

let guitars = ['Strat', 'Les Paul', 5510];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'John';
stringArr.push('hey');

guitars[0] = 1984;
guitars.unshift('Jim');

let test = [];
let bands : string[] =  [];
bands.push('Van Halen');

// Tuple

let myTuple : [string, number, boolean]  = ['Dave', 42, true]
let mixed = ['John', 1, false];

// myTuple = mixed;

// Objects
let myObj: object;
myObj = []
console.log(typeof myObj);

myObj = bands;
myObj = {};

const exampleObj = {
    prop1 : 'Dave',
    prop2 : true
}
// exampleObj.prop2 = 42;
exampleObj.prop2 = false;

// Explicitly mentioning and creating types
// we are using type alias
type Guitarist = {
    name ?: string,
    active ?: boolean,
    albums: (string | number)[]
}

// we dont add '=' in interface
// use interface when defining class
interface Singer {
    name : string,
    active ?: boolean,
    albums: (string | number)[]
}

// To make any field optional we add ? 
let evh : Guitarist = {
    name : 'Eddie',
    active : false,
    albums : [1984, 5510, 'QU812']
}

// we cant even add another property
// evh.surname = 'babloo';

const greetGuitarist = (guitarist : Guitarist) =>{

    // this is called narrowing to avoid undefined and stuff if name is not present as it is optional to provide
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase}!`;
    }
    return 'Hello!';
}
console.log(greetGuitarist(evh));

// Enums
// 'Unlike most typescript features, Enums are not a type-level addition to JS but smthn added to the language and runtime'

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes.NotFound);

console.log(StatusCodes.Success);
