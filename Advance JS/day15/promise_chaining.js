//promise.resolve
//promise chaining


// const mypromise = Promise.resolve(5);
// mypromise.then((value) => {
//     console.log(value);
// })

//then() -----------> Alwayas returns a promise

// function mypromise(){
//     return new Promise((resolve,reject) => {
//         resolve("foo");
//     })
// }

// mypromise()
// .then((value) => {
//     console.log(value);
//     value += "baar";
//     return value; //returns promise //if didn't returned anything by default it will return undefined
// })
// .then((value) => {
//     console.log(value);
//     value += "baaz";
//     return value;
// })
// .then((value) => {
//     console.log(value);
// })


//can't use then on strings.

//************************************************************************************************************************************* */

//Example:

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(element){
              element.textContent = text;
              element.style.color = color;
              resolve();
            }else{
              reject("element not found");
            }
          },time)
    })  
  }

changeText(heading1, "one", "red", 1000)
.then(() => changeText(heading2, "Two", "Violet",1000))
.then(() => changeText(heading3 , "Three", "pink" ,1000))
.then(() => changeText(heading4 , "Four", "green" ,1000))
.then(() => changeText(heading5 , "Five", "brown" ,1000))
.then(() => changeText(heading6 , "Six", "yellow" ,1000))
.then(() => changeText(heading7 , "Seven", "purple" ,1000))
.then(() => changeText(heading8 , "Eight", "orange" ,1000))
.then(() => changeText(heading9 , "Nine", "cyan" ,1000))
.then(() => changeText(heading10 , "ten", "blue" ,1000))
.catch((error)=>{
    alert(error);
})
