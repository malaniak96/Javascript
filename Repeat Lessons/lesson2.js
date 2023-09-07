//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = ['olga', 'malaniak', 23, 'okten school', 'june', 2023, 'IT', 'javascript', 'lesson', 2, 'homework'];
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
console.log(array[10]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'book1',
    pagecount: 230,
    genre: 'romance',
};
console.log(book1);

let book2 = {
    title: 'book2',
    pagecount: 1000,
    genre: 'detective',
};
console.log(book2);

let book3 = {
    title: 'book3',
    pagecount: 400,
    genre: 'fiction',
};
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

let b1 = {
    title: 'book1',
    pagecount: 230,
    genre: 'romance',
    authors: [
        {name: 'stinger', age: 45},
    ],
};
console.log(b1);

let b2 = {
    title: 'book2',
    pagecount: 1000,
    genre: 'biography',
    authors:[{name: 'steve jobs', age: 60}],
};
console.log(b2);

let b3 = {
    title: 'book3',
    pagecount: 400,
    genre: 'fiction',
    authors:[{name: 'elon mask', age: 40}],
};
console.log(b3);






// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
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
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);




// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x != 0) {
    console.log('correct');
} else {
    console.log('incorrect');
}



// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 54;
if (time >= 0 && time <= 15){
    console.log('quarter 1');
} else if (time >=16 && time <= 30){
    console.log('quarter 2')
} else if (time >= 31 && time <= 45){
    console.log('quarter 3');
} else if (time >= 46 && time <= 59){
    console.log('quarter 4');
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 21;
if (day <= 10) {
    console.log('decade 1');
} else if (day <=20) {
    console.log('decade 2');
} else if (day <=31){
    console.log('decade 3');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let schedule = 5;
 switch (schedule) {
     case 1:
         console.log('lesson1');
         break;
     case 2:
         console.log('lesson2');
         break;
     case 3:
         console.log('lesson3');
         break;
     case 4:
         console.log('lesson4');
         break;
     case 5:
         console.log('lesson5');
         break;
     case 6:
         console.log('lesson6');
         break;
     case 7:
         console.log('lesson7');
 }




// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
 let a = 1;
 let b = 2;

 if (a>b){
     console.log(a);
 } else if (a < b){
     console.log(b);
 } else if(a===b){
     console.log('equal');
 }



//todo - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let w = '';
w = w || 'default';
console.log(w)

//or
let e ='';
if (e ==='null' || e === 'underfiend' || e === '' || e === false || e === 'NaN' || e === '0') {
    e = 'default';
    console.log(e);
}



// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

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











