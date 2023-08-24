

//FUNCTIONS
let users1=[
    {id: 1, name: 'petya', age: 31, status: false},
    {id: 1, name: 'anna', age: 28, status: true},
    {id: 1, name: 'max', age: 26, status: false},
    {id: 1, name: 'olya', age: 18, status: true},
    {id: 1, name: 'hrystia', age: 17, status: false},
    {id: 1, name: 'petya', age: 31, status: false},
    {id: 1, name: 'petya', age: 31, status: false},
    {id: 1, name: 'anna', age: 28, status: true},
    {id: 1, name: 'max', age: 26, status: false},
    {id: 1, name: 'olya', age: 18, status: true},
    {id: 1, name: 'hrystia', age: 17, status: false},
];

let users2 = [
    {id: 1, name: 'petya', age: 31, status: false},
    {id: 1, name: 'anna', age: 28, status: true},
    {id: 1, name: 'max', age: 26, status: false},
    {id: 1, name: 'olya', age: 18, status: true},
    {id: 1, name: 'hrystia', age: 17, status: false},
];


//for (const user of users){
//    console.log(user);}


function looper (array) {
    for (const item of array){
        console.log(item);
    }
}
looper(users1);
looper(users2);


function foo(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
foo(12, 'dhdh',  true);

//є полідовність якщо забрати b то а=12 b=true i c=underfind
//looper, writer, calculator
//Назва функції може бути довільною, але зазвичай називають по тому, що та функція робить
// (looper, writer, calculator, etc.). Аргументи теж бажано використовувати такі,
// аби інші програмісти знали, що функція хоче мати(в даному випадку array - будуть знати,
// що хоче функція отримати масив). Якщо функція типу calculator(num1, num2) -
// то програміст розуміє, що треба туди number.

function calc (a=50, b=20, c =200){
    console.log(a + b +c);
}
calc();


// function calc (a, b, c =200){
//     console.log(a + b +c);}
//calc(12, 4, 6);

function foo1(asd){
    console.log(arguments);
   const arr =  Array.from(arguments);
   let result = 0;

   for (const number of arr){
       result = result +number;
   }
   console.log('result : ', result);
}
foo1(2, 4, 4, 6, 5, 7, 6, 8, 8);
foo1(2, 4, 4, 6);

//arguments is a variable that is when the function foo used
//Array.from(arguments) = [....arguments];
// from prsedo array makes it an array from foo---> const arr =  Array.from(arguments);

function foo2(asd){
    console.log(arguments);
    const arr =  Array.from(arguments);
    let result = 0;

    for (const number of arr){
        result = result + number;
    }
    console.log('result in Function: ', result);
    return result;
}

const a = foo2(2, 4, 4, 6, 5, 7, 6, 8, 8);
const b= foo2(2, 4, 4, 6);
console.log(a);
console.log(b);

//everything that is below return result; then it will not show as return cuts it off

function foo3(){
    if (arguments.length > 3){
        return 'aaaa';
    }
    else {
        return 'bbbb';
    }
}

const c = foo3('qwe', 'ffd', 'xzx', 'dhhhfhfhfh', 'a');
console.log(c);




function foo4(str1, str2, ...rest){
    console.log(str1);
    console.log(str2);
    console.log(rest);

}
foo4('qwe', 'ffd', 'xzx', 'dhhhfhfhfh', 'a', 'yr','dddddd');

//rest is am array


//todo Loop with function
function foo5(...rest){
    let result = 0;

    for (const number of rest){
        if (number > 45) {
            break;
        }
        result = result + number;
    }
    console.log('result in Function: ', result);
    return result;
}
const n = foo5(2, 4, 4, 6, 50, 7, 6, 8, 8);
console.log(n);


//another variation
function foo6(...rest){
    let result = 0;

    for (const number of rest){
        if (number > 45) {
          continue;
        }
        result = result + number;
    }
    console.log('result in Function: ', result);
    return result;
}
const j = foo6(2, 4, 4, 6, 50, 7, 6, 8, 8, 45);
console.log(j);

//for (const number of rest){
//         if (number <= 45) {
//             result = result + number;  }


//continue це працює щоб обірвати ітерацію
//break це обривається цикл