
import fetch from '@/utils/fetch'

// 登入接口 /user/regist


export  function login(params){
    return  fetch({
            url:'/users/login',
            method: 'get',
            params
    }) 
    }
// 添加商品
// 入参：
// img: String,  // 图片
// name: String, // 商品名称
// desc: String, // 商品描述
// price: Number, // 价格
// cate: String, // 品类
// hot: Boolean, // 是否推荐
export  function addGoodsList(data){
    return  fetch({
            url:'/descs/addGoodsList',
            method: 'POST',
            data
    }) 
    }
//  获取商品品类
    export  function getDescs(params){
        return  fetch({
                url:'/descs/',
                method: 'GET',
                params
        }) 
        }
    
        //  删除商品  
    export  function delGood(params){
        return  fetch({
                url:'/jd/delGood',
                method: 'GET',
                params
        }) 
        }
        // /jd/getAllCates
        export  function getAllCates(params){
            return  fetch({
                    url:'/jd/getAllCates',
                    method: 'GET',
                    params
            }) 
            }
    export default {
        login,
        addGoodsList,
        getDescs,
        delGood,
        getAllCates
    }