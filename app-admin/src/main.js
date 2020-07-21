// 入口文件
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor, /* { default global options } */)
Vue.config.productionTip = false

import router from './router'
import store from './store/'  //省略了index.js
import api from '@/utils/api'
import socket from  '@/utils/socket'
Vue.prototype.$socket=socket
Vue.prototype.$api = api  // 把api接口文件赋值给原型。然后在所有的页面都可以用this访问
Vue.use(ElementUI)
new Vue({    // router store 是一个选项 是一个键值对   
  router,
  store,
  render: h => h(App),
}).$mount('#app')
