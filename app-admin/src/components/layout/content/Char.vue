<template>
  <div class="socket">
     <div>
        <div class="box">
        <div v-for="item in listArr" :key="item.id">
          <h5 v-html="item.msg"></h5>
        </div>
      </div>
     </div>
     <el-row>
        <el-col :span="22"><el-input v-model="input" placeholder="请输入内容"   @change="send"></el-input></el-col>
        <el-col :span="2"> <el-button @click="send">发送</el-button></el-col>
      </el-row>

  </div>
</template>

<script>

export default {
  name:'socket',
  data:function(){
    return {
        textarea: '',
        input:'',
        listArr:[],
        count:0
    }
  },
  mounted(){
    this.$socket.on('student',(res)=>{
      this.count ++
      this.listArr.push({
        id:this.count,
        msg:`<div>${res}</div>`
      })

    })
  },
  methods:{
    send(){
      this.$socket.emit('serve',this.input)
      this.input=''
      
    }
    
  }

}
</script>

<style lang='scss'>
.socket{
  .box{
    height: 300px;
    border: 1px solid #ccc;
    overflow: auto;
  }
}

</style>