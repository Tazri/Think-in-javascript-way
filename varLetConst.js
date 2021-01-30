// >>> Var Let Const <<<

// What differnce between Let and  Var;

if(true){
    var varVariable = 'This is a var.';
}

console.log(varVariable);


if(true){
    let letVariable = 'This is a let.';
    console.log(letVariable);
}

// Var declare again and again

var varVariable = 'This is a var again';
console.log(varVariable);

let letVariable = 'This is a let variable.';
console.log(letVariable);

// var is function scope variable and let is scope variable;

// Const like let but little bit differnce between let and const
// const can not reassign again;

const constVariable = 'This is a const.';
console.log(constVariable);

// But we can modify the const variable.