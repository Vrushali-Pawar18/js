// 2)How do you print duplicate characters from a string? (solution)
 let s1 = "banana";
 const s2 = new Set();

 for(let i=0;i<s1.length;i++){
    for(let j =1;j<s1.length;j++){
        if(s1[i] === s1[j]){
            s2.add(s1[i]);
        }
    }

 }
 console.log(s2);