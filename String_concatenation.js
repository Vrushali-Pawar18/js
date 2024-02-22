// let fname = "Vrushali";
// let lname = "Pawar";

// let fulname = fname + " " + lname;
// console.log(fulname);

// let s1name = "22";
// let s2name = "22";

// let newString1 = s1name + s2name; // adds as a string output willbe 2222
// let newString = +s1name + +s2name; // converts strings into the number and adds the number (op = 44)
// console.log(newString);


//TEMPLATE STRING

// let fname = "Vrushali";
// let age = 23;

// // let aboutMe = console.log("My name is " + fname + "and my age is " + age);
// let aboutMe = `My name is ${fname} and my age is ${age}`;
// console.log(aboutMe);

// console.log(Number.MAX_SAFE_INTEGER);

// let age  = 20;
// let vote = age>=18 ? "can vote" : "cannot vote";
// console.log(vote);

let winningNum = 40;
let userGuess = prompt("Guess the number");

if(userGuess>winningNum){
    console.log("Too high");
}
else if(userGuess < winningNum){
    console.log("Too low");
}
else{
    console.log("Trueee");
}