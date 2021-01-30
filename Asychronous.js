// function processing(){

//     console.log('Oreder Take');
//     let time = new Date().getTime;
//     while(time + 300 >= new Date().getTime){
//         console.log('Order processing....');
//     }

// }
// console.log('Now order get');
// processing();
// console.log('finish order');

// setTimeOut();

// console.log('Take Order One');
// setTimeout(()=>{
//     console.log('Order One Complate');  
// },3000)
// console.log('Take another Oreder')

// control the asychronous task

const takeOrder = (costumer,callBack)=>{
    console.log(`Take order for ${costumer}`);
    callBack(costumer);
}

const processingOrder = (costumer,callBack)=>{
    console.log(`Start proccessing for order ${costumer}`);

    setTimeout(()=>{
        console.log(`Order ${costumer} proccessed`);
        callBack(costumer);
    },3000);
}

const orderComplate = (costumer)=>{
    console.log(`Order complate ${costumer}`);
}

takeOrder('Focasa',costumer=>{
    processingOrder(costumer,costumer=>{
        orderComplate(costumer)
    })
});

