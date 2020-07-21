<template>
  <div class="car">
    <!-- 顶部返回条 -->
    <van-nav-bar title="购物车" left-text="返回" left-arrow  @click-left='GoBack' fixed>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 购物车信息 -->
     <div class="shopCar">
          <van-swipe-cell v-for="item in data" :key="item.good_id">
        <van-card
          :num="item.num"
          :price="item.good.price"
          :desc="item.good.desc"
          :title="item.good.name"
          class="goods-card"
          :thumb="item.good.img"
        />
 
      </van-swipe-cell>
     </div>
     <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    <!-- <TabBar></TabBar> -->
  </div>
</template>
<script>
import {
  NavBar,
  Icon ,
  SwipeCell ,
  Card,
  Button,
  Toast ,
  SubmitBar
} from 'vant'
export default {
      name:'Car',
    components:{
        // TabBar:()=> import('@/components/common/TabBar.vue'),
         [NavBar.name]:NavBar,
         [Icon.name]:Icon ,
         [SwipeCell.name]:SwipeCell ,
         [Card.name]:Card,
         [Button.name]:Button,
         [Toast.name]:Toast,
         [SubmitBar.name]:SubmitBar
    },
    data:function(){
      return {
        data:{}
      }
    },
    mounted(){
      this.getCartList()
      console.log(this.data);
      
    },
    methods:{
      onSubmit(){
        console.log('提交购物车哇');
        
      },
      GoBack(){
          this.$router.replace('/home')
      },
      getCartList(){  //获取购物车列表
      this.$api.getCartList({}).then((res)=>{
        console.log('获取购物车列表',res.data);
        this.data= res.data
      })
      }
    },
}
</script>

<style lang='scss' scoped>
.car{
    .goods-card {
    margin: 0;
  }
  .shopCar{
   width: 100%;
   height: 100%;
   padding-top: 2.6133rem;
   padding-bottom: 0.6667rem;
   box-sizing: border-box;
      overflow: auto;
  }
  .delete-button {
    height: 100%;
  }

}
</style>