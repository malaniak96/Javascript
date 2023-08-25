//todo- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// area of rectangle is A=wl
function rectangleArea(width, length) {
    return width * length;
}

let rArea = rectangleArea(6,5);

console.log('The area of the rectangle is: ', rArea);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//area of the circle is A = πr2
function circleArea (radius){
    return pi * radius * radius;
}
let pi = 3.14;
let cArea = circleArea (9);
console.log('The area of the circle is: ', cArea);

// todo- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// are of a cylinder A=2πrh+2πr2

function cylinderArea (radius, height){
    return 2 * Math.PI * radius * height + 2 * Math.PI * radius * radius;
}
let cylArea = cylinderArea (7, 10);
console.log('The area of the circle is: ', cylArea);




//todo - створити функцію яка приймає масив та виводить кожен його елемент
let schedule = [
    {title: 'scrum', dates: 'july 3 - july 10'},
    {title: 'html', dates: 'july 11 - july 28'},
    {title: 'js', dates: 'august 1 - september 8'},
    {title: 'mysql, mongoDB', dates: 'september 11 - september 22'},
    {title: 'front/react', dates: 'september 26 - november 17'},
];

function printerArray (array){
    for (const item of array){
        console.log(item);
    }
}
printerArray(schedule);




// todo - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writer(paragraphtext){
document.write(`<div>
                <p>${paragraphtext}</p>
                </div>`
);
}
writer('Okten School – це школа програмування, яка пропонує ефективні IT курси у Львові, Києві та онлайн по всьому світу. Якість навчання підтверджуємо відео відгуками працевлаштованих випускників та задоволених роботодавців.');
writer(`Якість навчання підтверджуємо відео відгуками працевлаштованих випускників та задоволених роботодавців. Школа заснована при IT-компанії, яка спеціалізується на розробці веб-продуктів та мобільних додатків для закордонних і вітчизняних клієнтів.`);




//todo - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//todo - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list(listText){
    document.write(`<ul>
        <li>${listText}</li>
        <li>${listText}</li>
        <li>${listText}</li>
</ul>`);
}
list('The night is beautiful,So the faces of my people. The stars are beautiful, So the eyes of my people. Beautiful, also, is the sun. Beautiful, also, are the souls of my people.');













// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список








// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users= [
    {name: 'petya', age: 31, status: false},
    {name: 'anna', age: 28, status: true},
    {name: 'max', age: 26, status: false},
    {name: 'olya', age: 18, status: true},
    {name: 'hrystia', age: 17, status: false},
    {name: 'petya', age: 31, status: false},
    {name: 'petya', age: 31, status: false},
    {name: 'anna', age: 28, status: true},
    {name: 'max', age: 26, status: false},
    {name: 'olya', age: 18, status: true},
    {name: 'hrystia', age: 17, status: false},
];

function user (array) {
    for (const item of array){
        console.log(item);
    }
}
user(users);



// - створити функцію яка повертає найменьше число з масиву





// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13





// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах





// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]




// todo- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// todo Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currency, currencyValue){
        return sumUAH / currencyValue;
}
let USD = exchange(1000, 'USD', 36.56);
let EURO = exchange(1000, 'EURO', 40.50);
console.log('Exchange amount: ', USD, 'USD');
console.log('Exchange amount: ', EURO, 'EURO');

