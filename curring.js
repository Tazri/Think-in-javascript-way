// what is curring?
// curring is one kind of programming peradigms like functional programming.

// example of curring...
function multyple(numberOne){
    return function(numberTwo){
        return function(numberThree){
            return numberOne*numberTwo*numberThree;
        }
    }
}


let stepOne = multyple(10);
let stepTwo = stepOne(2);
let stepThree = stepTwo(5);
console.log('stepOne = ',stepOne);
console.log('stopTwo = ',stepTwo);
console.log('stepThree = ',stepThree);
console.log(multyple(10)(2)(5));


// example of curring usage case

// function discountTotal(price,discount){
//     return price - (price*discount);
// }

// let productOne = discountTotal(200,.1);
// let productTwo = discountTotal(3000,.1);
// console.log(productOne);
// console.log(productTwo);

// lets do it in using curring methods

// function discountTotal(discount){
//     return function(price){
//         return price -(price*discount);
//     }
// }

// let tenPercentDiscount = discountTotal(0.1);
// let fivePercentDiscount = discountTotal(0.05);

// let productOne = tenPercentDiscount(1000);
// let productTwo = fivePercentDiscount(100);
// console.log(productOne,productTwo);


// Create curring converter

// simple multiply function

function multiply(numberOne,numberTwo,numberThree){
    return numberOne*numberTwo*numberThree
}

// curring converter function

function curring(func){
    return function curried(...argument){
        if(argument.length >= func.length){
            return func.apply(this,argument);
        }else{
            return function(argumentTwo){
                return curried.apply[this,argument.concat(argumentTwo)];
            }
        }
    }
}

let curriedMultiply = curring(multiply);

console.log(curriedMultiply)
console.log(curriedMultiply(3));
console.log(curriedMultiply(5)(3));
console.log(curriedMultiply(2)(5));