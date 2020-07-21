import axios from 'axios'

// let baseURL='https://cnodejs.org/api/v1';  cnode 数据接口地址
// 
let baseURL='http://localhost:8899/'

const fetch = axios.create({
    baseURL:baseURL,
    timeout:7000,
    headers:{
        'Content-Type':'application/json;charset=UTF-8'
    }
})


  
export default fetch