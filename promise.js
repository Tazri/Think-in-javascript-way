// let hasMetting = false;
// let metting = new Promise((resolve,reject)=>{
//     if(!hasMetting){
//         let met = {
//             name : 'Green House',
//             location : 'Bangladesh',
//             time : '10:00 pm'
//         }
//         resolve(met);
//     }else{
//         reject(new Error('There has a metting,'));
//     }
// })

// let mettingDetails = (mettingDetails)=>{
//     let data = `${mettingDetails.name} is started in ${mettingDetails.location} at ${mettingDetails.time}`
//     return Promise.resolve(data);
// }

// metting
//     .then(mettingDetails)
//     .then(res =>{
//         console.log(res);
//     })
//     .catch(error=>{
//         console.log(error.message);
//     })

let promiseOne = Promise.resolve('This is promiseOne');
let promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('This is promiseTwo');
    },3000);
})

// promiseOne.then(res=>console.log(res));
// promiseTwo.then(res=>console.log(res));

// Promise.all
// Promise.all([promiseOne,promiseTwo])
//     .then(res=>console.log(res));

// Promise .race
// Promise.race([promiseOne,promiseTwo])
//     .then(res=> console.log(res));

// Asyc function
 
// async function returnPromise(){
//     return 'Hello World';
// }

// let func = returnPromise;
// returnPromise().then(res=>console.log(res))