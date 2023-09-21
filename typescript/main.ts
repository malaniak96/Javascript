//джава скрипт коди будемо описувати Типізовані коди
// файли
// будемо типізовувати всі кейси які мали

// cd typescipt
// tsc main.ts

//example let str: string;
//str = '100500';

let str: string = 'asdas';
//str = 1000;
//str = true;

let num: number = 100500;
//num = 'asdsdds'; error
// num = true; error
//let num: number = 100500; num - declaration of variable; number - type of data; 100500- присвоюємо значення
let bool: boolean = true;
//bool = 10050; error

//we will not use any
// let numbers: any[] = [];
//let numbers: any[] = [222, true];
let numbers: number [] = [213, 123];
let strings: string [] = ['asdfsdfs', 'adfsd'];//,123 will show a problem


//status? якщо ми хочемо щоб було не обовязковим полем
let obj: {id: number, name:string, skills:string[], status?: boolean};
obj = {
    id: 123,
    name: 'alan',
    skills: ['html', 'js'],
}



interface IUser {
    id:number,
    name:string,
    skills:string[],
    status?: boolean,
}

let obj1: IUser = {
    id: 123,
    name: 'vasya',
    skills: ['html','css', 'js']
};
console.log(obj1);

let obj2: IUser = {
    id:120,
    name: 'olya',
    skills: ['html'],
};
console.log(obj2);

//    ?: не обовязкове для визначення статус



function calc (a: number, b: number):number {
    return a + b;
}
calc(10, 20);



interface IUser2 {
    name: string,
    age: number,
    status: boolean,
}
//interface це шаблон

let users: IUser2[] = [
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
console.log(users);
users.push({name: 'olga', age:25, status:false});
//не вийде запушити users.push({imia: 'kolya', vik: 12122});