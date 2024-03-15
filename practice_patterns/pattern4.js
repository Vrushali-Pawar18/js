const n = 4;

let pattern = "";

for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) { 
    if(i === j){
        pattern += "1 ";
    }else{
        pattern += "0 ";
    }
  }
  pattern += "\n";
}
// printing the string
console.log(pattern);


// 1 0 0 0 
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1