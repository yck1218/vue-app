<template>
<div class="find">
  <div class="find-nav">
    <van-sidebar v-model="activeKey">
    <van-sidebar-item  v-for=" item in  strain" :key="item.rank" :title="item.cate_zh" @click='keyword(item.cate)' />
</van-sidebar>
  </div>
  <div class="find-cotent" column-num="3" >
    <van-grid>
      <van-grid-item v-for="item in goods" :key="item._id" icon="photo-o" >
        <img :src="item.img" alt="">
        <span v-text="item.name"></span>
      </van-grid-item>
    </van-grid>
  </div>
   <TabBar></TabBar>
</div>
</template>
<script>

import { 
  Sidebar, 
  SidebarItem ,
  Grid, 
  GridItem ,
}  from 'vant'
export default {
  name:'Find',
    components:{
        TabBar:()=> import('@/components/common/TabBar.vue'),
        [Sidebar.name]:Sidebar,
        [SidebarItem.name]:SidebarItem,
        [Grid.name]:Grid,
        [GridItem.name]:GridItem,
    },
    data() {
    return {
      activeKey: 0,
      strain:[],
      keyword1:'digital',
      goods:[]
    };
  },
  mounted(){     //挂载后的生命周期
    this.init()
    
  },
  methods:{   //事件选项
  keyword(res){
   this.keyword1=res
   this.getCateGoodList()
  },
  getCateGoodList(){  //筛选品类aip
    let params={
      cate:this.keyword1
    }
    this.$api.getCateGoodList(params).then((res)=>{
      this.goods=res.data
    })
  
  },

  async init(){
    // getAllCates 请求品类
     let sss =  await this.$api.getAllCates({}) 
      this.strain=sss.data
     this.getCateGoodList()
  }
    

  },
    }
</script>

<style lang='scss' scoped>
.find{
  .find-nav{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 3.1rem;
    overflow: auto;
  }
  .find-cotent{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 3.1rem;
    left: 5.5333rem;
    overflow: auto;
  }
  .van-grid{
    display: flex;
    flex-wrap: wrap;
    .van-grid-item{
      width: 50%;
      &>div{
        &>img{
          width: 100%;
        }
      }
    }
  }

}

</style>