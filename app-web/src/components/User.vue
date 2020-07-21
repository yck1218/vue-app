<template>
<div>
    <h1>
    李湘毅傻的可以
    </h1>
     <TabBar></TabBar>
</div>
</template>
<script>
export default {
    name:'User',
    components:{
        TabBar:()=> import('@/components/common/TabBar.vue')
    },
mounted(){
 
}

}
</script>

<style lang='scss'>

.box1{
font-size: 24px;

i{
    color: red;
}
}
</style>