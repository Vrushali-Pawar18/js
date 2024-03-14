
//promise and set timeout

function mypromise(){
    return new Promise((resolve,reject) => {
        const value = false;
      setTimeout(() => {
        if(value){
            resolve();
        }
        else{
            reject();
        }
      },2000)
    })
}

mypromise()
.then(() =>{
    console.log("resolved");
})
.catch(() => {
    console.log("rejected");
})