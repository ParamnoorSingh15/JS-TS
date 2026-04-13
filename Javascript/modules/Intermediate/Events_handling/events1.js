// let card = document.querySelector("h1");


// window.addEventListener("keydown",(e)=>{
//     if(e.key === " "){
//         main.textContent = "SPC";
//     }else{
//         main.textContent = e.key;
//     }
    
// })

let btn = document.querySelector("#btn");
let input = document.querySelector("#fileInput");

btn.addEventListener("click",()=>{
    input.click();
})
input.addEventListener('change',()=>{
    btn.textContent = input.files[0].name;
})

let form = document.querySelector("form");
let inputForm = document.querySelectorAll("form input");
let main = document.querySelector("#main")

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let card = document.createElement('div');
    let profile = document.createElement('div');
    let h3 = document.createElement('h3');
    let h5 = document.createElement('h5');
    let p = document.createElement('p');



    card.classList.add("card")
    profile.classList.add("profile")

    let img = document.createElement('img');
    img.setAttribute("src",inputForm[0].value);
    
    h3.textContent = inputForm[1].value;
    h5.textContent = inputForm[2].value;
    p.textContent = inputForm[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    
    main.appendChild(card);
    
    inputForm.forEach(function(inp){
        if(inp.type != "submit")
            inp.value = "";
    
    })
})
