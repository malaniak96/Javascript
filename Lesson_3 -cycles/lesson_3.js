//Cycles

//increments/decrements

let x =0;
//x = x + 10
//x += 10;
//x = x+1;
x++;
console.log(x);
++x;
console.log(x);


let a= 0;
let b= ++a;
console.log(b);

let c= 0;
let d= --c;
console.log(d);

//CYCLES -LESSON

//for loop
let users=[
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
//debugger;
for (let index = 0; index < users.length; index++){
    document.write(`<div>${users[index].name} - ${users[index].age}</div>`);
    //console.log(index);
}
//itar
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    document.write(`<div>${user.name}</div>`);
}
//ritar
// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
//     console.log(user);}


// users.length = 11 in this specific array
// перевірка - first index= 0 then index<users.length then index++ i returns to index=0

 //document.write(`<div>${users[0].name}</div>`);
 //document.write(`<div>${users[1].name}</div>`);
 //document.write(`<div>${users[2].name}</div>`);
 //document.write(`<div>${users[3].name}</div>`);
 //document.write(`<div>${users[4].name}</div>`);



// for of loop - cycle

let userss=[
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
for ( const userr of userss) {
    if (!userr.status){
    document.write(`<div>${userr.name} ${userr.status}</div>`);}
}
//console.log(userr);
// немає реверсивного

//iter - for of
for (const userr of userss) {


    console.log(userr);
    for (const field in userr) {
        console.log(userr[field]); // дає --> 1 anna 28 true
        //console.log(field); дає тільки --> id name afe status
    }


    console.log('----------');


}

// while

let i=0;
while (i <userss.length){
    let userr = userss[i];
    console.log(userr);
    i++;
}
//DO WHILE
//do{
//    console.log('do');
//} while (false)