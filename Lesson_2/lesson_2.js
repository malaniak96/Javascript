let bands = [
    "pink floyd", //0 index
    "shinedown", //1 index
    "cat girls", //2 index
    "steve vai" //3 index
];
console.log(bands);
console.log(bands[0]);
console.log(bands.length);


console.log(bands[bands.length - 1]);
bands[4] = 'joe satriani';
console.log(bands);
bands.push("deep purple");
console.log(bands);

console.log(bands[bands.length - 1]);

bands[1] = null;
console.log(bands);


// music folder
let musicFolder = [

    // 0                    1                  2       3      040      041    042
    ['nelly furtado', 'selena gomez', 'pin k floyd', 'dp', ['my death valentine', 'xxxx', 'yyyy']], //0

    // 0                 1            2
    ['enimem', 'pussycat dolls', 'pugachova'], //1

    // 0            1
    ['galkin', 'lopez'], //2
]

console.log(musicFolder.length);
console.log(musicFolder[0][3]);
console.log(musicFolder[0][4][0]);
musicFolder[0][4].push("ppp");
console.log(musicFolder[0][4]);


// objects
let user = {
    id: 1,
    name: 'vasya',
    age: 34,
    status: true
}

console.log(user);
console.log(user.id);
console.log(user['id']);
console.log(user.status);

user['skills'] = ['js', 'java', 'python'];
console.log(user);
console.log(user.skills[2]);


//objects in arr
let user0 = {id: 1, name: 'vasya', age: 12, status: true};
let users = [
    user0,
    {id: 1, name: 'petya', age: 31, status: false},
    {id: 1, name: 'anna', age: 28, status: true},
    {id: 1, name: 'max', age: 26, status: false},
    {id: 1, name: 'olya', age: 18, status: true},
    {id: 1, name: 'hrystia', age: 17, status: false},
    {}
];

console.log(users);
console.log(users[5]);

let hrys = users[5];
console.log(hrys.age);
console.log(users[6].name);
console.log(users[6].name);


// reference
// number string boolean -primitives

let p = 0;
let pCopy = p;
pCopy = 1;

console.log(p);
console.log(pCopy);


let origin = {};
let clone = origin;

clone.id = 100500;
console.log(clone);
console.log(origin);

let arr = [
    [],
    [],
    []
]

let arrElementindex1 = arr[1];
arrElementindex1.push('sas');
arrElementindex1.push('saaaas');
arrElementindex1.push('saaaaaaas');
console.log(arr);


if (true) {
    console.log('hello');
} else {
    console.log('bye');
}

let age = +prompt('enter your age');
if (age > 18) {
    console.log('adult');
} else {
    console.log('cartoon');
}

let color = prompt("which color you see?");
let clearRoad = confirm('road is clear?');

if (color === 'green' && clearRoad) {
    console.log('go');
} else if (color === 'red') {
    console.log('stop');
} else if (color === 'yellow') {
    console.log('wait');
} else {
    console.log('???');
}

// && and
// || or


switch (color){
    case 'green':
        console.log('go');
        break;
    case 'yellow':
        console.log('wait');
        break;
    case 'red':
        console.log('stop');
        break;
    default:
        console.log('????');
}

let user = {};
console.log(!!0);
console.log(!!'');
console.log(!![]);
console.log(!!{.name});


let name = prompt('name?') || 'john doe';
console.log(name);

