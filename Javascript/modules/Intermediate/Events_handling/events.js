// document.querySelector('p').addEventListener('click',function(){
//     this.style.color = 'red';
// })

let input = document.querySelector('input');
input.addEventListener('input',(e)=>{
    console.log(e.target.value);
})

// change event tab chalta ha jab aapka koi input select ya textarea mein koi change ho jaye

let syd = document.querySelectorAll("h1");
let select = document.querySelector("select");


select.addEventListener("change",(e)=>{
    if(e){
        syd[1].textContent = `${e.target.value} device selected`
        
        
    }
})

let main = document.querySelector("#main");


window.addEventListener("keydown",(e)=>{
    console.log(e);
    
})
