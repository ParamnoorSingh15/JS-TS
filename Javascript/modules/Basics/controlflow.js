// if else else-if
// switch case
// early return pattern

let age = 18;

if(age >= 18){
    console.log("You can drive the car");
    
}else {
    console.log("You cannot drive the car");
    
}

let loggedIn = true;
let admin = true;

if(loggedIn && admin){
    console.log("Hey there admin");
    

}else if(loggedIn){
    console.log("Hey there user");
    

}else{
    console.log("Who are you?");
    

}

// switch case

switch(1){
    case 1:
        console.log("Hey hey");
        break;
    case 2:
        console.log("Ara Ara");
        break;
    default:
        console.log("hui hui");
     
}

// early return pattern

function getVal(val){
    if(val < 100) return 'D';
    else if(val < 75) return 'C';
    else if (val < 50) return 'B';
    else return 'A';
}