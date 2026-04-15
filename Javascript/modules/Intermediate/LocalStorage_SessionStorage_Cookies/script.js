// local storage -> aaple browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga (can be called browser database)

// session storage -> ye apka data temporarily store karta ha, matlab tab band hua aur data gya

// cookies -> yeh bhi data store karta hai and aapka data browser ke cookie naam ki property ma save hota ha and yeh cookie concept kam data ya light data ke liye hota ha


// localStorage
// store kasie karen             - setItem
// data fetch kaise karen        - getItem
// remove kaise karen            - removeItem
// update kaise karen

localStorage.setItem("name", "harsh"); // store

let val = localStorage.getItem("name"); // fetch
console.log(val);

localStorage.removeItem("name"); // remove

localStorage.setItem("name", "harshita"); // nahi ho to bana dena agar ho to update kar dena

// sessionStorage

sessionStorage.setItem("name", "harsh"); // store

let val1 = localStorage.getItem("name"); // fetch
console.log(val1);

sessionStorage.removeItem("name"); // remove

sessionStorage.setItem("name", "harshita"); // nahi ho to bana dena agar ho to update kar dena

sessionStorage.clear() // it clears everything


// cookies
// browser mein chhota data store karne ke liye cookies ka istemaal hota ha

// cookies ~4kb
// localstorage sessionstorage - ~5Mb

// cookies mein jo bhi data store karoge voh page reload par automatically server par jayega

// document.cookie = "email = param@gmail.com";
// document.cookie = "age = 26";

localStorage.clear();

// local storage ma array, object vagaira store nahi kar saktay tabhi unhay string bana ke store karte han - JSON.stringify()
// local storage se kuch data nikalte han to string miltaha , to usko original type ma lane ke liye JSON.parse() use karte han

localStorage.setItem("friend", JSON.stringify(["akash", "sumit", "amit"]))

console.log(JSON.parse(localStorage.getItem("friend")));


