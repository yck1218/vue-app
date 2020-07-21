<template>
  <div class="content-table">
    <!-- 筛选 -->
    
      <el-select  v-model="list.cate_zh"   size='small' placeholder="全部商品" @change='change'>
        <el-option  
           v-for="item in list"
          :key="item._id"
          :label="item.cate_zh"
          :value="item.cate_zh"
        >
        </el-option>
      </el-select>
      <!-- 商品列表 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="cate" label="商品品类" width="150"></el-table-column>
      <el-table-column prop="name" label="商品图片" width="120">
          <template slot-scope="scope">
            <img  class="img" :src="scope.row.img">
          </template>
      </el-table-column>
      <el-table-column prop="price" label="商品价格" width="80"></el-table-column>
      <el-table-column prop="desc" label="商品描述" width="220"></el-table-column>
      <el-table-column prop="name" label="商品名称" width="150"></el-table-column>
      <el-table-column prop="rank" label="商品热度" width="120"></el-table-column>
      <el-table-column prop="_id" label="商品编号" width="360"></el-table-column>
       <el-table-column prop="" label="" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
           <el-tooltip class="item" effect="dark" content="编辑" placement="top" >
          <el-button type="primary" size="small" icon="el-icon-edit" circle></el-button>
          </el-tooltip>
           <el-tooltip class="item" effect="dark" content="删除" placement="top">
          <el-button @click="handleClick(scope.row)" type="danger" size="small" icon="el-icon-delete" circle></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
    @current-change='change1'
      :page-size="10"
      :pager-count="11"
      layout="prev, pager, next, jumper"
      :total="500">
    </el-pagination>
  </div>
</template>

<script>
export default {

  mounted(){
    this.getAllCates() //获取商品品类
      this.getHotGoodList()  //获取全部商品
  },
  data() {
    return {
      tableData: [],
      page:1,
      goodId:'',
      list:[]
    };
  },
  methods: {  //事件处理函数
    handleClick(row) {
      console.log(row);
      this.goodId =row._id
      // 调用删除的接口
      if(confirm('你确定要删除吗！')){
        this.delGood()
        console.log('删除成功');
      this.getHotGoodList()
        
      }
    },
      delGood(){
        let params={
          id:this.goodId
        }
        this.$api.delGood(params).then(res=>{
          console.log(res);
          
        })
      },
    getHotGoodList(){   //获取首页商品
      let params ={
        hot:true,
        page:this.page
      }
      this.$api.getHotGoodList(params).then(res=>{
        this.tableData=res.data.data
        console.log(this.tableData);
        
      })
    },
    change1(page){
      this.page =page
      this.getHotGoodList()
    },
    getAllCates(){  // 获取商品品类
      this.$api.getAllCates({}).then(res=>{
  
        this.list= res.data.data
      })
    },
    change(res){
      console.log(res);
      

    }
  },
  
};
</script>

<style lang='scss' scoped>
.content-table{
  .el-select{
    margin-bottom: 20px;

  }  .el-select{
    width:110px;
    .el-input__inner{
      color: #000;
    }

  }
  .img{
    width: 100%;
    height: 100%;
  }
}
</style>