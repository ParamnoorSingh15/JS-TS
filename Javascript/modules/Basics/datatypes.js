// data types

// data ke type

// Primitive and Reference

// Primitive -> aisi saari values jinko copy karne pe tumhe ek real copy mil jaye
// string, number, boolean, null, undefined, symbol, bigint

// reference -> inko copy karne par real copy nahi milegi but aapko reference milega parent ka
// arrays, object, functions
// [] {} ()

let a = 12;
let b = a;

a = a+2;

console.log(a); // 14
console.log(b); // 12

let nums = [1, 2, 3];
let nums1 = nums;

nums1[0] = 3;

console.log(nums); // [3, 2, 3]
console.log(nums1); // [3, 2, 3]

// string
// " " - double quote
// ' ' - single quote
// ` ` - backticks

// inke andar wrapped data ko string kehte han, sequence of characters
let name = 'ekas'; // string
let date = 12; // number
let isActive = true; // boolean
let ans = null; // null -> idk it value now but in future i will get it
let canHappen = undefined; // undefined -> jo value by default milti ha

// symbol -> unique immutable value

// future mein hum koi libraries use karenge ab is case mein un libraries mein kai baar kuch fields hoti ha jinse
// similar hum bhi bana dete hai aur galti se humari banai hui fields us library ki original fields ko change kar deta ha

let u1 = Symbol("uid");
let u2 = Symbol("uid");

console.log(u1 === u2); // false

// to create bigint we use n after long number 

let longnum = 742467623428746234872346n;
console.log(longnum + 8n);

// Dynamic typing -> aap ek variable mein kisi bhi type ka data store kar sakte ho aur aap usko change bhi kar sakte ho
// Static typing -> cannot change data cause datatype is explcitly mentioned, it is better for this we use typescript

let garbage  = 12;
garbage = [1,2,3];
console.log(garbage);

console.log(typeof NaN);
console.log(typeof null);

// Type coercion -> concept jismein aapka ek type automatically convert hojayega

console.log('5' + 1); // 51 here + is doing concatenation
console.log('5' - 1); // 4

// here if on left side of + is string we do concat other wise it do addition


console.log(2 + 1 + '2' + 3 + 4); // 3234

// 0 false "" null undefined NaN document.all -> all these are falsy value, to check this use !! before the thing
console.log(!!"");
