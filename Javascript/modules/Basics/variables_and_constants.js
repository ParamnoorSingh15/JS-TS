// var - part of es5, 
// let, const - part of es6

var username = "harsh"; // it remains there in entire life of program to store something

// declaration and initialization

var a; // this is called declaration
var a = 12; // this is called declaration and initialization

function fc (){
    if(false)
        var a = 13;

    console.log(a);
    
}
fc() // here this gives undefined cause in var the varibale is hoisted even if the if statement never get executed

// jab bhi variable var se banega yeh apne aap ko window ma add karega
// function  scoped hota ha 
// aap firse declare karte ho same name se to error nahi ayega
// var is not block scoped its functional scoped , if function is not defined then it becomes global scoped
// that is why we gonna use 'let' instead of 'var', let is block scoped { }

// types of scope - functional, block, global



const pi = 3.14; // the value of this will gonna never change that is why this constant

let num = 23;
num = 24;

console.log(num);


// Temporal dead zone

//utna area jitne mein js ko pata to hai ki variable exist karta hai par wo apko value nahi de sakta
// like here from line 1 to 44 is tdz, all area above declaration of variable is tdz

console.log(name);

let name = "ekas";


// Hoisting 
/* hoisting - ek variable ko jab js mein banate han to wo variable do hisse mein toot jaata ha and uska declare
part upar chala jaata ha and uska initialization part neeche reh jata ha */

var a = 12;

var a = undefined; // it goes on line 1 of program
a = 12 // it remains where it is like at line 52

// *** let ma bhi hoisting hoti ha but vo initialize nahi hui hoti to voh dikha deta ha log ma but var ma voh undefined hi bata deta ha

// var -> hoist -> undefined
// let -> hoist -> x
// const -> hoist -> x

// tdz var ma activate nhi hota but let const ma hota ha