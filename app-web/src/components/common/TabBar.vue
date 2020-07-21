<template>
<!-- route  开启路由模式  fixed 固定在底部  active-color 标签选中的颜色-->
    <van-tabbar route active-color='#F53515' fixed>
        <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
        <van-tabbar-item icon="search"  to='/find' dot>发现</van-tabbar-item>
        <van-tabbar-item icon="cart-o" to='/car' badge="5">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" to='/user'>我的</van-tabbar-item>
    </van-tabbar> 
</template>

<script>
import {Tabbar,TabbarItem} from 'vant'
export default {
    name:'Tabbar',
    components:{  // 组件选项
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem
    },
    mounted(){ // 挂载后的生命周期
    },
    state:{   //状态存储

    },
    getters:{  //  状态管理的计算属性

    },
    mutations:{  //   同步的去改变state的值
         
    },
    actions:{   //  异步改变state的状态

    }

}
</script>

<style lang='scss' scoped>

</style>