import axios from 'axios';

export default async function  odev1(userId) {
    const {data:user} = await axios('https://jsonplaceholder.typicode.com/users/'+ userId);
    //const {data:post} = await axios['https://jsonplaceholder.typicode.com/posts?userId=1'];

    console.log(post);
}