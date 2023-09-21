//todo ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// area of rectangle is A=wl

let rectangleArea = (w:number, l:number):number => w * l;
console.log('The area of the rectangle is: ', rectangleArea(6, 5));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
//area of the circle is A = πr ^2

let circleArea = (r:number, pi:number):number => {

    return pi * r * r;
}
console.log('The area of the circle is: ', circleArea(9, 3.141));


//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// are of a cylinder A=2πrh+2πr^2

let cylinderArea = (r:number, h:number):number => {
    let pi:number = Math.PI;
    return 2 * pi * r * h + 2 * pi * r * r;
}
console.log('The area of a cylinder is: ', cylinderArea(7, 10));


//- створити функцію яка приймає масив та виводить кожен його елемент

let scheduleJS = (arr2:string[]) => {
    for (let lesson of arr2) {
        console.log(lesson);
    }
};
scheduleJS(['lesson: js', 'dates: august 1 - september 8', 'okten school']);


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

let paragraph = (text:string) => {
    document.write(`<div><p>${text}</p></div>`);
};
paragraph('JavaScript 2023-5-2 Стрілочні функції, lesson 5, august 30, 2023');


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let recipes = (i1:string, i2:string, i3:string) => {
    document.write(`<ul>Ingredients:
           <li>${i1}</li>
           <li>${i2}</li>
           <li>${i3}</li>
           </ul>
`);
}
recipes('80g pack instant noodles, look for an Asian brand with a flavour like sesame', '2 spring onions - finely chopped, ½ head pak choi', '1 egg, 1 tsp sesame seeds, chilli sauce, to serve');


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let recipe = (steps:string, count:number) => {

    document.write(`<ul> Steps:`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${steps}</li>`);
    }
    document.write(`</ul>`);
}
recipe('STEP 1: Cook the noodles with the sachet of flavouring provided (or use stock instead of the sachet, if you have it). Add the spring onions and pak choi for the final min. STEP 2: Meanwhile, simmer the egg for 6 mins from boiling, run it under cold water to stop it cooking, then peel it. Toast the sesame seeds in a frying pan. STEP 3: Tip the noodles and greens into a deep bowl, halve the boiled egg and place on top. Sprinkle with sesame seeds, then drizzle with the sauce or sesame oil provided with the noodles, and chilli sauce, if using.', 3);


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

interface Person {
    age:number,
    name:string,
    lastname:string,
    status: boolean,
}

let persons: Person [] = [
    {age: 28, name: 'olga', lastname: 'malaniak', status: true},
    {age: 28, name: 'katya', lastname: 'voronina', status: false},
];

let looper = (arrayArray: Person[]) => {
    for (let person of arrayArray) {
        document.write(
            `<ul>
                <li>age: ${person.age}</li>
                <li>name: ${person.name}</li>
                <li>last name: ${person.lastname}</li>
                <li>status: ${person.status}</li>
            </ul>`
        );
    }
}
looper(persons);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
interface USER{
    id:number,
    name:string,
    age:number,
}

let users: USER[] = [
    {id: 1, name: 'vasya', age: 40},
    {id: 2, name: 'olya', age: 28},
    {id: 3, name: 'katya', age: 15},
];
let div = (arr:USER[]) => {
    for (let user of arr) {
        document.write(
            `<div>
                id: ${user.id}
                name: ${user.name}
                age: ${user.age}
            </div>`
        );
    }
}
div(users);


//- створити функцію яка повертає найменьше число з масиву
let arr:number[] = [2, 7, 5, 9, 1, 5, 6, 71, 0.01, 25, 0.2];
let minNumber = (array2:number[]) => {
    let min = array2[0];
    for (let number of array2) {
        if (min > number) {
            min = number;
        }
    }
    return min;
}
console.log(minNumber(arr));


//створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arrSum:number[] = [1, 2, 10];
let sum = (arraySum:number[]) => {
    let sum = 0;
    for (let i = 0; i < arraySum.length; i++) {
        sum += arraySum[i];
    }
    return sum;
}

console.log(sum(arrSum));

//OR//
let sumArray:number[] = [1, 2, 10];
let sumNumber = (arrr:number[]) => {
    let sum1 = 0;
    for (let x of arrr) {
        sum1 += x;
    }
    return sum1;
}

console.log(sumNumber(sumArray));


//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap: number[] = [11, 22, 33, 44];
let swapNumbers = (arr:number[], index1:number, index2:number) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

swapNumbers(swap, 0, 1);
console.log(swap);


//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250



let exchange = (sumUAH:number, currencyValues:any, exchangeCurrency:string):any => {
    for (let curr of currencyValues) {
        if (curr.currency === exchangeCurrency) {
            return sumUAH / curr.value;
        }
    }

}
let value = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');
console.log(value);