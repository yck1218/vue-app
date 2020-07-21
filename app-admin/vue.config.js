// 只要改变vue.config.js文件后，必须重启项目才能生效
// node.js代码风格
module.exports = {
  // 项目压缩部署
  publicPath: process.env.NODE_ENV === 'production'
  ? './'
  : '/',
  devServer: {
    port: 8899,
    proxy: {
      // 代理，转发
      // 当请求URL中包含 '/user' 字符串时，才执行代理转发
      '/user':{
        target:'http://localhost:3000',
        ws: true,
        changeOrigin: true
      },
      '/upload':{
        target:'http://localhost:3000',
        ws: true,
        changeOrigin: true
      },
      '/descs':{
        target:'http://localhost:3000',
        ws: true,
        changeOrigin: true
      },
    }
  }
}
