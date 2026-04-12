// repeat karne ko loop kehte han
// for while foreach

// kaha se jaana hai -> kaha tak jaana ha -> kaise jaana hai
// for

// kaha se jaana hai -> kab rukna ha -> laise jaana ha
// while

// for

// for(start; end; change){
// code
// };

for(let i = 1; i<=5; i++){
    if(i == 2)
        continue //it skips that iteration
    console.log(i);
    
}

// while

let i = 1;
while(i<=5){
    if(i==3){
        break; // it break the loop and come out of loop
    }
    console.log(i);
    i++;
    
}
