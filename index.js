// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let p = document.querySelector('#text');
    console.log(p);
    p.textContent = "This is really cool!";
  });