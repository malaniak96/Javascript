
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let array=[
    {},
];
for (let i = 0; i < array.length; i++) {
    document.write(`<div>Okten School – це школа програмування, яка пропонує ефективні IT курси у Львові, Києві та онлайн по всьому світу.</div>`);
    document.write(`<div>Якість навчання підтверджуємо відео відгуками працевлаштованих випускників та задоволених роботодавців.</div>`);
    document.write(`<div>Школа заснована при IT-компанії, яка спеціалізується на розробці веб-продуктів та мобільних додатків для закордонних і вітчизняних клієнтів.</div>`);
    document.write(`<div>Викладачі, які проводять заняття – досвідчені фахівці своєї галузі, які працюють з реальними IT-проектами та готові ділитися своїми знаннями та досвідом."</div>`);
    document.write(`<div>Школа програмування OKTEN - єдина в Україні, хто має відео відгуки працевлаштованих студентів в такій кількості</div>`);
    document.write(`<div>І це тільки початок, адже наші випускники та їх досягнення говорять самі за себе.</div>`);
    document.write(`<div>Школа програмування Okten - єдина, що має відгуки від роботодавців, які входять до списку найкращих компаній DOU.UA.</div>`);
    document.write(`<div>А випускники курсів отримують гарантії працевлаштування після успішного закінчення навчання. </div>`);
    document.write(`<div>Але зазвичай їх забирають до себе наші офіційні партнери ще до закінчення курсу.</div>`);
    document.write(`<div>OKTEN THE BEST</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let text=[
    {},
];
for (let i = 0; i < text.length; i++) {
    document.write(`<div> ${text[i]},OKTEN </div>`);
    document.write(`<div>${text[i]}, SCHOOL </div>`);
    document.write(`<div>${text[i]}, CLASS OF JUNE 2023</div>`);
    document.write(`<div>${text[i]}, JAVASCRIPT </div>`);
    document.write(`<div>${text[i]}, STUDENT: OLGA MALANIAK</div>`);
    document.write(`<div>${text[i]}, JS LESSON CURRENTLY</div>`);
    document.write(`<div>${text[i]},LECTURE 3</div>`);
    document.write(`<div>${text[i]}, FOR LOOPS </div>`);
    document.write(`<div>${text[i]}, AND CYCLES</div>`);
    document.write(`<div>${text[i]}, HW#3 IN PROGRESS</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let box=[
    {},
];
let i = 0;
while ( i < box.length) {
    i++;
    document.write(`<div><h1>${box}, OKTEN</h1></div>`);
    document.write(`<div><h1>${box}, SCHOOL</h1></div>`);
    document.write(`<div><h1>${box}, OKTEN</h1></div>`);
    document.write(`<div><h1>${box}, SCHOOL</h1></div>`);
    document.write(`<div><h1>${box}, OKTEN</h1></div>`);
    document.write(`<div><h1>${box}, SCHOOL</h1></div>`);
    document.write(`<div><h1>${box}, OKTEN</h1></div>`);
    document.write(`<div><h1>${box}, SCHOOL</h1></div>`);
    document.write(`<div><h1>${box}, OKTEN</h1></div>`);
    document.write(`<div><h1>${box}, SCHOOL</h1></div>`);
    document.write(`<div><h1>${box}, OKTEN</h1></div>`);
    document.write(`<div><h1>${box}, SCHOOL</h1></div>`);
    document.write(`<div><h1>${box}, OKTEN</h1></div>`);
    document.write(`<div><h1>${box}, SCHOOL</h1></div>`);
    document.write(`<div><h1>${box}, OKTEN</h1></div>`);
    document.write(`<div><h1>${box}, SCHOOL</h1></div>`);
    document.write(`<div><h1>${box}, OKTEN</h1></div>`);
    document.write(`<div><h1>${box}, SCHOOL</h1></div>`);
    document.write(`<div><h1>${box}, OKTEN</h1></div>`);
    document.write(`<div><h1>${box}, SCHOOL</h1></div>`);
    document.write(`<div><h1>${box}, OKTEN</h1></div>`);

}


//- Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
//ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


let listOfItems = [
    'html',
    'css',
    'javascript',
    'mysql',
    'mongodb',
    'react',
    'angular',
    'node.js',
];

for (let i = 0; i < listOfItems.length - 7; i++) {
    document.write(`<h2>LIST:</h2> <ul> ${listOfItems}
                        <li>${listOfItems[0]}</li>
                        <li>${listOfItems[1]}</li>
                        <li>${listOfItems[2]}</li>
                        <li>${listOfItems[3]}</li>
                        <li>${listOfItems[4]}</li>
                        <li>${listOfItems[5]}</li>
                        <li>${listOfItems[6]}</li>
                        <li>${listOfItems[7]}</li>     
                    </ul>`);
}

//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//ШАБЛОН
//<div class="product-card">
    //<h3 class="product-title">TITLE. Price - PRICE</h3>
//<img src="IMAGE" alt="" class="product-image">
//</div>
//Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg',
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg',
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74',
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png',
    },
];
for (let product of products){
    document.write(`<div class="product-card">
        <h3 class="product-title"> ${product.title} - ${product.price} UAH</h3>
        <img src="${product.image}" alt="" class="product-image">
</div>`);
}



// за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for ( let user of users) {
    if (user.status){
        document.write(`<div>${user.name} ${user.status}</div>`);}
}

for ( let user of users) {
    if (!user.status){
        document.write(`<div>${user.name} ${user.status}</div>`);}
}

for ( let user of users) {
    if (user.age > 30){
        document.write(`<div>${user.name} ${user.age}</div>`);}
}
