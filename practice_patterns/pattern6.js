const n = 4; 


for (let i = 1; i <= n; i++) {
    let pattern1 = "";
    for (let j = 0; j < n - i; j++) {
        pattern1 += " ";
    }
    for (let k = 1; k <= i; k++) {
        pattern1 += k;
        if (k < i) {
            pattern1 += " ";
        }
    }
    console.log(pattern1); 
}




for (let i = n - 1; i >= 1; i--) {
    let pattern2 = ""; 
    for (let j = 0; j < n - i; j++) {
        pattern2 += " ";
    }
    for (let k = 1; k <= i; k++) {
        pattern2 += k;
        if (k < i) {
            pattern2 += " ";
        }
    }
    console.log(pattern2); 
}

