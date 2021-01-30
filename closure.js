// closure.

// what is closure? 


function sum(){
    var numOne = 10;
    return function(){
        var numTwo = 20;
        return numOne + numTwo;
    }
}

let func = sum();

console.dir(func);