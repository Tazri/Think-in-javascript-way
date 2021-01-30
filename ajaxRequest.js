// track element
const getBtn = document.getElementById('get-data');
const sendBtn = document.getElementById('send-data');
const dataContainer = document.getElementById('show-data');
const getUrl = 'https://jsonplaceholder.typicode.com/todos/1'
const postUrl = 'https://jsonplaceholder.typicode.com/posts';

function sendRequset(method,url,data){
    const promise = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest(method,url);
        xhr.open(method,url);
        xhr.responseType = 'json';
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.send(data);
        xhr.onload = function(){
            if(xhr.status >= 400){
                reject(xhr.status);
            }else{
                resolve(xhr.response);
            }
        }

        xhr.onerror = function(){
            reject('Something was wrong');
        }

    })
    return promise;
}

function getData(event){
    const result = sendRequset('GET',getUrl);
    result.then(res=>{
        console.log('Get Data :');
        console.log(res);
    })
}

function sendData(event){
    let user  = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }

    const result = sendRequset('POST',postUrl,JSON.stringify(user));

    result.then(res=>{
        console.log('Send Data : ');
        console.log(res);
    })
    .catch(error=>{
        console.log(error);
    })

}

// add event lisetener on button

getBtn.addEventListener('click',getData);
sendBtn.addEventListener('click',sendData);
