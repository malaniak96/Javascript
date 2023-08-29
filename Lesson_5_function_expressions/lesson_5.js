let users= [
    {id: 1, name: 'petya', age: 31, status: false},
    {id: 1, name: 'anna', age: 28, status: true},
    {id: 1, name: 'max', age: 26, status: false},
    {id: 1, name: 'olya', age: 18, status: true},
    {id: 1, name: 'hrystia', age: 17, status: false},
    {id: 1, name: 'petya', age: 31, status: false},
    {id: 1, name: 'petya', age: 31, status: false},
    {id: 1, name: 'anna', age: 28, status: true},
    {id: 1, name: 'max', age: 26, status: false},
    {id: 1, name: 'olya', age: 18, status: true},
    {id: 1, name: 'hrystia', age: 17, status: false},
];

//todo Function expression
//adding a variable/змінна якщо потрібно перевикористовувати
//функцію. якщо без змінноі тодді модна хіба один раз використати

//декларована функція - це функція яка має назву
//example let aaa = function (array)
//не декларована функція - це функція яка немає назви
let aaa = function (array) {
    console.log(arguments);
    if (array.length){
        for (const item of array){
            console.log(item);
        }
    }
}
aaa(users);

//todo   " => functions "
//=> let foo = () => {}
// this  and  arguments are not available
// has => instead of function

let foo = (array) => {
    if (array.length){
        for (const item of array){
            console.log(item);
        }
    }
}
foo(users);


let foo3 = (num1, num2) => {
    let pi = Math.PI;
    return num1 + num2 + pi;
}

console.log(foo3(1,3));
console.log(foo3(2,1));
console.log(foo3(7,6));


// todo return є за замовчуванням/
let foo4 = (num1, num2) => num1 + num2;

console.log(foo4(5,3));






//todo Call back function передається аргументом
//function 2 sits in cb = call back , calling back to function 1
// call back доповнює функцію іншею функцією

//function 1
let foo5 = (arr, cb) => {
    const newArr = [];
    for (const user of arr){
        if (cb(user)){
           newArr.push(user);
        }
    }
    return newArr;
}

//function 2
const conditionFoo1 = (user) => {
    return user.age > 30;
}

const conditionFoo2 = (user) => {
    return user.name.length > 4;
}

const result1 = foo5(users, conditionFoo1);
console.log(result1);
const result2 = foo5(users, conditionFoo2);
console.log(result2);



//todo Function can lay in object
//METHOD
const user = {
    id: 1,
    name: 'max',
    age: 31,
    sayHello: (name) => {
        console.log(`Hello! ${name}`);
    },
    sayHello2: function (name){
        console.log(`Hello!! ${name}`);
}
}
user.sayHello('Artem');
user.sayHello2('max');



//todo "THIS"
//у стрілочної функції 'this' нема
//through 'this' i can refer to user
//ну тобто в тебе є обєкт а всередині функція яка слідкує тільки за цим обєктом
// this  це посилання на обєкт вживаючи ключі this.name
const user3 = {
    id: 1,
    name: 'max',
    age: 31,
    sayHello1: (name) => {
        console.log(`Hello! ${name} ${this.name}`);
    }
}
user3.sayHello1('Olga');

