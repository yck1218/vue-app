<template>
  <div class="lef-tnav">
    <el-aside width="200px">
      <el-menu unique-opened >
        <el-submenu v-for='(item,index) in content' :index="index+''" :key='item.id'>
              <template slot="title">
                <i :class="item.icon"></i>
                <router-link :to='item.path' tag='span' v-text='item.title' exact-active-class='on'  ></router-link>
              </template>

          <el-menu-item
            v-for='i in item.children'
            :key='i.id'
            :index="i.id+''"
          >
            <template >
              <i :class="i.icon"></i>
              <router-link :to='i.path' tag='span' v-text='i.title'></router-link>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
import content from '@/utils/content'

export default {
 data: function() {
  return{
       content
  }

    

  },
};
</script>

<style lang='scss' >
.lef-tnav {
  overflow: auto;
}
</style>