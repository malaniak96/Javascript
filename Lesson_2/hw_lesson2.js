// hw part 1 Масиви та об'єкти:
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

////Створити 3 об'єкти які описують книги.
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



// /Логічні розгалуження:

//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x= +prompt('number 6');
if (x!=0) {
    console.log('Correct');
}
else {
    console.log('Incorrect');
}


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time =
