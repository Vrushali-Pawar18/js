// Input: tomorrow
// Output: t$m$$rr$$$w

const mystring = "tomorrowosstto";
let newstring ="";

let ocount = 1;
for(let i=0;i<mystring.length;i++){
    if(mystring[i] == "o"){
        // console.log(mystring[i]);
        // console.log(ocount);
        // console.log("***********");
        for(let j=1;j<=ocount;j++){
            // console.log("$");
            newstring += "$";  
        }
        ocount++;
    }else{
        newstring += mystring[i];
    }

}
console.log(newstring);
