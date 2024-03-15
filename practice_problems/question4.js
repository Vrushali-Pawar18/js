// 4)How do you count a number of vowels in a given string?

let s1 = "eiknuoafhi";

let count = 0;
for(let i=0;i<s1.length;i++){
    if(s1[i] === "A" || s1[i] === "E" || s1[i] === "I" || s1[i] === "O" || s1[i] === "U" || 
            s1[i] === "a" || s1[i] === "e" || s1[i] === "i" || s1[i] === "o" || s1[i] === "u" ){
                count++;
            }
}
console.log(count);