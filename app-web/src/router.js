//引入路由文件
import Vue from 'vue'
import VueRouter from  'vue-router'
Vue.use(VueRouter)  //  注册路由
// 引入三个页面组件
// 不建议这样写 项目多了直接加载消耗性能 不利于优化

// const TabBra = ()=> import('@/components/common/TabBra.vue')
const Home = ()=>  import ('@/components/Home.vue')
const User = ()=>  import ('@/components/User.vue')
const Find = ()=>  import ('@/components/Find.vue')
const Car = ()=>  import ('@/components/Car.vue')
const Login = ()=>  import ('@/components/Login.vue')
const Register= ()=>  import ('@/components/Register.vue')
const Details= ()=>  import ('@/components/home/Details.vue')
// 创建路由实例   建立路由
let  router = new VueRouter({
  // 有#的路径，就是Hash路由；没有#的就是history路由。
  // Hash模式唯一的缺点，带个#，比较难看
  // History的优点是url比较正常，它的缺点是部署后刷新视图会报404（解决办法：要求后端做重定向处理）
    mode:'hash', 
    // History  该模式在服务器上线的时候刷新会404 
    routes:[
    // 命名视图：给router-view命名
    // alias 给路由和匹配关系使用的的小名
    // name 给路由和匹配关系使用的一个名字
        {path:"",component:Home},
        {path:"/home",component:Home},
        {path:"/find",component:Find},
        {path:"/user",component:User},
        {path:"/car",component:Car},
        {path:"/users/userLogin",component:Login},
        {path:'/users/register',component:Register},
         // 动态路由：冒号后面的id是一个变量，在/detail对应的组件中使用 this.$route.params获取动态id
          // 路由传参：props开启路由传参，并且允许接受参数的那个组件使用props属性来接收
        {path:'/details/:id',component:Details, props: true }
        // {path:"/tabbar",component:TabBra},
        // redirect  重定向  从一个路径跳转到另一个路径
    ]
});

// beforeEach  是一个钩子函数
router.beforeEach((to,from,next)=>{

if(to.fullPath == '/home/a'){
let login=true;
  if(login){
    next()
  }else{
    next('/user')
  }
}else{
  next()
}
})
export default  router