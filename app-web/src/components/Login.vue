<template>
<div class="login">
  <!-- 顶部返回条 -->
      <van-nav-bar title="登录" left-text="返回" left-arrow  @click-left='GoBack' fixed>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  <!-- 用户登录页面 -->
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        登录
      </van-button>
    </div>
 </van-form>
</div>
</template>
<script>
import { Form ,
Field, 
Button,  
SwipeCell ,
  Card,
  NavBar,
  Icon,
  Toast 
} from 'vant'; 
export default {
    name:'User',
    components:{
        [Form.name]: Form,
        [Field.name]: Field,
        [Button.name]: Button,
        [SwipeCell.name]:SwipeCell,
        [Card.name]:Card,
        [NavBar.name]:NavBar,
        [Icon.name]:Icon,
        [Toast.name]:Toast 
    },
      data() {
        return {
          username: '',
          password: '',
        };
      },
  methods: {
    onSubmit() {
             let data = {
        usersName: this.username,
        userPassword: this.password,
      }
      this.$api.login(data).then((res)=>{

     if(res.err == 0){
        Toast.success('登入成功,三秒后跳转');
        setTimeout(()=>{
           this.$router.replace('/home')
        },3000)
    // localStorage.setItem('token',res.data.token)
     }     
        
      })
    },
    GoBack(){
       this.$router.replace('/home')
    }
  },
mounted(){
 
}

}
</script>

<style lang='scss' scoped>
.login{
  .van-form{
    margin-top: 3.5rem;
  }
}
</style>