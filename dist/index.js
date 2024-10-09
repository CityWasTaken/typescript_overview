"use strict";
// const city = {
//     name: 'City',
//     age: 27
// };
// function Person(userName, userAge, address, phone) {
//     this.name = userName;
//     this.age = userAge;
//     this.address = address;
//     this.phone = phone;
// }
// Person.prototype.printBirthday = function() {
//     console.log(`${this.name} is ${this.age} years OLD!`);
// }
class Person {
    constructor(name, age, address, phone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    printBirthday() {
        console.log(`${this.name} is ${this.age} years OLD!`);
    }
}
const city = new Person('City', 27, '123 Code Rt', '999-999-9999');
const bob = new Person('Bob', 99, '352 Code Pl', '777-777-7777');
// city.printBirthday();
// console.log(city);
// console.log(bob);
class Animals {
    constructor(animal, breed, sound) {
        this.animal = animal;
        this.breed = breed;
        this.sound = sound;
        this.animal = animal;
        this.breed = breed;
        this.sound = sound;
    }
    animalLanguage() {
        console.log(`The ${this.animal} goes ${this.sound}`);
    }
}
const dog = new Animals('Dog', 'K9', 'woof');
const cat = new Animals('Cat', 'Feline', 'meow');
const bird = new Animals('Bird', 'Ave', 'tweet');
const mouse = new Animals('Mouse', 'Rodant', 'squeek');
const fox = new Animals('Fox', 'K9', 'Wub-wid-bid-dum-way-do Wa-wa-way-do');
fox.animalLanguage();
