const person = {
    fname : "Vrushali",
    age : 23,
    hobbies : ["a","b","c"]
}

// console.log(person.age);
// person.gender = "female"; 
console.log(person);
// console.log(person.hobbies);

// //bracket notations
// console.log(person["fname"]);

//to iterate in objects we use:
//1) for in loop
//2) object.keys

// for(key in person){
//     console.log(person[key]);
// }

//Object.keys gives us the array of keys present in the oobject.
// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }