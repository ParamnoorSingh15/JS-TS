let username = "Ekas";
console.log(username);

let a:number = 12;
let b:number = 6;
let c:number = 2;


console.log(a / b);
console.log(c * b);

// if we dont mention type first then the fist data we provide is become its default datatype


let myName : string = 'Paramnoor';
let meaningOfLife: number;
let isLoading: boolean;

// let album: any; // we can provide data of anytype, we use this if we are not sure of type of data
let album : string | number; // union datatype, either this or that
myName = 'Ekas';
meaningOfLife = 42;
isLoading = true;
album = 1984; 

const sum = (a:number, b:string) =>{
    return a+b;
}
console.log(sum(2,'Ekas'));

let postId: string | number;
let isActive : number | boolean;

let re : RegExp = /\w+/g;