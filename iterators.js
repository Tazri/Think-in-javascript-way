// let arrayOne = [2,3,2,1,2,3];

// let iterator = arrayOne[Symbol.iterator]();


// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// lets change the string iterator

// String.prototype[Symbol.iterator] = function(){
//     let count = this.length;
//     return {
//         next(){
//             return{
//                 value : count-- > 0 ? 'P' : undefined,
//                 done : count > 0 ? false : true
//             }
//         }
//     }
// }

// console.log([...'Md Tazri']);

// for(let element of 'Md Tazri'){
//     console.log(element);
// }


// let create own generator

function range(start=0,end,step=1){
    let courrentValue = start;
    return {
        [Symbol.iterator](){
            return {
                next(){
                    if(courrentValue <= end){
                        let result = {
                            done : false,
                            value : courrentValue
                        }
                        courrentValue += step;
                        return result;
                    }
                    return {
                        done : true,
                        value : undefined
                    }
                }
            }
        }
    }
}

console.log([...range(10,40,2)]);

for( let number of range(1,100,5)){
    console.log(number);
}