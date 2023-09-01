//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//







// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}






//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//







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
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
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

let filter = coursesArray.filter(value => value.modules.includes('sass'));
console.log(filter);

