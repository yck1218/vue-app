<template>


<div class="home">
    <!-- 下拉刷新 -->
    <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    :immediate-check='false'
    >
    <!-- 滚动提示条 -->
    <van-notice-bar 
    color="#fff" 
    background="#B20D07" 
    left-icon="volume-o" 
    mode="closeable"
    scrollable
    >
    <!-- scrollable 让提示框文字滚动 -->
        这是一个简单的京东滚动提示框，今天是618快来购物哇
    </van-notice-bar>

 <!-- 头部搜索框 -->
 <van-search
  shape="round"
  background="#B20D07"
  :placeholder="tips"
  show-action
  disabled>
  <!--  show-action 是否在搜索框右侧显示按钮  disabled 是否禁用输入框 -->
  <template #action>
    <div @click="clk" class="login">登录</div>
  </template>
</van-search>

<!-- 轮播图组件 -->
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
      <van-image  :src="Imgs.Img1" />
  </van-swipe-item>
  <van-swipe-item>
      <van-image  :src="Imgs.Img2" />
  </van-swipe-item>
  <van-swipe-item>
      <van-image  :src="Imgs.Img3" />
  </van-swipe-item>
  <van-swipe-item>
      <van-image  :src="Imgs.Img1" />
  </van-swipe-item>
</van-swipe>
<!-- 分割线 为你推荐 -->
<van-divider :style="{ color: '#B20D07', borderColor: '#B20D07', padding: '0 16px' }">精品推荐</van-divider>

<!-- 内容 -->
<div class="content">
 <van-cell v-for="item in data" :key="item._id" >
    <img :src="item.img" alt=""  @click="clkImg(item._id)">
   <span v-text="item.name"></span>
</van-cell>
</div>
  
</van-list>

<TabBar></TabBar>
</div>
</template>
<script>
import Imgs from '@/utils/imgs'
import {
    NoticeBar,
    Search,
    Swipe, 
    SwipeItem,
    Image ,
    Divider ,
    List ,
    Cell,
    Toast
 
} from 'vant'
export default {
        name:'Home',
    components:{
        TabBar:()=> import('@/components/common/TabBar.vue'),
         [NoticeBar.name]: NoticeBar,
         [Search.name]:Search  ,
         [Swipe.name]:Swipe,
         [SwipeItem.name]:SwipeItem,
         [Image.name]:Image ,
         [Divider.name]:Divider ,
         [List.name]:List ,
         [Cell.name]:Cell,
         [Toast.name]:Toast
    },
    data:function(){
        return {
            data:[],
            count: 0,
            isLoading: false,
             list: [],
            loading: false,
            finished: false,
            page:1,
            Imgs
        }
    },
    computed: {
    tips() {
      var arr = ["Mac Book", "九阳豆浆机", "联想笔记本", "烤面包机", "滚筒洗衣机"];
      return arr[Math.floor(Math.random() * 5)];
    }
  },
mounted(){
this.getHotGoodList()
},
    methods:{//事件选项
        clk(){
           this.$router.replace('/users/userLogin')
        },
        clkImg(id){
             this.$router.replace('/details/'+id)
        },
    getHotGoodList(){
        let params={
            hot:false,
            page:this.page
        }
        this.$api.getHotGoodList(params).then((res)=>{
            console.log('获取首页商品列表',res);
            
            if (res.length < 10) {
            Toast('没有更多了')
            }
            this.data = [...this.data,...res.data]
        })
    },
     onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            this.loading = true
            this.page++
            this.getHotGoodList()
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }, 
    }
}
</script>
<style lang='scss' scoped>
.home{
    .login{
        color: #fff;
    }
    .van-swipe{
        background: red;
    }
    .content{
        width: 100%;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        // overflow-soverflow : touch;
       .van-cell{
            width: 50%;
            box-sizing: border-box;
            height: 15.5rem;
            .van-cell__value {
                width: 100%;
                &>img{
                    width: 100%;
                    height: 80%;
                }
                &>span{
                    display: block;
                    text-align: center;
                    line-height: 20px;
                    color: red;
                }
            }
        }
      
    }
}

</style>