let form = document.querySelector('form');
let nm = document.querySelector('#name');

// form.addEventListener("submit", (e)=>{

//     e.preventDefault();
//     let small = document.querySelector("small");
//     if(nm.value.length < 3){

//         small.style.display = "initial";
        
//     }else{
//         small.style.display = "none";
//     }
    
// })

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

const regex =
/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,13}$/;


password.addEventListener("input", () => {

    if(regex.test(password.value)){

        passwordError.classList.remove("invalid");
        passwordError.classList.add("valid");

        passwordError.textContent = "Strong password ✅";

    }else{

        passwordError.classList.remove("valid");
        passwordError.classList.add("invalid");

        passwordError.textContent =
        "Must contain uppercase, number, special character (8–13 length)";
    }

});