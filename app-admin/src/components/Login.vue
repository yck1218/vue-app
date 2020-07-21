<template>
  <div class="login">
    <div class="main">
      <div class="logo">
        <img src="http://img5.imgtn.bdimg.com/it/u=1338595300,2119662265&fm=26&gp=0.jpg" alt="">
      </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
              <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登入</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>
<script>
export default {
data(){

  return {
       ruleForm: {
          name: '',
          password:'',
        },
        rules:{
           name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
          ],
           password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 18, message: '长度在 6 到 18个字符', trigger: 'blur' }
          ],
        }
  }
},
mounted(){
}
,
methods:{
  submitForm(){
    this.login()


  },
  resetForm(res){  //重置按钮
     this.$refs[res].resetFields();
  },

  login(){
    let params={
      userName:this.ruleForm.name,
      userPassword:this.ruleForm.password
    }
    this.$api.login(params).then(res=>{
      // sessionStorage.setItem('token',res.data.data.token)
      if(res.data.err==0){
            this.$message({
          message: '恭喜你，登入成功 3 秒后跳转到首页',
          type: 'success'
          });
          setTimeout(()=>{
                  this.$router.push('/home')
         },3000)
      }else if(res.data.err==1){
        alert("账号或密码错误")
      }
      console.log(res);
    })
  }

}
}
</script>

<style lang='scss' scoped>
.login{
  width: 100%;
  height: 100%;
  background: #eee;

 .main{
    width: 500px;
    height: 200px;
    position: absolute;
    border: 5px solid #ccc;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding-top: 100px;
  
 .logo{
   width: 200px;
   height: 180px;
   border: 5px solid #cecece;
   border-radius: 100%;
   overflow: hidden;
   position: absolute;
   left: 50%;
   margin: -100px;
   top: 0px;
   border-bottom: none;
   border-top: none;
   &>img{
     width: 100%;
     height: 100%;
   }
 }
}
}
  .login .main label.el-form-item__label{
    text-align: center;
    padding: 0;
  }
  .el-input__inner{
    width: 355px;
  }
</style>