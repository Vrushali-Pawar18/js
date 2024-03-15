const n = 4;

let pattern = "";
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        // console.log(i);
        // console.log(j);
        pattern += j;
        pattern += " ";
    }
  pattern += "\n";

}
console.log(pattern);   



// 1
// 1 2
// 1 2 3
// 1 2 3 4