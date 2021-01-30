// function Person(name,age){
//     let person = Object.create(Person.prototype);

//     // Variable
//     person.name = name;
//     person.age = age;

//     // Method
//     // person.sleep = personMethods.sleep;
//     // person.eat = personMethods.eat;
//     // person.play = personMethods.play;

//     return person;
// }

// Person.prototype = {
//     eat(){
//         console.log('I eating....');
//         return 'Eating...';
//     },
//     sleep(){
//         console.log('Sleeping....');
//         return 'Sleeping...';
//     },
//     play(){
//         console.log('Playing....');
//         return 'Playing...'
//     },
//     hay(){
//         console.log('Hello! ',this.name);
//     }
// }

// console.dir(Person);

// let personOne = Person('Md Tazri',17);
// let personTwo = Person('Pentm Focasa','Unknow');

// console.log(personOne);
// console.log(personTwo);

// personOne.play();
// personOne.eat();
// personOne.sleep();
// personOne.hay()

// console.dir(personOne);


// animal class
// function Animal(name,age){
//     this.name = name;
//     this.age = age;
// }

// Animal.prototype = {
//     walking(){
//         console.log('Walking....');
//         return 'Walking...';
//     },
//     swiming(){
//         console.log('Swimming....');
//         return 'Swimming.....';
//     },
//     sayHello(){
//         console.log('Hey ',this.name);
//     },
//     sayAge(){
//         console.log('Age : ',this.age);
//     }
// }

// let animalOne = new Animal('Fish',34);
// let animalTwo = new Animal('Tiger',39);

// animalOne.swiming();
// animalTwo.sayAge();
// animalTwo.sayHello();


// Create person constructor by class keyword

class Person{
    constructor(name,age){
        this.name  = name;
        this.age = age;
    }
    eat(){
        console.log('Eating.....');
        return 'Eating....';
    }
    sleep(){
        console.log('Sleeping....');
        return 'Sleeping...'
    }
    walking(){
        console.log('Walking.....');
        return 'Walking....';
    }
    hey(){
        console.log('Hey!.. ',this.name);
    }
    whatAge(){
        console.log('Age : ',this.age);
    }
}

let personOne = new Person('Md Tazri',17);
console.log(personOne);
console.log(personOne.name);
console.log(personOne.age);
personOne.eat();
personOne.sleep();
personOne.hey();
personOne.walking();
personOne.hey();
personOne.whatAge();