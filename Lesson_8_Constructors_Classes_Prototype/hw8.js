//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users= [];

users.push(new User(13, 'olya', 'malaniak', 'malaniak@gmail.com','0672341296'));
users.push(new User(244, 'katya', 'symonenko', 'kateryna23@gmail.com','0931252798'));
users.push(new User(42, 'myhail', 'tyshchenko', 'mishadro@gmail.com','0674561863'));
users.push(new User(464, 'alona', 'kot', 'kot123@gmail.com','0675689845'));
users.push(new User(35, 'anna', 'kondrat', 'anna.kondrat90@gmail.com','0979779777'));
users.push(new User(356, 'khrystyna', 'roginska', 'rog.1996@gmail.com','0978028888'));
users.push(new User(735, 'oleg', 'smolen', 'smolen@gmail.com','0936665656'));
users.push(new User(83, 'viktor', 'yachniv', 'viktor.yachniv-98@gmail.com','0631254563'));
users.push(new User(93, 'sergiy', 'vysochanskiy', 'sergiyUA@gmail.com','0983633366'));
users.push(new User(150, 'myroslav', 'sukhanych', 'sukhanych-myroslav@gmail.com','0978086688'));

console.log(users);


// - Взяти масив з User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterArray = users.filter (value => value.id % 2 === 0);
console.log(filterArray);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortArray = users.sort ((id1, id2) => {
    return id1.id - id2.id;
    });
console.log(sortArray);



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients= [];
clients.push(new Client(13, 'olya', 'malaniak', 'malaniak@gmail.com','0672341296', ['household items']));
clients.push(new Client(244, 'katya', 'symonenko', 'kateryna23@gmail.com','0931252798', ['young boys clothing', 'young girls clothing', 'youth clothing']));
clients.push(new Client(42, 'myhail', 'tyshchenko', 'mishadro@gmail.com','0674561863', ['home decor', 'garden decor']));
clients.push(new Client(464, 'alona', 'kot', 'kot123@gmail.com','0675689845', ['men shoes', 'women shoes', 'children shoes', 'youth shoes']));
clients.push(new Client(35, 'anna', 'kondrat', 'anna.kondrat90@gmail.com','0979779777', ['TVs', 'phones', 'tablets', 'video games', 'play stations', 'movies']));
clients.push(new Client(356, 'khrystyna', 'roginska', 'rog.1996@gmail.com','0978028888', ['kitchen appliances', 'bathroom appliances']));
clients.push(new Client(735, 'oleg', 'smolen', 'smolen@gmail.com','0936665656', ['kitchen furniture', 'bathroom furniture', 'bedroom furniture','living room furniture']));
clients.push(new Client(83, 'viktor', 'yachniv', 'viktor.yachniv-98@gmail.com','0631254563', ['fishing gear', 'fishing appliances']));
clients.push(new Client(93, 'sergiy', 'vysochanskiy', 'sergiyUA@gmail.com','0983633366', ['children toys']));
clients.push(new Client(150, 'myroslav', 'sukhanych', 'sukhanych-myroslav@gmail.com','0978086688', ['sterling silver jewelry', 'gold jewelry', 'fine jewelry', 'women accessories']));

console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClientArray = clients.sort((s1, s2) => s1.order.length - s2.order.length);
console.log(sortClientArray);

const data = [
    { name: "John", hobbies: ["aa", "bbb"] },
    { name: "Jane", hobbies: ["sdsf", "Sinsdfginsfdsfg", "Draasfsdwing"] },
    { name: "Bob", hobbies: ["ggggg"] },
    { name: "Alice", hobbies: [] }
];

// define sort method here
data.sort((a, b) => a.hobbies.length - b.hobbies.length);

console.log(data);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, manufacturer, year, maxSpeed, enginePower ){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.enginePower = enginePower;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, maxSpeed: ${this.maxSpeed}, enginePower: ${this.enginePower}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`${this.maxSpeed}`);
    };
    this.changeYear = function (newYear) {
        this.year = newYear;
        console.log(`${this.year}`);
    };
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`Driver: ${this.driver.driverName}, Driving Experience:${this.driver.drivingExperience} `);
    };
}
let driver = {driverName: 'Petro Sheremeta', drivingExperience: 10 };
let car = new Car('GLA', 'mercedes-benz', '2021', 205, '221 horsepower');
car.drive();
car.increaseMaxSpeed(20);
car.addDriver(driver);
car.info();
console.log(car);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, manufacturer, year, maxSpeed, enginePower ){
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.enginePower = enginePower;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info () {
        console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, maxSpeed: ${this.maxSpeed}, enginePower: ${this.enginePower}`);
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`${this.maxSpeed}`);
    };
    changeYear  (newYear) {
        this.year = newYear;
        console.log(`${this.year}`);
    };
    addDriver (driver) {
        this.driver = driver;
        console.log(`Driver: ${this.driver.driverName}, Driving Experience:${this.driver.drivingExperience} `);
    };
}

let driver2 = {driverName: 'Petro Sheremeta', drivingExperience: 10 };
let car2 = new Car2('GLA', 'mercedes-benz', '2021', 205, '221 horsepower');
car2.drive();
car2.increaseMaxSpeed(20);
car2.addDriver(driver2);
console.log(car);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Докудатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбе


class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

class Prince {
    constructor(name, age, shoeFound) {
        this.name = name;
        this.age = age;
        this.shoeFound = shoeFound;
    }
}

let cinderellas = [];
cinderellas.push(new Cinderella ('jessica', 20, 5));
cinderellas.push(new Cinderella ('merciella', 21, 6));
cinderellas.push(new Cinderella ('ariel', 22, 7));
cinderellas.push(new Cinderella ('lowella', 24, 4.5));
cinderellas.push(new Cinderella ('helga', 17, 4));
cinderellas.push(new Cinderella ('julieta', 19, 6));
cinderellas.push(new Cinderella ('olivia', 18, 7.5));
cinderellas.push(new Cinderella ('jennifer', 21, 5.5));
cinderellas.push(new Cinderella ('kate', 23, 8));


let prince = new Prince('james', 20, 4);
for (const cinderella of cinderellas) {
    if (cinderella.shoeSize === prince.shoeFound){
        console.log(cinderella);
    }
}

let findCinderella = cinderellas.find(value => value.shoeSize === prince.shoeFound);
console.log(findCinderella)

//ANOTHER WAY TO ADD AN OBJECT TO ARRAY using new
let cinderella1 = [
    new Cinderella('jessica', 20, 5),
    new Cinderella('merciella', 21, 6),
];
console.log(cinderella1);















