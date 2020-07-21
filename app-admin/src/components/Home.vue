<template>
  <div class="home">
    <!-- 头部组件 -->
    <Nav></Nav>
    <!-- 中间内容 -->
    <el-container>
      <!-- 侧边栏 -->
      <LeftNav></LeftNav>
      <el-container>
        <el-main>
          <Content></Content>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  components: {
    Nav: () => import("./layout/Nav.vue"),
    LeftNav: () => import("./layout/LeftNav.vue"),
    // ContentNav: () => import("./layout/ContentNav.vue"),
    Content: () => import("@/components/layout/Content")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style  lang='scss'>
* {
  margin: 0;
  padding: 0;
}
.home {
  height: 100%;
  width: 100%;
  .el-col-top {
    height: 80px;

    & > div {
      width: 100%;
      height: 100%;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .el-header,
  .el-footer {
    background-color: #edeff1;
  }
  .el-aside {
    .el-header {
      background-color: #edeff1;
      color: #333;
    }
    .el-aside {
      color: #333;
    }
  }
  .el-main {
    .el-form {
      width: 470px;
      text-align: center;
    }
  }
  .el-breadcrumb {
    line-height: 60px;
  }
}
.el-container {
  height: 680px;
}
.grid-content {
  text-align: center;
  line-height: 80px;
  // vertical-align: middle;
}
</style>