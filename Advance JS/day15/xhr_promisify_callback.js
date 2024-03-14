const URL = "https://jsonplaceholder.typicode.com/posts";


function sendRequest(method,URL){
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, URL);

        xhr.onload = function(){
            if(xhr.status >=200 && xhr.status<300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("something went wrong"));
            }

        }

        xhr.onerror = function(){
            reject(new Error("something went wrong"));
        }


        xhr.send();
    })
}


sendRequest("GET",URL)
.then((response) => {
    const data = JSON.parse(response);
    // console.log(data);
    const id = data[3].id;
    return id;
})
.then((id) => {
    const URL2 = `${URL}/${id}`;
    return sendRequest("GET",URL2);
})
.then((newResponse) => {
    const newdata = JSON.parse(newResponse);
    console.log(newdata);
})