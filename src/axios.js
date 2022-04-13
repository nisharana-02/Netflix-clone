import axios from 'axios';
const baseURL = "https://api.themoviedb.org/3"
/** base url to make requests to the movie database  */
const instance = axios.create({
    baseURL
});

export default instance;