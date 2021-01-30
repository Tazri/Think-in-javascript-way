// symbol features
let symbolOne = Symbol();
let symbolTwo = Symbol();

console.log('Symbol two equal to compear ',symbolOne == symbolTwo);
console.log('Symbol three for equal to compear : ',symbolOne === symbolTwo);
console.log('Symbol One : ',symbolOne);
console.log('Symbol Two : ',symbolTwo);

let symbolThree = Symbol('This is symbol three'); // symbol with description;
let symbolFour = Symbol('This is symbol four'); // symbol with description
console.log(symbolThree);
console.log(symbolFour);

// use symboll as a object property
let objectOne = {
    name : 'Md Tazri',
    age : 17,
    [symbolThree] : 20,
    ['This is object property'] : 'Simple'
}

console.log(objectOne);
console.log(objectOne[symbolThree]);