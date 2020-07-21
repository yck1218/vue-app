<template>
  <div class="goods">
   <div class="goods_nav">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">商品管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>新增商品</el-breadcrumb-item>
        </el-breadcrumb>
   </div>
   <div class="goods_content">
       <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
         
            <el-form-item label="商品类型" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择商品品类">
                <el-option  v-for="(item,index) in  desc_name" :label="item" :value="item" :key="index"></el-option>
    
                </el-select>
            </el-form-item>
               <el-form-item label="商品名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
               <el-form-item label="商品价格" prop="peice">
                <el-input v-model="ruleForm.peice"></el-input>
            </el-form-item>
            <el-form-item label="商品描述" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="是否热销" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
             <el-form-item label="图片地址" prop="img">
                <el-input v-model="ruleForm.img"></el-input>
            </el-form-item>
            <!-- 上传图片 --> 
             <!-- action='http://localhost:3000/upload/img' -->
                <!-- <el-upload
                    action="/upload/img"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload> -->
                <!-- <div>
                  <input type="file" @change="aaa">
                </div> -->
            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
                <!-- 提交和重置 -->
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>

   </div>
  </div>
</template>

<script>
export default {
     data() {
      return {
          desc_name:[],
        ruleForm: {
          name: '',
          peice: '',
          title: '',
          delivery: false,
          desc: '',
          img:''
        },
         dialogImageUrl: '',
        dialogVisible: false,
        
      
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            let data={
                name:this.ruleForm.name,
                title:this.ruleForm.title,
                hot:this.ruleForm.delivery,
                prie:this.ruleForm.peice,
                img:this.ruleForm.img
            }
           this.$api.addGoodsList(data).then(res=>{
               console.log(res);
           })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        console.log(file);
        
      },
    //   获取商品品类的接口函数
        getDescs(){
            console.log(this.$store.state);  //访问状态管理属性
             this.$api.getDescs({}).then(res=>{
          for(let data of res.data.data){
              this.desc_name.push(data.name_zw)
          }
        })
        },
        // aaa(){
         
        //     // var formdata = new FormData();
        //     // formdata.append("file",e.target.files[0]);
        //     // console.log(formdata);
        //   let xhr = new XMLHttpRequest();
        //     xhr.open('post','/upload/img',true)
        //      xhr.onreadystatechange = ()=>{
        //        if (xhr.readyState==4 && xhr.status==200){
        //      console.log(xhr.responseText);
             
        //     }
        //     }
        //      xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        //     xhr.send('aaaa')
        // }
     
    
    },
    mounted(){
        this.getDescs()
      
    }

}
</script>

<style lang='scss'>
.goods{
    .goods_nav{
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }
    .goods_content{
      
        .el-form-item{
            margin-bottom: 10px;
        }
    }
}

</style>