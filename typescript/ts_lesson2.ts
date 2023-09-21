console.log('hello from ts+hhh')
// tsc ts_lesson2.ts -- watch to make changes save automatically


let asd = (arrayOfNumbers:string[]) => {
console.log(arrayOfNumbers);
}

asd(['1', '2']);
asd(['2', '3']);
asd(['3', '4']);
asd(['4', '5']);


//<T> generic
//<T> if you don't know what type it will be
interface IUser1<T> {
    id: number,
    name: string,
    age: number,
    work: T[],
}
let user1: IUser1 <number> = {id:1, name: 'max', age: 52, work: [1,2,3,4,5]};
let user2: IUser1 <string> = {id:1, name: 'max', age: 52, work: ['1','2','3','4','5']};
let user3: Partial<IUser1<string>> = {id:1, name: 'max', age: 52, work: ['1']};
let user4: Partial<IUser1<string>> = {id:1, work:['1', '2']};
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);



//public по замовчування// allowed not oto write
//private можна користуватись тільки цьому класі
//protected тільки у цьому класі і нащадків
//public getName():string method that connects private to public
class User {
    // public name:string
    // public age: number
        constructor(private name:string, public age:number) {
        }
        public getName():string{
            return this.name;
        }
}
let usr1 = new User( 'Max', 15);
console.log(usr1.getName());
console.log(usr1.age);


///////////////////////////////////////////////////////////////////////////////////////////////

//FORMS in html

interface IUser {
    id: number,
    name: string,
    age: number,
}
type IUserForm = Pick<IUser, 'name' | 'age'>

// or
// interface IUserFrm{
//     name: string,
//     age: number,
// }
class UserService {
    private static readonly _usersKey = 'users';

    // constructor(private name:string) {
    // }
    private static _getAll(): IUser[]{
        return JSON.parse(localStorage.getItem(this._usersKey)) || [
            {id:1, name: 'KOLYA', age: 5}
        ]
    }

    // getName():string{
    //     return this.name;
    // }
    static create(data: IUserForm):void {
        let users = this._getAll();
        let id = users.length ? users.slice(-1)[0].id+1 : 1;
        users.push({id, ...data});
        this._setToStorage(users);
    }

    static deleteById (id:number ):void {
        let users = this._getAll();
        let index = users.findIndex (user => user.id === id);
        users.splice(index, 1);
        this._setToStorage(users);
    }

    static showHTML():void {
        let userContainer = document.getElementById('userContainer');
        userContainer.innerHTML = '';

        let users = this._getAll();

       let usersHtmlContent = users.map(user=> {
            let itemDiv = document.createElement('div');
            let button = document.createElement('button');
            button.onclick =() => {
                this.deleteById((user.id));
            }
            button.innerText = 'delete';
            itemDiv.innerText =`${user.id} ${user.name} -- ${user.age}`;
            itemDiv.appendChild(button);
            return itemDiv;
            });
       if (usersHtmlContent.length){
           userContainer.append(...usersHtmlContent);
       } else {
           userContainer.innerText = 'Users do not exist!!!';
       }
    }
    private static _setToStorage(data: IUser []):void {
        localStorage.setItem(this._usersKey, JSON.stringify(data));
        this.showHTML();
    }
}

UserService.showHTML()

interface IInputs {
    name: HTMLInputElement;
    age: HTMLInputElement;
}
let form = document.forms.namedItem('userForm') as HTMLFormElement;
form.onsubmit = (e:SubmitEvent) => {
    e.preventDefault();
    let {name:{value:name}, age:{value:age}} = form as any as IInputs;
    //or form as any as Record<keyof IUserForm, HTMLInputElement>

    UserService.create({name, age: +age});
    form.reset();
}



// add static and don't have to use below use name class without creating class

//static methods work only with statics
// let userService = new UserService();
// userService.showHTML();

// UserService.showHTML() - with static











