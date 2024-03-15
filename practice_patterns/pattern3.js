let alphabet = "ABCDE";

let pattern= "";

for (let i = 0; i<alphabet.length; i++) {
    for (let j = 0; j <=i; j++) {
        pattern += alphabet[i] + " ";
    }
  pattern += "\n";

}
console.log(pattern);

// A
// B B
// C C C
// D D D D
// E E E E E
