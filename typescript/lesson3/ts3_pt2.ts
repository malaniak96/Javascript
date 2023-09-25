interface IUser {
    id:number,
    name: string,
    username:string,
    email:string,

}

let getAllUsers = ():Promise<IUser[]> =>
    fetch('https://jsonplaceholder.typicode.com/users').then(value =>value.json())

const main = async () => {
    let users = await getAllUsers();
    let userContainerDiv = document.querySelector<HTMLDivElement>('#userContainer');
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.innerText = `${user.id} ${user.name} -- ${user.email}`
        const button = document.createElement('button');
        button.innerText = 'Posts';
        button.onclick = () => {
            location.href = 'posts.html'

        }
        userItem.appendChild(button);
        userContainerDiv.appendChild(userItem);

    })
}














