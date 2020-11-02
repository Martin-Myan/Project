import axios from 'axios';

class Users {
    static getUsers() {
        return axios.get("https://jsonplaceholder.typicode.com/users?_limit=6");
    }

}

export default Users;