// 7)How do you remove a given character from String?
let s1 = "Vrushhali";
let k = "h";

for (let i = 0; i < s1.length; i++) {
    if (s1[i] === k) {
        s1 = s1.substring(0, i) + s1.substring(i + 1);
        break; 
    }
}

console.log(s1);
