// What is hosting in javascript

let name = 'Md Tazri';
let nameOne = 'Pentm Focasa';

function sayName(){
    console.log(name)
    if(!name){
        let name = nameOne;
    }
    return name;
}

console.log('Name is : ',sayName());