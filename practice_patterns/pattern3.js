let n =4; 

let pattern= "";

for (let i = 0; i<n; i++) {
    for (let j = 0; j <=i; j++) {
        pattern += String.fromCharCode(65 + i) + " ";
    }
  pattern += "\n";

}
console.log(pattern);

// A
// B B
// C C C
// D D D D
// E E E E E
