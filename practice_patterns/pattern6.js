const size = 4; 
for (let i = 1; i <= size; i++) {
    let row = "";

    for (let j = 0; j < size - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= i; k++) {
        row += k;
        if (k < i) {
            row += " ";
        }
    }

    console.log(row); 
}

for (let i = size - 1; i >= 1; i--) {
    let row = ""; 
    for (let j = 0; j < size - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= i; k++) {
        row += k;
        if (k < i) {
            row += " ";
        }
    }

    console.log(row); 
}