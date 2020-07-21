<template>
  <div id="app">
     <router-view  name='login' v-if = '$route.path =="/login"'></router-view >
    <Home v-else></Home>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
     Home: ()=>import('@/./components/Home'),
  },
  mounted(){
  }
}
</script>

<style>
html,body{
  width: 100%;
  height: 100%;

}
#app{
  width: 100%;
  height: 100%;

}
</style>
