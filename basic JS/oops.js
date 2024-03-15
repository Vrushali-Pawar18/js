//methods


// const info = function(){
//     console.log(`Name is ${this.fname} and age is ${this.age}`)
// }
// const person1 = {
//     fname : "Anushka",
//     age:22,
//     about: info
// }
// const person2 = {
//     fname : "Vrushali",
//     age:23,
//     about: info
// }
// const person3 = {
//     fname : "Atharv",
//     age:24,
//     about: info
// }
// const person4 = {
//     fname : "Aditya",
//     age:20,
//     about: info
// }

// person1.about();
// person2.about();
// person3.about();
// person4.about();

//this and window are same
//window is the global object of javascript

//********************************************************************************************************************** */

//call apply and bind

//call- using call we can access the function/method that is declared in another function

// const user1 = {
//     firstName : "harshit",
//     age: 8,  
//     about : function about(hobby, favMusician){
//         console.log(this.firstName, this.age, hobby, favMusician);
//     } 
// }
// const user2 = {
//     firstName : "mohit",
//     age: 9,
    
// }

// user1.about.call(user2, "abc","xyz");

//apply - same as call just pass the arguments in an array

//  function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// } 
// const user1 = {
//     firstName : "Vrushali",
//     age: 8,  
   
// }
// const user2 = {
//     firstName : "Anushka",
//     age: 9,
    
// }
// about.call(user1,"abc","xyz");
// about.apply(user2,["abc","xyz"]);

// bind just stores the returned value in a function
// const func = about.bind(user1,"xyz","abc");
// func();

//arrow functions takes this from its surrounding

//****************************************************************************************************************** */

// const userMethods = {
//     about: function(){
//         console.log(`name : ${this.fname} and age : ${this.age}`);
//     },
//     is18: function(){
//         return this.age >=18;
//     }
// }

// function createUser(fname,lname,email,address,age){
//     const user = {};
//     user.fname = fname;
//     user.lname = lname;
//     user.email = email;
//     user.address  = address;
//     user.age = age;
//     user.about =userMethods.about;
//     user.is18 = userMethods.is18;

//     return user;

// }

// const user1 = createUser("Vrushali","Pawar","abc@gmail.com","xyz",23);
// const user2 = createUser("Anushka","Pawar","qwer@gmail.com","cbn",13);

// console.log(user1);
// console.log(user2);

// console.log(user2.about());
// console.log(user1.is18());







// let s1 = "Vrushali";

// let i = 0;
// let j = s1.length - 1;

// let s1Array = s1.split('');

// while (i < j) {
//     let temp = s1Array[i];
//     s1Array[i] = s1Array[j];
//     s1Array[j] = temp;
//     i++;
//     j--;
// }

// let reversedString = s1Array.join('');

// console.log(reversedString);