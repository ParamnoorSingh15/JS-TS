let role = "admin"
let obj = {

    name : "ekas",
    age : 21,
    khaana : "chicken",
    locations : {
        lat: 23.2,
        lng: 77.4
    },
    [role] : "ekas",
};

for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
    
}

console.log(Object.keys(obj));
console.log(Object.entries(obj));

// To make copy of object, we can also use spread operator 

// let obj2 = {...obj}

// v v v imp *****
// when we use spread operator on nested objects the outer keys get copied but internal objects start paasing reference

// for this we use deep clone
// let obj2 = JSON.parse(JSON.stringify(obj))

let obj2 = Object.assign({}, obj);

let {lat, lng} = obj.locations;
console.log(lat, lng);

