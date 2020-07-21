import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import aaa  from './modules/aaa'
import bbb from './modules/bbb'
const store = new Vuex.Store({
    //  state 是 vuex的数据存储中心 ，放在这里的数据可以让所有组件共享使用
    // 只要state中的数据发生变化，视图中也会自动更新
    // state:{
    //     msg:"",
    //     count:20
    // },
    // getters 是组建中的计算属性,如果state中的数据状态发生变化 getters也会发生变化
    // getters:{
    // },
    // mutations:{
        // // 同步的修改state的主要入口
        // // 负载 组件传递过来的数据 
        // increment(state,payload) {
        //     state.count += payload.c
        //     state.msg = payload.type
        // }
    // },
    // actions:{  //简介的异步修改state的值

    // asyncIncrement(store,payload){
    //     setTimeout(()=>{
    //     store.commit("increment", payload); 
    //     },1000)
    // }

    // },
    modules:{
        aaa,
        bbb
    }
});

export default store