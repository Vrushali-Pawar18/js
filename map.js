//map uses callback function
//stores returnedvalues into an another array

// const numbers = [3,4,8,9,5,6];

// function square(number){
//     return number * number;
// }

//using function expression
// const squareNum = numbers.map(function(number){
//     return number*number;
// });

//using arrow function
// const squareNum = numbers.map((number) => number*number);

// console.log(squareNum);


// const users = [
//     {fname : "Vrushali" , age : 23},
//     {fname : "Atharv" , age : 24},
//     {fname : "Aditya" , age : 33},
//     {fname : "Anushka" , age : 53},
//     {fname : "Prajyot" , age : 73},
//     {fname : "Ankit" , age : 83},
// ]

//store the nmes in an array

// const fnames = users.map(function(user){
//     return user.fname;
// });

//using arrow functions

// const fnames = users.map((user) => user.fname);
// console.log(fnames);

//******************************************************************************************************* */

//filter function

//method of an array
//takes callback function as input
//The input function must return boolean value


// const numbers = [2,3,5,4,6,7,8,9];

// function isEven(number){
//     return number % 2 == 0;
// }

//function expression

// const evenNumbers = numbers.filter(function(number){ 
//     return number % 2 == 0});

//arrow function

// const evenNumbers = numbers.filter((number) => number % 2 == 0);
// console.log(evenNumbers);


//****************************************************************************************************************** */


//reduce method

// const numbers = [1,2,3,4,5,10];

// //aim : sum of all numbers in array
// const sum = numbers.reduce((accumulator, current_value) => accumulator + current_value );
// console.log(sum);

// //working

// //accumulator         current_value           return
// //     1                   2                     3
// //     3                   3                     6
// //     6                   4                     10
// //     10                  5                     15
// //     15                  10                    25


// const usercart = [
//     {productId : 1 , product_name : "Laptop", price : 20000},
//     {productId : 2 , product_name : "TV", price : 10000},
//     {productId : 3 , product_name : "Mobile", price : 15000},
//     {productId : 4 , product_name : "Headphones", price : 2000},
//     {productId : 5 , product_name : "Speaker", price : 3000},
// ]

// const total_in_cart = usercart.reduce((total_price, current_product) => {
//     return total_price + current_product.price;
// },0);
// console.log(total_in_cart);
     

//************************************************************************************************************************** */

//sort

//javascripts sort the numbers as stering comparing to their ascii values

// const userNames = ["Vrushali","Anushka","Atharv","Aditya"];
// userNames.sort();
// console.log(userNames);

// const numbers = [4,2,1344,56,7,9]
// numbers.sort((a,b) => a-b); //ascending order
// console.log(numbers);
// numbers.sort((a,b) => b-a); //descending
// console.log(numbers);



// const products = [
//     {productId : 1 , product_name : "Laptop", price : 20000},
//     {productId : 2 , product_name : "TV", price : 10000},
//     {productId : 3 , product_name : "Mobile", price : 15000},
//     {productId : 4 , product_name : "Headphones", price : 2000},
//     {productId : 5 , product_name : "Speaker", price : 3000},
// ]
// //ascending
//  const lowtohigh = products.slice(0).sort((product1, product2) => {
//     return product1.price - product2.price;
// });

// console.log(lowtohigh[0]);
// console.log(lowtohigh[1]);
// console.log(lowtohigh[2]);
// console.log(lowtohigh[3]);
// console.log(lowtohigh[4]);

// console.log("Descending order")

// //descending
// const hightolow = products.slice(0).sort((product1,product2) => product2.price - product1.price);
// console.log(hightolow[0]);
// console.log(hightolow[1]);
// console.log(hightolow[2]);
// console.log(hightolow[3]);
// console.log(hightolow[4]);

//******************************************************************************************************************** */

//find method

// const array = ["vrush","cat","dog"];

// function islength(string){
//     return string.length === 5;
// }

// const result = array.find(islength);
// console.log(result);

//using arrow function

// const result = array.find((string) => string.length ===3);
// console.log(result);


// const users = [
//     {userId : 1 , userName : "Vrushali"},
//     {userId : 2 , userName : "Anushka"},
//     {userId : 3 , userName : "Aditya"},
//     {userId : 4 , userName : "Atharv"},
//     {userId : 5 , userName : "Prajyot"}
// ];

// const result = users.find((user) => user.userId === 3);
// console.log(result);


//***************************************************************************************************************** */

// every method
//takes callback function as input
//callback returns boolean
//every also returns boolean

//aim: check if every element in an array is even

// const array = [2,4,6,8,13,14];

// const even = array.every((number) => number % 2 === 0);
// console.log(even); 


//check if the price of every product is <30000
// const products = [
//     {productId : 1 , product_name : "Laptop", price : 20000},
//     {productId : 2 , product_name : "TV", price : 10000},
//     {productId : 3 , product_name : "Mobile", price : 15000},
//     {productId : 4 , product_name : "Headphones", price : 2000},
//     {productId : 5 , product_name : "Speaker", price : 3000},
// ]

// const result = products.every((product) => product.price<3000);
// console.log(result);


//*********************************************************************************************************** */

//some method

//checks if atleast one element is there which satisfies the condition

// const numbers = [3,9,33,5,78];

// const result = numbers.some((number) => number % 2 == 0);
// console.log(result);


const products = [
    {productId : 1 , product_name : "Laptop", price : 25000},
    {productId : 2 , product_name : "TV", price : 10000},
    {productId : 3 , product_name : "Mobile", price : 15000},
    {productId : 4 , product_name : "Headphones", price : 2000},
    {productId : 5 , product_name : "Speaker", price : 3000},
]

// const result = products.some((product) => product.price > 100000);
// console.log(result);

//******************************************************************************************************************** */

//fill method 
//value,start,end


// const myArray = new Array(10).fill(0);
// console.log(myArray);

// const array = [1,2,3,4,5,6,7,8];
// const result = array.fill(0,2,7);
// console.log(result);

//******************************************************************************************************************* */

//splice method
//used when we want to delete from array or insert into an array
//start,insert,delete

const array = ['item1','item2','item3'];
//delete item
// array.splice(1,1);

//insert item

array.splice(1,0,'Vrushali')
console.log(array);

//****************************************************************************************************************** */

//iterables - on which we can apply loops
//array and strings are iterable
//objects are not iterable

//array like objects
//those who have length property 
//and those we can access by index e.g. string



 