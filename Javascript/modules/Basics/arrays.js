let marks = [10, 40, 52, 37, 92];
let arr = new Array();

marks[1] = 30;

let arr1 = [1, 2, 3, 4, 5];
arr1.push(6) // if after .thereissomething() then this is called method

// 1, 2, 3, 4, 5, 6
arr1.shift() // it removes value from front

// 2, 3, 4, 5, 6
arr1.pop() // it removes value from end

// 2, 3, 4, 5
arr1.unshift(0) // it adds something at front

// 0, 2, 3, 4, 5
arr1.splice(2,1) // it tells from where to remove value and how much values to remove


// slice  doesnt modfy original array it retuns copy of elemnt from original array and we store it new variable/array

// 0, 2, 4, 5
let arr2 = arr1.slice(0, 3) // start and end index

// reverse , reverse the original array
arr1.reverse()

// foeach, sort, map, reduce accepts function in their argument

// 5 4 2 0
arr1.sort((a, b) => a - b);  // Ascending order

// 0 2 4 5
arr1.sort((a, b) => b - a); // Descending order

arr1.forEach(i =>{
    console.log(i);
    
})

// map sirif tab use karna ha jab aapko ek naya array banana ha pichle array ke data ke basis pe

// map dikhte hi saath man mein ek blank array bana liya karo
// return karna compulsary varna undefined ayega in map , filter

// let newArr = arr1.map(function(val){
//     if(val > 2)
//         return val;
// })

let newArr = arr1.filter(function(val){
    if(val > 2)
        return true;
})

newArr.forEach(i =>{
    console.log(i);
    
})

// reduce tab karna ha jab hamko sabhi elements ka use karke koi ek element banana ho to

let ans = arr1.reduce(function(sum, val){
    return sum + val;
},0);

// here sum is accumulator 
// jab return hoga voh 0 ma add hoga firse function chalega firse add hoga then again func run hoga
console.log(ans);

// destructuring
let [a,b] = arr1;

console.log(a, b);

// spread operator 
// it makes copy without taking reference

let nums = [1,2,3,4,5,6];
let nums1 = [...nums];







    
    
