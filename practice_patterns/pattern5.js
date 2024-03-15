const size = 4;
for (let i = 0; i < size; i++) {
    let row = "";

    for (let j = 0; j < size - i - 1; j++) {
        row += " ";
    }

    for (let k = 0; k <= i; k++) {
        row += String.fromCharCode(65 + k);
        if (k < i) {
            row += " ";
        }
    }

    console.log(row); 
}
