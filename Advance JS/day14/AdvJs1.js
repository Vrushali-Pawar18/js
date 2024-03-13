//Synchronous and Asynchronous Programming
//Synchronous programming is a programming in which code lines run one by one

//javascript is a synchronous 

//************************************************************************************************************************ */

//Set Timeout

// console.log("Script start");

// setTimeout(() => {
//     console.log("Inside setTimeout");
// },1000);

// console.log("script end");

//set timeInterval

// console.log("Script start");

// setInterval(() => {
//     console.log(Math.random());
// },1000);

// console.log("script end");

//**************************************************************************************************************************** */

//Project---> Stop continously changing background color.

// const body = document.body;
// const button = document.querySelector("button");
// const intervalId = setInterval(() => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   const rgb = `rgb(${red},${green}, ${blue})`;
//   body.style.background = rgb;
// }, 1000);

// button.addEventListener("click", () => {
//   clearInterval(intervalId);
//   button.textContent = body.style.background;
// });

// console.log(intervalId);

//********************************************************************************************************************************** */

//understand callbacks

// function getTwonumsAndAdd(a,b,callback){
//     if(typeof a === "number" && typeof b === "number"){
//         console.log(a,b);
//         callback(a,b);
//     }
//     else{
//         onfail();
//     }
   
// }

// function add(n1,n2){
//     console.log(n1 + n2);
// }

// function onfail(){
//     console.log("Invalid Datatype");
//     console.log("please enter number only");
// }

// getTwonumsAndAdd("12",20,add,onfail);


//************************************************************************************************************************************* */

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// //callback hell

// setTimeout(() => {
//     heading1.textContent = "One";
//     heading1.style.color = "Violet";

//     setTimeout(() => {
//         heading2.textContent = "Two";
//         heading2.style.color = "purple";

//         setTimeout(() => {
//             heading3.textContent = "Three";
//             heading3.style.color = "red";

//             setTimeout(() => {
//                 heading4.textContent = "four";
//                 heading4.style.color = "pink";

//                 setTimeout(() => {
//                     heading5.textContent = "five";
//                     heading5.style.color = "green";

//                     setTimeout(() => {
//                         heading6.textContent = "six";
//                         heading6.style.color = "blue";
    
//                         setTimeout(() => {
//                             heading7.textContent = "seven";
//                             heading7.style.color = "brown";

//                         },1000)

//                     },3000)

//                 },2000)

//             },1000)

//         },2000)

//     },2000)

// },1000)


//************************************************************************************************************************************************ */

//Promises

// console.log("script start");

// const bucket = ["coffee","chips","vegetables","salt","rice"];

// const myPromise = new Promise((resolve,reject) => {
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("Resolved promise");
//     }else{
//         reject("not resolved");
//     }
// })


// myPromise.then(
//     (mynewpromise) => {
//         console.log("fulfilled");
//     }
// )
// .catch((error) =>{
//     console.log(error);
// })

// setTimeout(() => {
//     console.log("Hello from set Timeout");
// })


// console.log("script end");

//***************************************************************************************************************************************** */

//function returning promise

function newpromise(){
const bucket = ["coffee","chips","vegetables","rice"];
    return new Promise((resolve,reject) => {
            if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
                resolve("Resolved promise");
            }else{
                reject("not resolved");
            }
        })
}

newpromise().then(
        (mynewpromise) => {
            console.log("fulfilled");
        }
    )
    .catch((error) =>{
        console.log(error);
    })


//************************************************************************************************************************************************* */


