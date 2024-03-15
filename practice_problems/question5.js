// 5)How do you count the occurrence of a given character in a string?

let s1 = "kaAbBaAa";
let k = "a";
// let m = k.toUpperCase();
let count = 0;
for(let i=0;i<s1.length;i++){
    if(s1[i] === k.toLowerCase() || s1[i] === k.toUpperCase()){
        count++;
    }
}
console.log(count);