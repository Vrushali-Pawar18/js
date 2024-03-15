// 6)How to remove the duplicate character from String?

let s1 = "Aakash";
let s2 = "";

for (let i = 0; i < s1.length; i++) {
    let char = s1[i];
    if (s2.indexOf(char) === -1) {
        s2 += char;
    }
}

console.log(s2);


//using set

// const s2 = new Set();

// for(let i=0;i<s1.length;i++){
//     s2.add(s1[i].toUpperCase());
// }
// console.log(s2);
