
const aaaModule ={
     namespaced:true,
     state:{   //存储空间  状态描述
          msg:"我是第一个模块",
          count:100,
          list:[]
     },
     getters:{ // 可以理解为是计算属性 如果state中的数据状态发生变化就会更新
     },
     mutations:{  //  负载  同步的修改state值得主要入口
             // 同步的修改state的主要入口
        // 负载 组件传递过来的数据 
        increment(state,payload) {
          state.count += payload.c
          state.msg = payload.type
      }
     },
     actions:{   // 异步的修改state的值
          asyncIncrement(store,payload){
               setTimeout(()=>{
               store.commit("increment", payload); 
               },500)
          }
     }

}

export default aaaModule
