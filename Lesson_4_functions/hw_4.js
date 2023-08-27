//DONE створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
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

//DONE створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// are of a cylinder A=2πrh+2πr2

function cylinderArea (radius, height){
    return 2 * Math.PI * radius * height + 2 * Math.PI * radius * radius;
}
let cylArea = cylinderArea (7, 10);
console.log('The area of the circle is: ', cylArea);




// TODO- створити функцію яка приймає масив та виводить кожен його елемент
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


// DONE - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writer(paragraphtext){
document.write(`<div>
                <p>${paragraphtext}</p>
                </div>`
);
}
writer('Okten School – це школа програмування, яка пропонує ефективні IT курси у Львові, Києві та онлайн по всьому світу. Якість навчання підтверджуємо відео відгуками працевлаштованих випускників та задоволених роботодавців.');
writer(`Якість навчання підтверджуємо відео відгуками працевлаштованих випускників та задоволених роботодавців. Школа заснована при IT-компанії, яка спеціалізується на розробці веб-продуктів та мобільних додатків для закордонних і вітчизняних клієнтів.`);




//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(listText){
    document.write(`<ul>
        <li>${listText}</li>
        <li>${listText}</li>
        <li>${listText}</li>
</ul>`);
}
list('The night is beautiful,So the faces of my people. The stars are beautiful, So the eyes of my people. Beautiful, also, is the sun. Beautiful, also, are the souls of my people.');


//DONE - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


function list2(listText, num){

    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${listText}</li>`);
    }
    document.write(`</ul>`);
}

list2('The night is beautiful,So the faces of my people. The stars are beautiful, So the eyes of my people. Beautiful, also, is the sun. Beautiful, also, are the souls of my people.', 3);




//DONE- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function foo (...arr){
    return  arr;
}
const k = foo( 28, 'olga', 'malaniak', true);
console.log(k);



//todo - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

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

//OR

function foo2 (id, name, age ){
    return;
}

let g = foo2( 1, 'kolya', 27);
console.log(g);


// DONE створити функцію яка повертає найменьше число з масиву
 let numberArray = [2, 1, 5, 6, 8, 10, 5];
 function minNumber(array2) {
     let min = array2[0];
     for (let i = 1; i < array2.length; i++){
        if (array2[i] < min) {
            min = array2[i];
         }
    }
     return min;
 }
console.log(minNumber(numberArray));



// DONE - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sumArray = [1, 2, 10];
function sum (array) {
    let sum = 0;

    for (let i= 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(sum(sumArray));



// DONE створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arr1 = [11, 22, 33, 44];
function swapElements(arr, i1, i2, i3) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

swapElements(arr1, 0, 1);
console.log(arr1);

// todo- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// todo Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


function exchange(sumUAH, currencyValues, exchangeCurrency) {

    for (let item of currencyValues){
            if (currency === 'USD') {
                return sumUAH / currencyValues, exchangeCurrency;
            }
    }
        }
     let b = exchange(10000, [{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
     console.log(b);