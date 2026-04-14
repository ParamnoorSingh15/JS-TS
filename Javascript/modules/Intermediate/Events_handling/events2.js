let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover", ()=>{
//     abcd.style.backgroundColor = "yellow";
// })

// abcd.addEventListener("mouseout", ()=>{
//     abcd.style.backgroundColor = "red";
// })

// window.addEventListener('mousemove',(e)=>{
//     abcd.style.top = e.clientY + "px";
//     abcd.style.left = e.clientX + "px";
    
// })

// study keyup urself

// Event bubling - jispe event ayegaagar uspar listener nahi hua to humaara event uske parent par listener dhundega aur aisa karte karte upar ki tard move karega

document.querySelector("#nav").addEventListener("click",function(){
    alert("clicked");
},true)

document.querySelectorAll("#nav a").forEach(function(elem){
    elem.addEventListener("click", function(){
        alert("Im child of nav");
    });
});

