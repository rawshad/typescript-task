
/*
**Task**

1. Write a TypeScript program that creates a class called Student with properties name and class. Implement a constructor that initializes these properties when a Student object is created.
 
2. Write a TypeScript exercise that defines an abstract class called Animal with properties like name and an abstract method makeSound(). Create derived classes (e.g., Tiger, Lion) that extend Animal and implement the makeSound() method with the unique sound each animal makes.

3. Write a TypeScript program that creates a class called Animal with the following properties and methods:
*protected name: string
*private age: number
The class should have a constructor that accepts name and age. Implement a method:
*public introduce(): string that returns a string introducing the animal, including its name and age.
Ensure that the age property is accessible only within the class.
*/


/*
//Solution Task 1
class Student {
    name: string;
    class: string;

    constructor(name: string, className: string) {
        this.name = name;
        this.class = className;
    }
}

let student1 = new Student("Muztahid", "prep school");

console.log(`Student Name : ${student1.name}`);
console.log(`Student Name : ${student1.class}`);
*/



/*
//Solution Task 2

abstract class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeSound(): void;
}

class Tiger extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Roar`);
    }
}


class Lion extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Roar`);
    }
}


let tiger = new Tiger("Tiger");
let lion = new Lion("Lion");


tiger.makeSound();
lion.makeSound();
*/



//Solution Task 3
/*
class Animal {
    protected name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): string {
        return `This is ${this.name}. It is ${this.age} years old.`;
    }
}

let animal = new Animal("Elephant", 10);
console.log(animal.introduce());
*/
