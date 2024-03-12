//Event Objects

const all_buttons = document.querySelectorAll(".my-buttons button");

//whenenevr we perform an event browser gives us the information of that event in the form of boject


// for(let button of all_buttons){
//     button.addEventListener("click", (e) => {
//         console.log(e);
//     })
// }

// for(let button of all_buttons){
//     button.addEventListener("click", function(){
//         // console.log(this);
//         console.log(button.textContent);
//     })
// }

// for(let button of all_buttons){
//         button.addEventListener("click", (e) => {
//             // console.log(e.target);
//             console.log(e.currentTarget);
//         })
//     }

//********************************************************************************************************** */


// console.log("script start !!!!!")
// const allButtons = document.querySelectorAll(".my-buttons button");

// allButtons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         let num = 0;
//         for(let i = 0; i<= 1000000000; i++){
//             num += i;
//         }
//         console.log(e.currentTarget.textContent, num);
//     })
// })

// let outerVar = 0;
// for(let i = 0; i<= 100000000; i++){
//     outerVar += i;
// }
// console.log("value of outer variable is ", outerVar);
// console.log("script end !!!!!")

//*********************************************************************************************************************** */

//set a random color to background after clicking the button------>little-demo project

// const mainButton = document.querySelector("button");
// const body = document.body;
// const currentColor = document.querySelector(".current-color");
// function randomColorGenerator(){
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);
//     const randomColor = `rgb(${red}, ${green}, ${blue})`
//     return randomColor;
// }

// mainButton.addEventListener("click",()=>{
//     const randomColor = randomColorGenerator();
//     body.style.backgroundColor = randomColor;
//     currentColor.textContent = randomColor;
// })


//************************************************************************************************************************** */

//keypress event

// const body = document.body;

// body.addEventListener("keypress", (e) => {
//     console.log(e.key);
// })

//mouseover event

// const mainButton = document.querySelector("button");

// mainButton.addEventListener("mouseover", () => {
//     console.log("mouseover event occurred!!!!!");
// })


//************************************************************************************************************************* */
//************************************************************************************************************************************ */
//************************************************************************************************************************************** */

//Event capture
//Evenet bubble
//Event Delegation



// console.log("hello world");

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// capturing events
// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

///// not capture

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// event delegation
// grandparent.addEventListener("click", (e) => {
//   console.log(e.target);
// });

//*************************************************************************************************** */


//todo List

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});
