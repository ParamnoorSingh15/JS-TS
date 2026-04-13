// dom manipulation
// html se element ko select karna
// text badalna
// html badalna
// css badalna
// attribute badalna
// event listener lagana

let abcd = document.getElementById("abcd")
// console.log(abcd);
// console.dir(abcd);

let abcde = document.getElementsByClassName("name");
// console.log(abcde[0].textContent);


// The above ones are not used nowadays 
// The industry uses the given below

// Query selector se agar id select karni ha to # lagana ha , class select karni ha to . lagana ha
let one = document.querySelector("h1")
// let two = document.querySelectorAll("h3")
two = document.querySelector("h3")

// console.log(one);
one.textContent = "Hello Param kaise ho"; // yeh text badalta ha
one.innerHTML = "<i>Paramnoooor</i>" // agar kisi text ke andar html tag dalna ha 

let link = document.querySelector('a');
link.setAttribute("href", "https://www.google.com")


let image = document.querySelector('img');
image.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg"
)

link.removeAttribute('target');
console.log(image.getAttribute("width"));


// Dynamic dom manipulation

// create element
// append/prepend karo jaha bhi element chahiye waha
// append body ke end ma add hota ha
// prepend body ke sabse pehle ma add hota ha


let jscreation = document.createElement('h2');

jscreation.innerHTML= "<p>I am creation of <u>Ekas</u></p>"
// document.body.appendChild(jscreation)
document.body.insertBefore(jscreation, link);

jscreation.remove();


// js se css badalna

one.style.color = 'blue';
one.style.backgroundColor = 'red';
one.style.fontFamily = 'Gilroy'; // this is not good practice

two.classList.add('hulu'); // this is better practice
two.classList.remove('hulu');
two.classList.toggle('hulu') // toggle lagi hui hata deta ha , aur agar hati hogi to laga deta ha