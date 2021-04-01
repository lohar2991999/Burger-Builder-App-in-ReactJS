import axios from 'axios';

    const instance = axios.create({
    baseURL: 'https://react-my-burger-df75a-default-rtdb.firebaseio.com/'
});

export default instance;