import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-9aa6c.cloudfunctions.net/api' 
    //API URL(CLOUD FUNCTION)
})

export default instance;