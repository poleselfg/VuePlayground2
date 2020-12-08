import axios from "axios"

const baseDomain = 'https://reqres.in'
const baseURL = `${baseDomain}/api`;

export default axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});