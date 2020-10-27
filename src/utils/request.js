import axios from "axios"; 

const baseUrl = "http://47.115.17.245:2004";

const request = axios.create({
    baseURL: baseUrl + "/"
})

export default request;