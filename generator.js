// function *generator(){
//     yield 3;
//     yield 3;
//     yield 5;
//     yield 54;
//     yield 40;
//     return 'I am finished';
//     yield 43;
// }


// let iterator = generator();

// console.log(iterator);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// generator syntax

// function *name(){}
// function* name(){}
// function * name(){}
// let name = function*(){}
// obj = {*name(){}}
// classs{*name(){}}

// Create object iterable.

// let objectOne = {
//     name : 'Tazri',
//     age : 17,
//     dateOfBirth : '2feb2003'
// }

// Object.prototype[Symbol.iterator] = function(){
//     let entries = Object.entries(this);
//     let count = entries.length;
//     let index = 0;
//     return{
//         next(){
//             if(count > 0){
//                 let result = {
//                     value : entries[index][1],
//                     done : false
//                 }
//                 count--;
//                 index++;
//                 return result;
//             }
//             return {
//                 value : undefined,
//                 done : true
//             }
//         }
//     }
// }

// for(let element of objectOne){
//     console.log(element);
// }

// console.log([...objectOne])

// lets do it with generator
// let objectOne = {
//     name : 'Tazri',
//     age : 17,
//     dateOfBirth : '10feb2003'
// }

// function *generator(object){
//     let entries = Object.entries(object);
//     for(let element of entries){
//         yield element[1];
//     }
// }

// let objectIterator = generator(objectOne);

// for( element of objectIterator){
//     console.log(element);
// }

// call it different way
// console.log(objectIterator.next());
// console.log(objectIterator.next());
// console.log(objectIterator.next());
// console.log(objectIterator.next());
// console.log(objectIterator.next());
// console.log(objectIterator.next());

// lets create range function with generator function;

// function *range(start,end,step){
//     let current = start;
//     while(current <= end){
//         yield current;
//         current+= step;
//     }
// }


// let rangeOneToThirteen = range(1,30,5);

// for(let number of rangeOneToThirteen){
//     console.log(number);
// }

// for(let element of range(0,100,10)){
//     console.log(element);
// }

// console.log([...range(1,20,2)])

// function * generator(numberOne,numberTwo){
//     let k = yield numberOne + numberTwo;
//     let m = yield numberOne + numberTwo + k;

//     return numberOne + numberTwo + k + m;
// }

// let gen = generator(5,5);

// console.log(gen);
// console.log(gen.next());
// console.log('It should be return 110',gen.next(100));
// console.log('it should be return 110 let\'s go',gen.next(' let\'s go'));

// async generator function

function takeOrder(customer){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Take order for customer ${customer}`);
        },1000);
    })
}

function processOrder(customer){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Processed complate for order ${customer}`);
        },3000)
    })
}

function orderComplate(customer){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`Order complate for customer ${customer}`);
        },1000);
    })
}

async function * generator(customer){
    yield await takeOrder(customer);
    yield await processOrder(customer);
    yield await orderComplate(customer);
}


let gen = generator('Focasa');

let promises = [gen.next(),gen.next(),gen.next()];

(async function(){
    for await(let p of promises){
        console.log(p);
    }
})()