import axios from "axios";

axios.interceptors.request.use(function(request){
    if(localStorage.getItem("token")) {
        request.headers.authorization = "Bearer " + localStorage.getItem("token");
    }
    return request;
})

export default function callAPI(endpoint, method = "GET", body){
    return axios({
        url: `https://jsonplaceholder.typicode.com/users/1/${endpoint}`,
        method: method,
        data: body
    })
}

