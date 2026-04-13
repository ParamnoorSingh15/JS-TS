// browser main page par koi bhi harkat karo event raise ho jayega

// kuchh screen par ho aur aapko reaction dena ho to us waqt aapko event handle karna aana chahiye

// event matlab hota ha koi action hua
// event listener ka matlab hota ha apne koi action ka reaction diya

let h1 = document.querySelector("h1");

// h1.addEventListener(event, function)
h1.addEventListener("click",()=>{
    h1.style.color= "red";
})

// select the paragraph
let p = document.querySelector("p");

function dbclick(){
    p.style.color = 'blue';
}
p.addEventListener("dblclick", dbclick)

p.removeEventListener("dblclick", dbclick)