<template>
<div class="register">
  <!-- 顶部返回条 -->
  <van-nav-bar title="注册" left-text="返回" left-arrow @click-left='GoBack' fixed>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <!-- 用户注册 -->
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
        <van-field
      v-model="password2"
      type="password"
      name="密码"
      label="密码"
      placeholder="再次确认密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">
        注册
      </van-button>
    </div>

 </van-form>

</div>
</template>
<script>
import { Form ,Field, Button ,NavBar,Icon,Toast} from 'vant'; 
export default {
    name:'User',
    components:{
        [Form.name]: Form,
        [Field.name]: Field,
        [Button.name]: Button,
        [NavBar.name]:NavBar,
        [Icon.name]:Icon,
        [Toast.name]:Toast
    },
      data() {
    return {
      username: '',
      password: '',
       password2: '',
    };
  },
  methods: {
    GoBack(){
      //  this.$router.replace('/home')
    },
    onSubmit() {
      // 注册页面  掉注册接口
       let data = {
        usersName: this.username,
        userPassword: this.password,
        newUserPassword: this.password2
      }
      this.$api.regist(data).then(res=>{
        console.log('注册成功', res);
        Toast.success('注册成功,三秒后跳转');
        setTimeout(()=>{
            this.$router.replace('/users/userLogin')  //页面跳转
        },3000)
      })
    },
  },
mounted(){
}
}
</script>

<style lang='scss' scoped>

.register{


  .van-form{
    margin-top: 3.5rem;
  }
}


</style>