//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//area of rectangle is A=wl

let rectangleArea = (w,l) => w * l;
console.log(rectangleArea(3,7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//area of the circle is A = πr ^2
let circleArea = (r) => Math.PI * r * r;
console.log(circleArea(9));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// are of a cylinder A=2πrh+2πr^2

let cylinderArea = (r,h) => 2 * Math.PI * r * h + 2 * Math.PI * r * r;
console.log(cylinderArea(7,1))



// - створити функцію яка приймає масив та виводить кожен його елемент

let itLanguages = (languages) => {
    for (const language of languages) {
        console.log(language);
    }
}
itLanguages(['html','css', 'java', 'js', 'node.js']);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph = (paragraphText) => {
    document.write(`<p>${paragraphText}</p>`)
}
paragraph('Olga Malaniak will become a new JS specialist!!!!!!!!!!!!!!!!!!!!');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


let list = (text) => {
    for (let i = 0; i < 3; i++) {
       document.write(`<ul>
            <li>${text}</li>
</ul>`);}
}
list('lorem ipsum');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let list2 = (text2, count) => {

    document.write(`<ul>lorem:`);
    for (let i = 0; i < count; i++) {
        document.write(` <li>${text2}</li>`);
    }
    document.write(`</ul>`);
}
list2('lorem ipsum lorem ipsum', 3);





// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let schedule = [
    {title: 'scrum', dates: 10, status: true},
    {title: 'html', dates: 28, status: false},
    {title: 'js', dates: 50, status: false},
    {title: 'mysql, mongoDB', dates: 100, status: true},
    {title: 'front/react', dates: 80, status: true},
    ];

let theList = (array) =>{
    for (const arrayElement of array) {
        document.write(`<ul>
                        <li>title: ${arrayElement.title}</li>
                        <li>dates: ${arrayElement.dates}</li>
                        <li>status: ${arrayElement.status}</li>
                        </ul>`);

    }
}
theList(schedule);




// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 40},
    {id: 2, name: 'olya', age: 28},
    {id: 3, name: 'katya', age: 15},
];
 let people = (array2) => {
     for (const person of array2) {
         document.write(`<div>
                        id: ${person.id}
                        name: ${person.name}
                        age: ${person.age}
                        </div>`)
     }
 }
people(users);


// - створити функцію яка повертає найменьше число з масиву
let manyNumbers = [2, 5, 0.1, 100, 20, 60, 0.02, 8, 50];

let numbers = (array) => {
    let minNumber = array[0];

    for (const numElement of array) {
    if (minNumber > numElement){
        minNumber = numElement;
    }
    }
    return minNumber;
}
console.log(numbers(manyNumbers));





// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arr = [1, 2, 10];
let sumArr = (arr) => {
    let sum = 0;
    for (const numbers of arr) {
        sum += numbers;
    }
    return sum;
}
console.log(sumArr(arr));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = [11, 22, 33, 44];
let swapNumbers = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
swapNumbers(swap, 0, 1);
console.log(swap);




// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const curr of currencyValues) {
        if (curr.currency === exchangeCurrency) {
            return sumUAH / curr.value;
        }
    }
}
console.log(exchange(10000, [{currency:'USD',value:40}, {currency:'EUR',value:42}], 'USD'));





