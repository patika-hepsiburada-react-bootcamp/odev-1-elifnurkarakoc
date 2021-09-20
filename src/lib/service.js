import axios from "axios";

/**
 * Returns the user Object
 * @param {number} user_id
 * @returns {Object}
 */
async function getData(user_id){

    try{
        const {data:user} = await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        const {data:posts} =await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
        user.posts =posts
        return user;
    } 
    catch(error){
        console.log(error.message);
    }
    
};

export default getData;