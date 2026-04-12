"use strict";
let username = "Ekas";
console.log(username);
let a = 12;
let b = 6;
let c = 2;
console.log(a / b);
console.log(c * b);
// if we dont mention type first then the fist data we provide is become its default datatype
let myName = 'Paramnoor';
let meaningOfLife;
let isLoading;
// let album: any; // we can provide data of anytype, we use this if we are not sure of type of data
let album; // union datatype, either this or that
myName = 'Ekas';
meaningOfLife = 42;
isLoading = true;
album = 1984;
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 'Ekas'));
let postId;
let isActive;
let re = /\w+/g;
