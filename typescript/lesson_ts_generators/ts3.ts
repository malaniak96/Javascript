// function* asd(){
//     let a = 5;
//     yield a;
//     console.log('!!!!!!')
// }
//
// let gen = asd();
//
// let next = gen.next();
// console.log(next);
// let next2 = gen.next();
// console.log(next2);

//GENERATORS

function* aaa() {
    yield 1
    yield 2
    yield 3
}

let gen2 = aaa();
console.log(gen2.next());
console.log('hello');
console.log(gen2.next());

function* genFileName():Generator<string> {
    let index = 0;
    while (true) {
        yield `file ${index++}.jpg`
    }
}

const fileGen = genFileName();

console.log(fileGen.next().value);
console.log(fileGen.next().value);
console.log('hello world');
console.log(fileGen.next().value);



function* team1(n:number):Generator<string>{
        for (let i=1; i<n; i++){
            yield `team1 -- worker ${i}`
        }
}


function* team2(n:number):Generator<string>{
    for (let i=1; i<n; i++){
        yield `team2 -- worker ${i}`
    }
}

// shift() видаляє перше в масиві
const teams = [team1(5), team2(8)];

while (teams.length){
    const team = teams.shift();
    const next = team.next();

    if (next.done) {
        continue;
    }
    console.log(next.value)
    teams.push(team)