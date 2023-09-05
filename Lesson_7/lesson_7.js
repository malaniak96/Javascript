// todo DATE

let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

//will use more often // time from the start of епохи unix from 01 01 1970
console.log(now.getTime());

//not needed at the moment example
setInterval(() => {
    document.write(`<div>${new Date()}</div>`)
}, 1000);

let date1 = new Date(1693934021386);
console.log(date1);

let date = new Date("Dec 12 1987 09:15:12");
console.log(date);

let date3 = new Date(1987, 11 , 12, 9, 15, 12);
console.log(date3);

// month starts with 0 ---> index of a month index 0 = jan, index 1 = feb, index 2 = mar and etc

let user = {
    id: 1,
    name: 'vasya',
    bday: new Date(1252525522522),
};
let user2 = {
    id: new Date().getTime(),
    name: 'vasya',
    bday: new Date(1252525522522),
};

console.log(user);
console.log(user2);

// interview question : example of identificator is new Date().getTime()
// uuid - generation of id --> write function or take a completed function


//todo ERRORS
//use debugger if it is not your code, use this when it is your code - also works as debugger

console.log('start');
try{
    console.log(notPresentedVariable);
}catch (error){
    console.log(error);
} finally {
    console.log('end');
}
//try catch is like if else but for errors


// function foobar(num1, num2){
//     if (typeof num1 === 'string'|| typeof num2 === 'string'){
//         throw new Error('args cannot be not a number');
//     }
//
// };
//
// foobar(10, 'hello');

//error gives red visualization

let obj = {};
// innerObj: {id};
console.log(obj?.innerObj?.id);





//todo

let namex = 'vasya';

let user1 = {
    id: 1,
    namex,
    foo (){

    },
}
console.log(user1);
//user.foo();

function usergenerator (id, name, age){
    return {id, name, age}
}



//todo

let car = {
    id:1,
    producer: 'subaru',
    model:'wrx',
    power:365
};

let {id, model} = car;
console.log(id);
console.log(model);

function extractor ({id, model}){

    return{
        carId: id,
        carModel: model,
    }
}

console.log(extractor({id:'ass', model:'aaaa', asd:'', fff: ''}));


let car2 = {
    id: 2,
    producer: 'porshe',
    model:'cayenne',
    power: 450,
    fary: true,
    kasko: true,
};

let {id:vId, model:vModel} = car2;
console.log(vId);


//todo with arrays

let [a,b]= [
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
console.log(a);
console.log(b);


//or let [c,d, ,e] = users;
let [c,d, ,e]= [
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
console.log(c);
console.log(d);
console.log(e);
//to skip max in the users use --> , ,
//syntax construction

let user3 = {
    name: 'kokos',
    age: 123,
    name:'adfsfdsasf',
}

let user4 = {...user3, id:2, name:'qqq'};
user4.name = 'tomat';
console.log(user3);
console.log(user4);


let user5 = {
    name: 'kokos',
    age: 123,
    wife:{
        name: 'anna'
    }
}

let user6 = user5;
console.log(user5 === user6);

let user7 = {...user5};
console.log(user5 === user7);
console.log(user5.wife === user7.wife);


//todo COPY -spred
let users2= [
    { name: 'petya', age: 31, status: false},
    { name: 'anna', age: 28, status: true},
    { name: 'max', age: 26, status: false},
    { name: 'olya', age: 18, status: true},
    { name: 'hrystia', age: 17, status: false},
    { name: 'petya', age: 31, status: false},
    { name: 'petya', age: 31, status: false},
    { name: 'anna', age: 28, status: true},
    { name: 'max', age: 26, status: false},
    { name: 'olya', age: 18, status: true},
    { name: 'hrystia', age: 17, status: false},
];

let userCopy = [...users2,1,2,3,4];
console.log(userCopy);

//todo JSON
// turns your objects to string

let jsonUser = JSON.stringify(users2);
console.log(jsonUser);
//turned to the string
//deep copy

let parseUser = JSON.parse(jsonUser);
console.log(parseUser);
//turned back from the string

let assign = Object.assign({}, users2);
console.log(assign);
console.log(assign === users2);


let clone = structuredClone(users2);
console.log(clone);



///todo map

let users3= [
    { name: 'petya', age: 31, status: false},
    { name: 'anna', age: 28, status: true},
    { name: 'max', age: 26, status: false},
    { name: 'olya', age: 18, status: true},
    { name: 'hrystia', age: 17, status: false},
    { name: 'petya', age: 31, status: false},
    { name: 'petya', age: 31, status: false},
    { name: 'anna', age: 28, status: true},
    { name: 'max', age: 26, status: false},
    { name: 'olya', age: 18, status: true},
    { name: 'hrystia', age: 17, status: false},
];

let map = users3.map((value, index) =>{
    return {...value};
    });

console.log(map);
console.log(users3);
console.log(map === users3);
console.log(map [0] === users3 [0]);

