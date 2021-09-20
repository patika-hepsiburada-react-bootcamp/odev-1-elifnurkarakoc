import axios from "axios";

async function getData(user_id){

    try{
        const {data:user} = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        const {data:posts} =await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

        console.log(user);
        console.log('posts', posts);
        
    } 
    catch(error){
        console.log(error.message);
    }
    

};

export default getData;