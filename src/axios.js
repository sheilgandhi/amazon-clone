import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-9906b.cloudfunctions.net/api' // API URL
});

export default instance;
//http://localhost:5001/clone-9906b/us-central1/api