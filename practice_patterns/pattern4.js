
let pattern = "";

for(let i = 0; i < 4; i++) { 
  for(let j = 0; j < 4; j++) { 
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