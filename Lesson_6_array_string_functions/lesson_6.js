//todo Function string
//string можна контенеонтевувати - зєднювати = concat

//to add something to the string
let str = 'hello world';
console.log(str.concat('!!!'));

let pass1 = 'okten';
let pass2 = 'OKTEN';

console.log(pass1.toUpperCase());
console.log(pass2.toUpperCase());

console.log(pass1.toLowerCase());
console.log(pass2.toLowerCase());


//todo startsWith endsWith
let token = 'Bearer udr7654-945y52w2df5gh6fg6thjfg3';

console.log(token.startsWith('Bearer'));
// можна перевіряти з чого починається стрінга

console.log(token.endsWith('3'));
// можна перевіряти з чого закінчується стрінга - реверсивний метод


//todo SPLIT IndexOF SUBSTRING
let str1 = 'hello world !!!';
let indexofSpace = str1.indexOf(' ');
console.log(indexofSpace);

console.log(str1.charAt(6));
console.log(str1[0]);
console.log(str1.substring(0, 3));


let split = str1.split(' ');
console.log(split);

let cook = 'name: vasya;surname:pupkin;age:31';
let tupleArray = cook.split(';');
console.log(tupleArray);

let obj = {};
for (const keyValuePair of tupleArray){
    console.log(keyValuePair);
    let keyValueArray = keyValuePair.split('=');
    console.log(keyValueArray[0]);
    console.log(keyValueArray[1]);
    obj[keyValueArray[0]] = keyValueArray[1];
}
console.log(obj);


//todo REPLACE

let phone = '+38 (067) 123-27-12';
let replaceAll = phone
    .replaceAll('-', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll(' ', '')
    .replaceAll('+38', '');
console.log(replaceAll);

//.log i tab will give console log


//todo SHIFT, PUSH, POP

let arr =[];
console.log(arr);

let newSizeofArray = arr.push('asd');
console.log(arr, newSizeofArray);

arr.unshift('kokos');
console.log(arr);

let shiftElement = arr.shift();
console.log(shiftElement);
console.log(arr);

let popedElement = arr.pop();
console.log(popedElement);
console.log(arr);

//to add the beginning of array - unshift
//to add to the end of array -  push

//todo JOIN

let arr1 = [11, 22, 33, 44];
let s = arr1.join('---__---');
console.log(s);

let num1 = [11, 22, 33, 44];
let num2 = [111, 222, 333, 444];
let numbers = num1.concat(num2, [0, 0, 0]);
console.log(numbers);
let foo = numbers.concat([1, 2, 3]);
console.log(foo);



//todo SLICE , SPLICE

let arr2 = [11, 22, 33, 44, 55, 66, 77, 88];

let pieSlice = arr2.slice(1, 5);
console.log(arr2);
console.log(pieSlice);
console.log(arr2);

let arr3 = [11, 22, 33, 44, 55, 66, 77, 88];
console.log(arr3);
arr3.splice(0, 1, 'asd');
console.log(arr3);

//splice is a delete (0,1) 0 -start -how many element need to be deleted
//splice can be as delete or replace

//todo Includes
console.log(arr3.includes(33));
console.log('hello okten'.includes('okt'));

//todo REVERSE
//реверсує масив

let reverse = arr3.reverse();
console.log(reverse);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//todo CALL BACKs

let array = [11, 22, 33, 44, 55, 66, 77, 88];

array.forEach(() => console.log('hello'));
// 8 items
array.forEach((x) => console.log(x));
// all numbers are shown
// starts a cycle for each element of array: (x) => console.log(x)


let even = [];
for (const item of array){
    console.log(item);
    if (item % 2 === 0){
        even.push(item);
    }
}
console.log(even);

//todo FILTER
//shorter way then the way above
// % ділення по модалю 11/2
let filter = array.filter(value => value % 2 === 0);
console.log(filter);


//todo FILTER
let users= [
    {name: 'petya', age: 31, status: false},
    {name: 'anna', age: 28, status: true},
    { name: 'max', age: 26, status: false},
    {name: 'olya', age: 18, status: true},
    {name: 'hrystia', age: 17, status: false},
    { name: 'petya', age: 31, status: false},
    { name: 'petya', age: 31, status: false},
    { name: 'anna', age: 28, status: true},
    {name: 'max', age: 26, status: false},
    { name: 'olya', age: 18, status: true},
    { name: 'hrystia', age: 17, status: false},
];
users.forEach(value => console.log(value));

let filter1 = users.filter(value => value.age > 30);
console.log(filter1);


//todo identificator - MAP
//map association one model with another model
//map adds a new element or deletes ex status
//{name, age, status}
//{name, age, status, id}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}



let usersWithId = [];
for (const user of users) {
    user.id = uuidv4();
    usersWithId.push(user);
}
console.log(usersWithId);

let map4 = users.map(function (u){
    u.id = uuidv4();
    return u;
});
console.log(map4);


let map = users.map(value => {
    delete value.status;
    return value;
})
console.log(map);

let ages= users.map(value => value.age);
console.log(ages);


//todo SORT


let sort = users.sort((u1, u2) => {
    return u1.age - u2.age
});
console.log(sort);

console.log(users.sort ((a,b) => {
    return a.name.localeCompare(b.name);
}));



// todo

let users1= [
    {name: 'petya', age: 31, status: false},
    {name: 'anna', age: 28, status: true},
    { name: 'max', age: 26, status: false},
    {name: 'olya', age: 18, status: true},
    {name: 'hrystia', age: 17, status: false},
    { name: 'petya', age: 31, status: false},
    { name: 'petya', age: 31, status: false},
    { name: 'anna', age: 28, status: true},
    {name: 'max', age: 26, status: false},
    { name: 'olya', age: 18, status: true},
    { name: 'hrystia', age: 17, status: false},
];

let reduce = users1.reduce(function (accumulator, u){
    if (u.status) {
        accumulator[0].push(u);
    } else {
        accumulator[1].push(u);
    }
    return accumulator;
}, [[], []]);

console.log(reduce);

let reduce2 = users1.reduce(function (accumulator, u){
    if (u.status) {
        accumulator.yes.push(u);
    } else {
        accumulator.no.push(u);
    }
    return accumulator;
}, {no: [], yes: []});

console.log(reduce2);






