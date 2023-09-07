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







// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий







// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)








// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список








// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.






// - створити функцію яка повертає найменьше число з масиву







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





