"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5510];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'John';
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('Jim');
let test = [];
let bands = [];
bands.push('Van Halen');
// Tuple
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
// myTuple = mixed;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true
};
// exampleObj.prop2 = 42;
exampleObj.prop2 = false;
// To make any field optional we add ? 
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5510, 'QU812']
};
// we cant even add another property
// evh.surname = 'babloo';
const greetGuitarist = (guitarist) => {
    // this is called narrowing to avoid undefined and stuff if name is not present as it is optional to provide
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(evh));
// Enums
// 'Unlike most typescript features, Enums are not a type-level addition to JS but smthn added to the language and runtime'
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
