//ClassList

// const SectionTodo = document.querySelector(".section-todo");
// console.log(SectionTodo.classList);
// //add class
// SectionTodo.classList.add('bg-dark');
// //remove class
// SectionTodo.classList.remove('bg-dark');
// // SectionTodo.classList.remove('container');

// //check if class is present or not
//  const result = SectionTodo.classList.contains("container");
//  console.log(result);

//  //toggle-adds class if doesn't exist and removes class if it already exists

//  SectionTodo.classList.toggle("bg-dark");
// console.log(SectionTodo.classList);
// SectionTodo.classList.toggle("bg-dark");
// console.log(SectionTodo.classList);

//*********************************************************************************************************************** */


// Add new HTML elements to page 


// innerHTML to add html element

// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML)
// todoList.innerHTML = "<li>New Todo 2 </li>"
// todoList.innerHTML += "<li>New Todo </li>";
// todoList.innerHTML += "<li>teach students </li>";

// when you should use it , when you should not
// todoList.insertAdjacentElement("afterbegin", '<li>Hi</li>')



//document.createElement()

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Setoo Solutions");
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// // todoList.prepend(newTodoItem);

// console.log(newTodoItem);

// const todo1 = document.querySelector(".tolido-list-");
// todo1.remove();
// console.log(todo1);

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Setoo Solutions";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);

//************************************************************************************************************* */


//insertAdjacentHTML

// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin;
// beforeend;
// afterend;

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Students </li>");

//**************************************************************************************************************** */


//clone nodes

// clone nodes
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true); //true is used for deep cloning
// ul.append(li);
// ul.prepend(li2);

//******************************************************************************************************************* */

//queryselector gives nodelist and static list
//getElementBy... gives HTMlL collection and live list

// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");

// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";

// ul.append(sixthLi);
// console.log(listItems);

//********************************************************************************************************************** */


//how to get dimensions of an Element


// const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect(); //all dimension info
// const info2 = sectionTodo.getBoundingClientRect().width; //only width


// console.log(info);

//*************************************************************************************************************************** */

//intro to events

//onclick:

// const btn = document.querySelector(".btn-headline");
// console.log(btn);
// console.dir(btn);

// btn.onclick = function(){
//     console.log("You clicked me!!!!!!!!!");
// }

//AddEventListner

// btn.addEventListener("click",function(){
//     console.log("You Clicked me!!!!!");
// })


// btn.addEventListener("click", () => {
//     console.log("Arrow functions!!!!!!");
// })


//********************************************************************************************************************************** */

//THIS KEYWORD:

const btn = document.querySelector(".btn-headline");

// btn.addEventListener("click", () => {
//         console.log("Arrow functions!!!!!!");
//         console.log("Value of this"); //In case of arrow functions value of this is window object
//         console.log(this);
//     })

// btn.addEventListener("click", function(){
//             console.log("Arrow functions!!!!!!");
//             console.log("Value of this"); //In case of normal functions the value of this is the btn itself or the element itself
//             console.log(this);
//         })


//onclick for multiple events:
