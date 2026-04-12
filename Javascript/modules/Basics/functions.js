// what why how
// what function

// agar code likh diya to wo turant chal jaata ha aur ham aisa na ho iske liye function banate han
// it make reusability of code and modularity of code

console.log("hey");

// function declaration
function dance() {
    console.log("Im dancing now");
    
}
dance();

// function expression
let sing = function(){
    console.log("I am singing now");
    
}
sing();

// fat arrow function
let fnc = () => {
    console.log('heyeheyhey');
    
}
fnc();

// parameters and arguments
// here name is parameter and 'ekas' that we gave is argument
function play(name){
    console.log(`${name} khel rha ha`);
    
}

play("Ekas");

function add(v1, v2){
    console.log(v1+v2);
    
}

add(7, 8);

// default parameterized function
function subtract(v1 = 0, v2 = 0){
    console.log(v1 - v2);
    
}
subtract();

// jab argument kai saare ho to humein utne hi parameter banaane padenge, issey bachne ke loye hum rest/spread ka use karte hai ...
// agar ... function ke parameter space mein lage to wo rest ha
// agar wo arraysand objects mein lage to wo spread operator ha

function abcd(...val){
    console.log(val);
    
}
abcd(1, 2, 3, 4, 5 , 6);

// return matlab jaha se aaye ho wahi daal denga

function dcba(){
    return 12;
}

let val = dcba();
console.log(val);

// first class function -> function ko values ki tarah treat kar sakte han

function greet(val){
    val();
};

greet(function(){
    console.log("Good morning");
    
});

// higher order function , wo function hota ha jo ki return kare function ya fir accept kare function apne parameter me

function abcde(val){
    return val;
}; // this is hof

abcde(function(){
    console.log("Aloo");
    
});

// pure vs impure function

// aisa function jo ki bahar ki value ko na badle voh pure func
// aisa function jo ki bahar ki value badl de voh impure func

let a = 12;

function print(){
    console.log("heuhue");
    
} // pure function
function hui(){
    a++;
} // impure function

// closures -> ek function jo return kare ek aur function aur return hone vala function hamesha use karega parent funcyion ka koi variable

function sum(){
    let a = 1;
    let b = 2;
    return function(){
        console.log(b);
        
    }
}
let ans1 = sum();
ans1();

// lexical scoping - jo variable jis function ma bana ha voh us func ke andar kahin bi use kiya ja sakta ha

// iife -> immediately invoke function expression

(function(){
    console.log('ararararrara');
    
})();




// very very imp ***********
// function declaration ma hoisting chalti ha but function expression ma hoisting nahi chalti


// it throws error (function expression) 
// kalu();

// let kalu = function(){
//     console.log('im kaalu');
    
// }

// yeh run kar jayega kyunki isme hoisting work kar rahi ha
kalu();
function kalu(){
    console.log('im kaalu');
}

