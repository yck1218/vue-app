import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)  //注册

const store = new Vuex.Store({
    namespaced: true,
state:{   //状态
    desc:[],
    desc_zw:[]
},
getters:{ //可以认为是 store 的计算属性

},
mutations:{  //  同步提交负载

},
actions:{ //可以包含任何异步操作

}

})

export default store
