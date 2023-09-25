interface IPost {
    id:number;
    userId:number;
    title: string;
    body:string;
}

const  getPostsByUserID = (id:number):Promise<IPost[]> => fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
.then(value => value.json());

const start = async()=> {
    const url = new URL (location.href);
    const userId = url.searchParams.get('userID');
    const posts = await getPostsByUserID(+userId);
    const containerDiv = document.querySelector<HTMLDivElement>('#postContainer')


    posts.forEach(post =>{


    })

}