// There are 4 kind of this.

// Implicit Binding
// Explicit Binding
// New Binding
// Window Binding


// Implicit Binding

let person = {
    firstName : 'Pentm',
    lastName : 'Focasa',
    fullName : function(){
        return this.firstName + ' ' + this.lastName;
    },
    point(score){
        return `${this.lastName} got ${score}`;
    }
}

console.log(person.fullName())

// Explicit Binding
// There are three way to explicit binding.
// Call()
// Apply();
// Bind();

// Call;
let personOne = {
    firstName : 'Md',
    lastName : 'Tazri'
}

let fullName = person.fullName.call(personOne);
console.log(fullName);

let personOneScore = person.point.call(personOne,30);
console.log(personOneScore);

// Apply
// apply like call but it get argument like a array.
let score = person.point.apply(personOne,[10009]);
console.log(score);

// Bind like call just little bit differance. This differance is it can not return value it just return a function which call we find the real value;
let higestScore = person.point.bind(personOne,999000);
console.log('HigestScore = ',higestScore);
console.log('HigestScore() = ',higestScore());

// New Binding
// New binding use for create a object

function CreatePerson(name,age){
    this.name = name;
    this.age = age;
}

CreatePerson.prototype = {
    walking(){
        console.log('Walking....');
        return 'Walking...';
    },
    sleeping(){
        console.log('Sleeping....');
        return 'Sleeping...'
    }
}

let personTwo = new CreatePerson('Unknow',34);
console.log(personTwo);
personTwo.sleeping();
personTwo.walking();

// Window Binding 
// If no binding work so this work with window. If it inside node js so it work global object.
console.log(this); // It return global or window object.
console.log(this.name);
// this.name undefined because no name property inside the global object or window object.
