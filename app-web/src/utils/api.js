import fetch from './fetch'


// 注册的接口api
export  function regist(data){
return  fetch({
        url:'/users/regist',
        method: 'POST',
        data
}) 
}

//登录的接口api
export  function login(data){
    return  fetch({
            url:'/users/userLogin',
            method: 'POST',
            data
    }) 
    }

//获取首页的接口
export  function getHotGoodList(params){
    return  fetch({
            url:'/users/lists',
            method: 'GET',
            params
    }) 
    }
 
    
//获取全部品类的
export  function getAllCates(params){
    return  fetch({
            url:'/jd/getAllCates',
            method: 'GET',
            params
    }) 
    }
    //获取全部品类的
export  function getCateGoodList(params){
    return  fetch({
            url:'/jd/getCateGoodList',
            method: 'GET',
            params
    }) 
    }
    // getCartList  获取购物车列表
    export  function getCartList(params){
        return  fetch({
                url:'/jd/getCartList',
                method: 'GET',
                params
        }) 
        }
    // getCartList  获取商品详情
    export  function getGoodDetail(params){
            
        return  fetch({
                url:'/jd/getGoodDetail',
                method: 'GET',
                params
        }) 
        }
            // getCartList  加入购物车的api
    export  function addToCart(data){
        return  fetch({
                url:'/jd/addToCart',
                method: 'POST',
                data
        }) 
        }


// 把方法统一抛出
export default {
    regist,
    login,
    getHotGoodList,
    getAllCates,
    getCateGoodList,
    getCartList,
    getGoodDetail,
    addToCart
}