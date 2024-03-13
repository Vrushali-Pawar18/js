// function isEven(num){
//     if(num % 2 == 0){
//         return true;
//     }
//     return false;

// }

// console.log(isEven(10));

// function firstchar(string){
//     return string[0];
// }

// console.log(firstchar("Vrushali"));

// function target(array, target){
//     for(let i=0;i<=array.length;i++){
//         if(array[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// let array = [2,3,45,67];
// console.log(target(array,67));

//******************************************************************************************************************* */

//Function Expressions

// const sumThreeNums = function(num1,num2,num3){
//     return num1+num2+num3;
// }

// console.log(sumThreeNums(1,2,3));

//Arrow functions

// const sumThreeNums = (num1,num2,num3) => {
//     return num1+num2+num3;
// }

// console.log(sumThreeNums(1,2,3));


//we can create number of functions inmto the function

// function app(){
//     const myfunc = () => console.log("Hello from myfunc");

//     const add = (num1,num2) => console.log(num1+num2);
//     console.log("inside app");
//     myfunc();
//     add(3,4);
// }

// app();

//********************************************************************************************************************** */
//lexical scope - lexical environment means scope in which the function is declared

// function myapp(){

//     const myVar = "value 1";
//     const myfunc = () => {
//         // const myVar = "value57";
//         console.log("hello from myfunc", myVar);
//     }
//     console.log(myVar);
//     myfunc();
// }
// myapp();
//here the lexical scope of myfunc is myapp
//hence when we call myfunc it will search for myVar in myfunc first and 
//then it will search in its lexical scope i.e where the function is declared.


// const myVar = "value 1";
// function myapp(){

//     const myfunc = () => {
//         // const myVar = "value57";
//         console.log("hello from myfunc", myVar);

//         const myfunc2 = () => {
//         // const myVar = "Value 1234";
//             console.log("hello from myfunc2" , myVar);
//         }
//         myfunc2();
//     }
//     console.log(myVar);
//     myfunc();
// }
// myapp();


//let and const are block scope we can only access them ito the block in which they are declared
//var is function scope

//************************************************************************************************************************* */
//Default parameters

//old method

// function add(num1,num2){
//     if(typeof num2 === "undefined"){
//         num2 = 1;
//     }
//     return num1+num2;
// }

// console.log(add(2));

//new method

// function add(num1,num2=0){
//     return num1+num2;
// }

// console.log(add(2,4));

//************************************************************************************************************ */
//rest parameters
//...c is array of rest parameters

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
//  myfunc(1,2,3,4,5,6,7);


// function addall(...numbers){
//     let total = 0;
//     for(number of numbers){
//         total += number;
//     }
//     return total;
// }

// let ans = addall(1,2,3,4,5,6,7,8,9,10);
// console.log(ans);


//************************************************************************************************* */

//parameter destructuring

// const person = {
//     fname : "Vrushali",
//     age : 23,
//     gender : "female"
// }

//first way
// function paramdestuc(obj){
//     console.log(obj.fname);
//     console.log(obj.age);
//     console.log(obj.gender);
// }

// paramdestuc(person);

//second way
// function paramdestuc({fname,age,gender}){
//     console.log(fname);
//     console.log(age);
//     console.log(gender);
// }

// paramdestuc(person);


//********************************************************************************************* */

//callback functions - we can accept a function as a input in the function and can call that function into the function


// function myfunc2(){
//     console.log("My func 2");
// }
// function myfunc(a){
//     // console.log(a);
//     a();
// }

// myfunc(myfunc2);

// function myfunc2(){
//     console.log("My func 2");
// }
// function myfunc(callback){
//     // console.log(a);
//     callback();
// }

// myfunc(myfunc2);

//********************************************************************************************** */

//function returning function

// function fun1(){
//     function fun2(){
//         return "Hello";
//     }
//     return fun2;
// }

// let ans = fun1();
// console.log(ans());


//************************************************************************************************* */

//imp topics in array

//foreach loop

// const numbers = [3,4,5,7,8];

// function iterate(number, index){
//     console.log(`Index is ${index} and number is ${number}`);
// }

// numbers.forEach(iterate);
// numbers.forEach(function(number,index){
//     // console.log(`index : ${index} number : ${number}`);
//     console.log(`index : ${index} Number : ${number *2}`);

// });


// const users = [
//     {fname : "Vrushali" , age : 23},
//     {fname : "Atharv" , age : 24},
//     {fname : "Aditya" , age : 33},
//     {fname : "Anushka" , age : 53},
//     {fname : "Prajyot" , age : 73},
//     {fname : "Ankit" , age : 83},
// ]

// users.forEach(function(user){
//     console.log(`fname : ${user.fname} age : ${user.age}`);
// })
