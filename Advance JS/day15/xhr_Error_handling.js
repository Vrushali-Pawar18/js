const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.onload = function(){

    if(xhr.status>=200 && xhr.status < 300){
        const response = xhr.response;
        const data = JSON.parse(response);
        // console.log(data);

        const id = data[3].id;
        // console.log(id);

        const URL2 = `${URL}/${id}`;
        console.log(URL2);
        const xhr2 = new XMLHttpRequest();
        xhr2.open("GET", URL2);
        xhr2.onload = function(){
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }

        xhr2.send();
    }
    else{
        console.log("Something went wrong");
    }
   
}
xhr.onerror = () =>{
    console.log("Internet Disconnected");
} 
xhr.send();