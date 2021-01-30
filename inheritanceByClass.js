// Create Person Class
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log('Sleeping.....')
        return 'Sleeping....';
    }
    eat(){
        console.log('Eating.....')
        return 'Eating....'
    }
    walking(){
        console.log('Walking....');
        return 'Walking....'
    }
    play(){
        console.log('Playing....');
        return 'Playing...';
    }
    // getter setter
    get getName(){
        // Getter
        return this.name;
    }

    set setName(name){
        // Setter
        this.name = name;
    }

    set setAge(age){
        this.age = age;
    }

    // Static method
    static isEqualAge(objOne,objTwo){
        // Static method
        return objOne.age === objTwo.age;
    }

    static returnName(){
        return this.name;
    }

}

// Create Crecketer class and extends Person Class
class Crecketer extends Person{
    constructor(name,age,type,country){
        super(name,age);
        this.type = type;
        this.country = country;
    }
    play(){
        console.log(this.name + ' Playing...... Crecket');
        return 'Playing....'
    }
}

// Create Person
let personOne = new Person('Md Tazri',329);
console.log(personOne);
personOne.eat();
personOne.sleep();

// Create Crecketer
let crecketerOne = new Crecketer('Md Tazri',17,'Unknow','Bangladesh');
console.log(crecketerOne);
crecketerOne.play();
personOne.play()
crecketerOne.sleep();
crecketerOne.eat();


// Create a new person
let personTwo = new Person('Md Tazri',17);
console.log(personTwo);
console.log(personTwo.getName);
personTwo.setName = 'Pentm Focasa';
console.log(personTwo);
console.log(personTwo.getName);

console.log(personOne);
console.log(personTwo);
personOne.setAge = 17;
console.log(Person.isEqualAge(personOne,personTwo));
console.log(Person)

console.log(Person.returnName());