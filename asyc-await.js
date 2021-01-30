let hasMetting = false;
let metting = new Promise((resolve,reject)=>{
    if(!hasMetting){
        let mettingDetails = {
            name : 'About Green House',
            location  : 'Bangladesh',
            time : '10:00 pm'
        }
        resolve(mettingDetails);
    }
    reject(new Error(' Already metting fixed'));
})

async function addToCalander(mettingData){
    return `${mettingData.name} is started in ${mettingData.location} at ${mettingData.time}`
}

async function myMetting(){
    let data = await metting;
    let str = await addToCalander(data);
    return str;
}

let itPromise = myMetting();

itPromise
    .then(res=>{
        console.log(res)
    })