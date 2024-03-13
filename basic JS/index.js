// console.log("Hello world!!!!!!");
// let firstName = "Vrushali";

// console.log(firstName[4]);

// console.log(firstName.length);

//trim() is used to remove spaces in the string

let firstName = "Vrushali";
console.log(firstName.length);
firstName = firstName.trim();
console.log(firstName.length);


console.log(firstName.toUpperCase());

// let newString = firstName.slice(0,4);
let newString = firstName.slice(2);
console.log(newString);

//conversion of number to String

//1st way
// let string = 22;
// string = String(22);
// console.log(typeof string);

//2nd way
string = 22 + "";
console.log(typeof string);

//conversion of string to number

//1st way
string = "22";
string = Number(22);
console.log(typeof string);

//2nd way
string = + "22";
console.log(typeof string);





