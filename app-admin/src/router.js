import Vue from 'vue'
import VueRouter from  'vue-router'
Vue.use(VueRouter)  //  注册路由

// 引入模块 按需要加载
const Login = ()=> import('@/components/Login')
const ContentMain =()=> import('@/components/layout/content/ContentMain')
const ContentTable =()=> import('@/components/layout/content/ContentTable')
const AAA = ()=>import('@/components/layout/content/AAA')
const Char= ()=>import('@/components/layout/content/Char')
const Txts= ()=>import('@/components/layout/content/Txts')
const Goods= ()=>import('@/components/layout/content/Goods')
import content from '@/utils/content'

const routes = []

content.map(ele=>{
  routes.push({path:ele.path, component:ele.comm})
  if(ele.children) {
    ele.children.map(ele=>{
      routes.push({path:ele.path, component:ele.comm})
    })
  }
})
let   router =new VueRouter({
    mode:'hash' , //路由模式
    routes:[
        {path:"/",component:AAA},
        {path:"/login", components: {login: Login } },
        {path:"/home",component:AAA}, 
        {path:"/home/contentMain",component:ContentMain},
        {path:"/home/contentTable",component:ContentTable},
        {path:"/home/aaa",component:AAA},
        {path:"/home/char",component:Char},
        {path:"/home/txts",component:Txts},
        {path:"/goods",component:Goods},

    ]
})


// 路由拦截
router.beforeEach((to,from,next)=>{
  // if(to.fullPath == '/home'){
  //   let token =sessionStorage.getItem('token')
  //   if(!token){
  //     alert('跳转失败！！！')
  //     return next('/login')
  //   }
    
  // }
    next()


})

export default router