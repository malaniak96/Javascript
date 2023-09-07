//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let q = 'hello';
console.log(q);

let w = 'owu';
console.log(w);

let r = 'com';
console.log(r);

let d = 1;
console.log(d);

let e = 10;
console.log(d);

let f = -999;
console.log(d);

let l = true;
console.log(l);

let k = false;
console.log(k);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'olga';
let middleName = 'jenny';
let lastName= 'malaniak';
console.log(firstName, middleName,lastName);

let result = `${firstName} ${middleName} ${lastName}`;
console.log(result);



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);




// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let fn = prompt('what is your name');
console.log(fn);

let ln = prompt('what is your last name');
console.log(ln);

let age = prompt('what is your age');
console.log(+age);