<template>
  <div class="details">
     <!-- 顶部范回条 -->
<van-nav-bar title="商品详情" left-text="返回" left-arrow @click-left="clk">
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>
     <span v-text="message.desc"></span>
     <div>
        <img :src="message.img" alt="">
     </div>
     <em v-text="message.name"></em>
     <h3 v-text="message.price"></h3>
     数量：<input type="text" :value="val">
    <input type="button" value="加入购物车" @click="addCar">
  </div>
</template>
<script>
import {
NavBar,
Icon
} from 'vant'
export default {
   components:{
       [NavBar.name]: NavBar,
       [Icon.name]:Icon
   },
   data:function(){
      return{
          message:{},
          val:1
      }
   },
     props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted(){  //挂载后的生命周期
     console.log(this.id);
     this.getGoodDetail()
  },
  methods:{  //事件选项 
     getGoodDetail(){ // 获取购物车详情接口
     
        let params={ good_id:this.id}
        this.$api.getGoodDetail(params).then((res)=>{
           this.message=res.data  
         })  
   },
   addCar(){ //点击加入购物车
      let data={
         num:this.val,
         good_id:this.message._id
      }
      console.log(data);
      this.$api.addToCart(data).then((res)=>{
         console.log(res);
      })
   },
   clk(){
        this.$router.replace('/home')
   }
  }
}
</script>

<style>

</style>