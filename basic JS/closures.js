//closures = the function that returns function
//the returning function returns with the local memory of its lexical scope

function func(){

    let count = 0;
    return function(){
        if(count<1){
            console.log("Heyy... You called me");
            count++;
        }
        else{
            console.log("You already called me once");
        }
    }
}

const myfunc = func();
myfunc();
myfunc();
myfunc();