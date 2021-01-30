// Person constructor

function Person(name,age,color){
    this.name = name;
    this.age = age;
    this.color = color;
    this.number = 39;
}

Person.prototype = {
    walking(){
        console.log('Walking.....');
        return 'Walking...';
    },
    sleep(){
        console.log('Sleeping.....');
        return 'Sleeping...';
    },
    eat(){
        console.log('Eating......');
        return 'Eating...';
    },
    hi(){
        console.log('Hello ',this.name);
        return 'Hello ',+this.name;
    }
}

// End Person Constructor;

// Crecketer Constructor
function Crecketer(name,age,color,type,country){
    Person.call(this,name,age,color);
    this.type = type;
    this.country = country;
}

// End Crecketer Constructor;

// Inherit Person inside the Crecketer constructor;
Crecketer.prototype = Object.create(Person.prototype);
Crecketer.prototype.constructor = Crecketer;

// create person and store person array
let personOne = new Person('Pentm Focasa',10,'Dark Blue');
let personTwo = new Person('Md Tazri',17,'Green');
let personThree = new Person('KygsStone',0,'Crimson');
let personFour = new Person('Shakib',28,'Lime');

let personArray = [personOne,personTwo,personThree,personFour];

console.log(personOne);
console.dir(Person);

// personOne and Person prototype is same.


// Create Crecketer in below:
let crecketerOne = new Crecketer('Shakib',29,'Black','All Rounder','Bangladesh');
console.log(crecketerOne)
crecketerOne.sleep();
