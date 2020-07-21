<template>
  <div class="nav">
    <el-row>
      <!-- logo标识 -->

      <el-col class="el-col-top" :span="3">
        <div class="grid-content bg-purple">
          <img src="http://img5.imgtn.bdimg.com/it/u=1338595300,2119662265&fm=26&gp=0.jpg" alt />
        </div>
      </el-col>
      <el-col class="el-col-top" :span="18">
      </el-col>
      <el-col class="el-col-top" :span="3">

        <el-button class="btn" type="info" round @click="dialogVisible = true">退出登录</el-button>
          <!-- 提示信息 -->
            <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>您确定要退出登录吗？</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = true">取 消</el-button>
              <el-button type="primary" @click="clk">确 定</el-button>
            </span>
          </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
   data() {
      return {
        dialogVisible: false,
        quit:false
      };
    },
  methods:{
    clk(){
      this.quit =true
      if(this.quit){
        this.dialogVisible =false
        this.quit=false
        // 消息提示
         this.$message({
          showClose: true,
          message: '退出成功，三秒后跳转到登录',
          type: 'success'
        })
        setTimeout(()=>{
          sessionStorage.clear()
          this.$router.push('/login')
        },3000)
      }
   
    },
     handleClose() {
        this.$confirm('确认关闭？')
      
      }

  }

}
</script>

<style lang='scss' scoped>
.nav{
  .el-col{
    display: flex;
    align-items: center;   //垂直居中
  .btn{
    margin-left: 30px;
  }
}
}


</style>