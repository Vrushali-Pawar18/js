//select element by id

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

//select element by query selector
//used # because main-heading is Id
//for class we use .

// const mainHeading = document.querySelector("#main-heading");
// console.log(mainHeading);

// const header = document.querySelector(".header");
// console.log(header);
// const navItem = document.querySelectorAll(".nav-item")
// console.log(navItem);


// change text 
// textContent and innerText
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.innerText);
// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent);


// change the styles of elements
const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading.style);
mainHeading.style.backgroundColor = "blue";
mainHeading.style.border = "20px solid green";


// get and set attrubutes
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href", "https://codprog.com");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));

// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll

const navItems1 = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItems);
console.log(Array.isArray(navItems));
const navItems = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItems[1]);