// settimeout accepts time in milliseconds. if you write 10000then that means 10s

// set timeout runs only one time

let tm = setTimeout(function () {
  console.log("hello"); // this prints after 5s
}, 5000);

// it clears the timeout
clearTimeout(tm);

// set interval runs again and again

let si = setInterval(function () {
  console.log("I am interval");
}, 5000);

setTimeout(function () {
  clearInterval(si); //it clears the interval
}, 10000);

let count = 10;
let interval = setInterval(() => {
  if (count >= 1) {
    count--;
    console.log(count);
  }
  else{
    clearInterval(interval)
  }
}, 1000);
