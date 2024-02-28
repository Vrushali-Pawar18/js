//select element by id

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

//select element by query selector
//used # because main-heading is Id
//for class we use .

const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

const header = document.querySelector(".header");
console.log(header);
const navItem = document.querySelectorAll(".nav-item")
console.log(navItem);