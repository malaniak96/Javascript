// HW Part 1 Масиви та об'єкти:

//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let cars = [
    "bmw",
    "audi",
    "mercedes",
    "lexus",
    "infinity",
    "skoda",
    "kia",
    "jeep",
    "dodge",
    "honda"
];
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);
console.log(cars[6]);
console.log(cars[7]);
console.log(cars[8]);
console.log(cars[9]);


//Створити 3 об'єкти які описують книги.
let book1 = {
    title: 'The Great Gatsby',
    pagecount: 340,
    genre: 'tragedy'
}
console.log(book1);

let book2 = {
    title: 'The Bible',
    pagecount: 1200,
    genre: 'religion'
}
console.log(book2);

let book3 = {
    title: 'Happy Place',
    pagecount: 400,
    genre: 'romance'
}
console.log(book3);


//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
//another way to add authors as array into object
//  let book3 = {
//     title: 'Happy Place',
//     pagecount: 400,
//     genre: 'romance'
//     authors: [
//          {name:'antonio', age:32},
//          {name:'gary', age:40}   ]
// };
// console.log(book3);

book1['authors'] = [{name: 'F. Scott Fitzgerald', age: 127}];
console.log(book1);

book2['authors'] = [{name: 'Moses', age: 1000}, {name: 'Peter the apostle', age: 1000}];
console.log(book2);

book3['authors'] = [{name: 'Emily Henry', age: 42}];
console.log(book3);


//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {name:'olya', username:'olyausa23', password: 'usalife2023'},
    {name:'roman', username:'r.k.poland', password: 'polandrk96@'},
    {name:'galya', username:'galynadro', password: 25456},
    {name:'viktor', username:'viktor.zal96', password: 'msvz75458'},
    {name:'katya', username:'katerynavelyka', password: 'graf1313@$'},
    {name:'tania', username:'tania.vysochanska', password:102030405},
    {name:'sofia', username:'sofia.belchak', password: 1544},
    {name:'marta', username:'martaluch22', password: 'lvivcity5656@@'},
    {name:'lesya', username:'lesyavasylivna87', password: 'drovitylife22'},
    {name:'sveta', username:'svetarod99', password: '5dhhf'},
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);



// HW Part 2 Логічні розгалуження:

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let number= +prompt('pick a number');
if (number === 0) {
    console.log('Incorrect');
}
else {
    console.log('Correct');
}

let x1= 1;
if (x1 === 0) {
    console.log('Incorrect');
}
else {
    console.log('Correct');
}
//or this way
x1 === 0
    ? console.log('incorrect')
    : console.log('correct');


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = prompt('minutes from 0-59 ?');
if (time >= 0 && time <= 14) {
    console.log( 'quarter 1');
}
else if (time >= 15 && time <= 29){
    console.log('quarter 2');
}
else if (time >= 30 && time <= 44){
    console.log('quarter 3');
}
else if (time >= 45 && time <= 59){
    console.log('quarter 4');
}


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = prompt('pick a day of the month from 1 to 31');
if (day >= 1 && time <= 10) {
    console.log( 'decade 1');
}
else if (day >= 11 && day <= 20) {
    console.log('decade 2');
}
else if (day >= 21 && day <= 31) {
    console.log('decade 3');
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let schedule= +prompt('pick a day (1-7) of the week to see your schedule');
switch (schedule) {
    case 1:
        console.log( '1. 4:30am – Wake up 2. Eat Breakfast  3. Exercise 4. Pack Lunch 5. Mid Afternoon Meditation 6. Top Off Groceries after Work 7. Clean Everything as soon as I get home! 8. Shower 9. Relax for the rest of the night');
        break;
    case 2:
        console.log( '1. 4:30am – Wake up 2. Eat Breakfast  3. Exercise 4. Read book 5. Eat lunch 6. Cook dinner 7. Clean Everything as soon as I get home! 8. Shower 9. Watch a movie');
        break;
    case 3:
        console.log( '1. 4:30am – Wake up 2. Eat Breakfast  3. Exercise 4. go shopping  5. Eat lunch 6. Cook dinner 7. go for a walk! 8. Shower 9. read a book');
        break;
    case 4:
        console.log( '1. 4:30am – Wake up 2. Eat Breakfast  3. Exercise 4.cook lunch 5. Eat lunch 6. buy groceries 7.Shower 8. relax');
        break;
    case 5:
        console.log( '1. 4:30am – Wake up 2. Eat Breakfast  3. Exercise 4. meditate 5. Eat lunch 6. Cook dinner 7. Shower 8. go out with friends to the bars');
        break;
    case 6:
        console.log( '1. 4:30am – Wake up 2. Eat Breakfast  3. Exercise 4. clean the house 5. Eat lunch 6. get dressed/shower  9. go to dinner with family');
        break;
    case 7:
        console.log( '1. 4:30am – Wake up 2. Eat Breakfast  3. Exercise 4. meditate. Eat lunch 6. relax the rest of the day ');
        break;
    default:
        console.log('empty');
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let n1 = 24;
let n2  =  23;

if (n1 === n2){
    console.log('equal');
}
else if (n1>n2) {
    console.log(n1);
}
else if (n1<n2){
    console.log(n2);
}
else{
    console.error('Error');
}


let r = 22;
let k  =  23;

if (r>k) {
    console.log(r);
}
else if (r<k) {
    console.log(k);
}
 else if (r===k){
    console.log('equal');
}




//HW Part 3
//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x ='';
if (x ==='null' || x === 'underfiend' || x === '' || x === false || x === 'NaN' || x === '0') {
    x = 'default';
    console.log(x);
}

//or
let a1 = 0;
a1 = a1 || 'default';
console.log(a1);


//or
let xx1 = false;
if (!xx1){
    xx1='default';
    console.log('ccc', xx1);
}
else    {
    console.log(xx1)
}

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('super!!!');
}

if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('super!!!');
}

if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('super!!!');
}

if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('super!!!');
}

if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('super!!!');
}

if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('super!!!');
}
