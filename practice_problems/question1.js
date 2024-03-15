//1) How do you reverse a given string in place? (solution)
let s1 = "Vrushali"
// let newstring = "";
// for(let i=s1.length-1;i>=0;i--){
//     newstring += s1[i];
// }

// console.log(newstring);


//converting string into an array

let arr = s1.split('');

let i = 0;
let j = arr.length-1;

while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
s1 = arr.toString()
s1 = s1.replaceAll("," ,"");
console.log(s1);







