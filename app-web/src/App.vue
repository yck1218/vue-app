<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  methods:{
  },
  mounted(){   //挂载后的生命周期
    // console.log(this.$store);
    // 调用cnode接口
  }
}
</script>

<style>
html ,body{
  width: 100%;
  height: 100%;

}
*{
  margin: 0;
  padding: 0;
}
#app {
height: 100%;

position: relative;
}
.box{
position: absolute;
bottom: 0;
height: 50px;
display: flex;
width: 100%;
}
.box span{
  flex: 1;
  line-height: 50px;
  border: 1px solid #ccc;
  text-align: center;
}
.on{
  color: red;
}
</style>
