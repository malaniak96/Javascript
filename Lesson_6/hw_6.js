//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let item1 = 'hello world';
console.log(item1.length);
let item2 = 'lorem ipsum';
console.log(item2.length);
let item3 = 'javascript is cool';
console.log(item3.length);


// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';
console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());



// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str1 = 'HELLO WORLD';
let str2 = 'LOREM IPSUM';
let str3 = 'JAVASCRIPT IS COOL';
console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());




// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirty = ' dirty string   ';
let replaceAll = dirty
    .replaceAll('  ', '');
console.log(replaceAll);




// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
let stringToArray = str.split(' ');
console.log(stringToArray);




// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let strings = numbers.map(value => value.toString());
console.log(strings);



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11 , 21, 3];
let sortNumsAscending = nums.sort((num1, num2) => {
    return num1 - num2;
});
console.log(sortNumsAscending);
let sortNumsDescending = nums.sort((num1, num2) => {
    return num2 - num1;
});
console.log(sortNumsDescending);





// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//  -- відсортувати його за спаданням за monthDuration
let sorting = coursesAndDurationArray.sort((m1, m2 ) => {
    return m2.monthDuration- m1.monthDuration;
});
console.log(sorting);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filtering = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filtering);


//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArr = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

let map = coursesAndDurationArr.map(function (u){
    u.id = uuidv4();
    return u;
});
console.log(map);




//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
let cardsDeck = [
    {cardsuit: 'spade', value: 6, color: 'black'},
    {cardsuit: 'spade', value: 7, color: 'black'},
    {cardsuit: 'spade', value: 8, color: 'black'},
    {cardsuit: 'spade', value: 9, color: 'black'},
    {cardsuit: 'spade', value: 10, color: 'black'},
    {cardsuit: 'spade', value: 'Jack', color: 'black'},
    {cardsuit: 'spade', value: 'Queen', color: 'black'},
    {cardsuit: 'spade', value: 'King', color: 'black'},
    {cardsuit: 'spade', value: 'Ace', color: 'black'},
    {cardsuit: 'diamond', value: 6, color: 'red'},
    {cardsuit: 'diamond', value: 7, color: 'red'},
    {cardsuit: 'diamond', value: 8, color: 'red'},
    {cardsuit: 'diamond', value: 9, color: 'red'},
    {cardsuit: 'diamond', value: 10, color: 'red'},
    {cardsuit: 'diamond', value: 'Jack' , color: 'red'},
    {cardsuit: 'diamond', value:'Queen', color: 'red'},
    {cardsuit: 'diamond', value: 'King', color: 'red'},
    {cardsuit: 'diamond', value: 'Ace', color: 'red'},
    {cardsuit: 'heart', value: 6, color: 'red'},
    {cardsuit: 'heart', value: 7, color: 'red'},
    {cardsuit: 'heart', value: 8, color: 'red'},
    {cardsuit: 'heart', value: 9, color: 'red'},
    {cardsuit: 'heart', value: 10, color: 'red'},
    {cardsuit: 'heart', value: 'Jack' , color: 'red'},
    {cardsuit: 'heart', value:'Queen', color: 'red'},
    {cardsuit: 'heart', value: 'King', color: 'red'},
    {cardsuit: 'heart', value: 'Ace', color: 'red'},
    {cardsuit: 'clubs', value: 6, color: 'black'},
    {cardsuit: 'clubs', value: 7, color: 'black'},
    {cardsuit: 'clubs', value: 8, color: 'black'},
    {cardsuit: 'clubs', value: 9, color: 'black'},
    {cardsuit: 'clubs', value: 10, color: 'black'},
    {cardsuit: 'clubs', value: 'Jack', color: 'black'},
    {cardsuit: 'clubs', value: 'Queen', color: 'black'},
    {cardsuit: 'clubs', value: 'King', color: 'black'},
    {cardsuit: 'clubs', value: 'Ace', color: 'black'},
];

//  - знайти піковий туз
let aceSpades = cardsDeck.filter(card => card.cardsuit === 'spade' && card.value === 'Ace');
console.log(aceSpades);

//  - всі шістки
let allSix = cardsDeck.filter(six => six.value === 6);
console.log(allSix);

//  - всі червоні карти
let allReds = cardsDeck.filter(red => red.color === 'red');
console.log(allReds);

//  - всі буби
let allDiamonds = cardsDeck.filter(diamonds => diamonds.cardsuit === 'diamond');
console.log(allDiamonds);

//  - всі трефи від 9 та більше
let trefy = cardsDeck.filter( tcards => tcards.cardsuit === 'clubs' && tcards.value > '9');
console.log(trefy);



// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let cards = [
    {cardsuit: 'spade', value: 6, color: 'black'},
    {cardsuit: 'spade', value: 7, color: 'black'},
    {cardsuit: 'spade', value: 8, color: 'black'},
    {cardsuit: 'spade', value: 9, color: 'black'},
    {cardsuit: 'spade', value: 10, color: 'black'},
    {cardsuit: 'spade', value: 'Jack', color: 'black'},
    {cardsuit: 'spade', value: 'Queen', color: 'black'},
    {cardsuit: 'spade', value: 'King', color: 'black'},
    {cardsuit: 'spade', value: 'Ace', color: 'black'},
    {cardsuit: 'diamond', value: 6, color: 'red'},
    {cardsuit: 'diamond', value: 7, color: 'red'},
    {cardsuit: 'diamond', value: 8, color: 'red'},
    {cardsuit: 'diamond', value: 9, color: 'red'},
    {cardsuit: 'diamond', value: 10, color: 'red'},
    {cardsuit: 'diamond', value: 'Jack' , color: 'red'},
    {cardsuit: 'diamond', value:'Queen', color: 'red'},
    {cardsuit: 'diamond', value: 'King', color: 'red'},
    {cardsuit: 'diamond', value: 'Ace', color: 'red'},
    {cardsuit: 'heart', value: 6, color: 'red'},
    {cardsuit: 'heart', value: 7, color: 'red'},
    {cardsuit: 'heart', value: 8, color: 'red'},
    {cardsuit: 'heart', value: 9, color: 'red'},
    {cardsuit: 'heart', value: 10, color: 'red'},
    {cardsuit: 'heart', value: 'Jack' , color: 'red'},
    {cardsuit: 'heart', value:'Queen', color: 'red'},
    {cardsuit: 'heart', value: 'King', color: 'red'},
    {cardsuit: 'heart', value: 'Ace', color: 'red'},
    {cardsuit: 'clubs', value: 6, color: 'black'},
    {cardsuit: 'clubs', value: 7, color: 'black'},
    {cardsuit: 'clubs', value: 8, color: 'black'},
    {cardsuit: 'clubs', value: 9, color: 'black'},
    {cardsuit: 'clubs', value: 10, color: 'black'},
    {cardsuit: 'clubs', value: 'Jack', color: 'black'},
    {cardsuit: 'clubs', value: 'Queen', color: 'black'},
    {cardsuit: 'clubs', value: 'King', color: 'black'},
    {cardsuit: 'clubs', value: 'Ace', color: 'black'},
];

let reduce = cards.reduce(function (accumulator, u){
    if (u.cardsuit === 'heart') {
        accumulator.hearts.push(u);
    } else if (u.cardsuit === 'diamond') {
        accumulator.diamonds.push(u);
    } else if(u.cardsuit === 'clubs'){
        accumulator.clubs.push(u);
    } else if (u.cardsuit){
        accumulator.spades.push(u);
    }
    return accumulator;
    }, {hearts: [], diamonds: [], clubs: [], spades: []});

console.log(reduce);


// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let filter = coursesArray.filter(value => value.modules.includes('sass'));
console.log(filter);

// --написати пошук всіх об'єктів, в який в modules є docker
let filter2 = coursesArray.filter(value => value.modules.includes('docker'));
console.log(filter2);