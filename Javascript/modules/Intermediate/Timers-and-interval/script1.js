let btn = document.querySelector("#startBtn"); 
let pb = document.querySelector("#progressBar"); 
let pt = document.querySelector("#progressText")


let si;

btn.addEventListener("click", ()=>{

    clearInterval(si); 

    let count = 0;

    si = setInterval(()=>{

        if(count < 100){

            count++;

            pb.style.width = `${count}%`;

            pt.textContent = `${count}%`;

        }
        else{

            clearInterval(si);

        }

    }, 10000/100);

});