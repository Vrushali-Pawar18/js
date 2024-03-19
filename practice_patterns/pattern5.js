const n = 4;
let pattern = "";
for (let i = 0; i < n; i++) {
    
    //spaces
    for (let j = 0; j < n - i - 1; j++) {
        pattern += " ";  
    }

    for (let k = 0; k <= i; k++) {
        pattern += String.fromCharCode(65 + k);
        if (k < i) {
            pattern += " ";
        }
    }
    pattern += "\n";

}

console.log(pattern); 

