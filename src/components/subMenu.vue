<template>
  <div class="subMenu">
    <el-aside  width="200px" style="background-color: #2b333e;" class="menu">
      <div class="titles">后台管理系统</div>
      <el-menu
        background-color="#2b333e"
        text-color="#fff"
        :unique-opened="true"
        active-text-color="#5a98de"
        :default-active="onRoutes"
        router
      >
        <menuTree :menuData="list"></menuTree>
    </el-menu>
    </el-aside>
  </div>
</template>
<script>
import menuTree from './menuTree'
export default {
  components:{
    menuTree
  },
  data() {
    return {
      list: [
        {
          title: "平台管理",
          url: "dashboard"
        },
        {
          title: "用户管理",
          url: "2",
          child: [
            {
              title: "会员列表",
              url: "users"
            },
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>
<style lang="scss">
.subMenu{
    background-color: #2b333e;
    height: 100vh;
    overflow-y: scroll;
    width: 200px;
    .titles{
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      font-size: 26px;
    }
    .el-menu{
    border: none;
    // padding: 0 10px;
    box-sizing: border-box;
    background-color: #2b333e;
    .el-menu-item,.el-submenu__title{
      height: 50px;
      line-height: 50px;
    }
    .el-menu-item-group__title{
      padding: 0;
    }
    li{ 
      background-color: #2b333e;
    }
    
  }
}
</style>