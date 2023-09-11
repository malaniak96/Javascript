//todo factory function
//returns an object --повертає обєкт
//шаблонізуємо обєкт через функцію

function userFactoryFunction (id, name) {
    return {id, name};
}

let user = userFactoryFunction(1, 'vasya')
console.log(user);


//todo fuction Conctructor
//syntax constructor function
//this = той обєкт
// needed so it doesnt have to be described everytime
//шаблон

function User (id, name) {
    this.id = id;
    this.name = name;
    this.greeting = function (){
        console.log(`hello my name is ${this.name}`);
    }
}

let user2 = new User (1, 'olya');
console.log(user2);
user2.greeting();

let user3 = new User (2, 'katya');
console.log(user3);
user3.greeting();



//example 2
function Customer (id, name, skills, wife) {
    let {name: nameOfWife} = wife;
    this.id = id;
    this.name = name;
    this.skills = skills;
    this.wifeName = nameOfWife;
}

let customer2 = new Customer (111, 'olga', ['java', 'js', 'html'], {name:'anna'});
console.log(customer2);

let users = [
    new User(1, 'olga'),
    new User(1, 'jim'),
    new User(1, 'loren'),
    new User(1, 'jack'),
];

//
function User2 (id, name, age) {
    this.id = id;
    this.name= name;
    this.age = age;
    this.greeting = function (message) {
       return `${message} - my name is ${this.name} and my age is ${this.age}`;
    }
}

let useR1 = new User2 (111, 'kokos', 32);
let useR2 = new User2 (112, 'abrikos', 23);
console.log(useR1.greeting('hello!!'));
console.log(useR2.greeting('hey!!!'));


//another way
let useR3 = {
    name: 'ananas',
    age: 28,
};
console.log(useR1.greeting.call(useR3, 'hi!'));
console.log(useR1.greeting.apply(useR3, ['hi!']));
//call, apply підміняє this

// apply, call, bind потрібно для того щоб один обєкт міг відпрацювати другий

//bind робить копію функціі
let greeting = useR1.greeting.bind(useR3);
console.log(greeting);
console.log(greeting('assa', 'addf00', 'dsfaf', 'ooo'));


//todo

let userS= [
    {name: 'petya', age: 31, status: false},
    {name: 'anna', age: 28, status: true},
    { name: 'max', age: 26, status: false},
    {name: 'olya', age: 18, status: true},
    {name: 'hrystia', age: 17, status: false},
    { name: 'petya', age: 31, status: false},
    { name: 'petya', age: 31, status: false},
    { name: 'anna', age: 28, status: true},
    {name: 'max', age: 26, status: false},
    { name: 'olya', age: 18, status: true},
    { name: 'hrystia', age: 17, status: false},
];

console.log(typeof userS);
console.log(Array.isArray(userS));

//прототив після якого будуть працювати прінти
//прінт довільна назва
Array.prototype.print = function (){
    for (const item of this) {
        console.log(item);
    }
}
userS.print();



let numbers = [11, 22, 33, 44, 55, 66];
numbers.print();


//print allows to expand classes
//array is class
//function constructor під капотом


//todo Function Consctructor Car
//new = виділяємо нову комірку для нового обєкта

function Car(model,power){
    this.model = model;
    this.power = power;
}

//if you cannot access your function
Car.prototype.intro = function () {
    console.log(`model - ${this.model}, power - ${this.power}`);
}
let car = new Car('legacy', 164);
let car2 = new Car('jetta', 190);
car.intro();
car2.intro();




//todo CLASSES
//syntax
//method не виходить з класу
//ctrl + a : побудується конструктор
//class зараз буде шаблон - обгортка для конструктора - функція конструктор
class Person {
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
    greeting(){
        console.log(`hello my name is ${this.name}`);
    }

}

let person = new Person(111, 'kokos');
console.log(person);
person.greeting();

//обєкт можна створити через певний клас

//todo customer наслідується від Person
class Customers extends Person {
    constructor(id, name, products) {
        super(id, name);
        this.products = products;
    }
}

let k = new Customers(123, 'asd', []);
console.log(k);





function User (id, name){
    this.id = id;
    this.name = name;
}

function Customer(id, name, products) {
    User.call(this, id, name);
    this.products = products;
}