//async function returns promise

const URL = "https://jsonplaceholder.typicode.com/posts";


async function getPosts(){
   const response =  await fetch(URL);

   if(!response.ok){
    console.log("something went wrong");
   }
   const data = await response.json();
//    console.log(data);
   return data;
}

getPosts()
     .then((mydata) => {
        console.log(mydata);
     })
     .catch(error => {
        console.log(error);
     })