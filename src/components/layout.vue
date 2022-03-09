<template>
  <div class="index">
    <el-container style="height: 100%; ">
      <sub-menu/>
      <el-container class="view">
        <el-header>
            <app-header/>
        </el-header>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import subMenu from "./subMenu"
import appHeader from "./appHeader"
export default {
  components:{
    subMenu,
    appHeader,
  },
  data() {
    return {
      AuthMods:[],
      
      
    };
  },

  created(){
       
  },
  
  methods:{
    
    
  }
};
</script>
<style lang="scss" scoped>
.index{
  .titles{
      text-align: center;
      font-weight: bold;
      line-height: 60px;
      color: #fff
    }
    width: 100%;
    height: 100%;
    position: absolute;
  
}
.el-header{
  background-color: #fff;
}
.el-main{
  padding: 10px;
  background-color: #f5f5f5
}
.view{
  width: calc(100% - 200px);
}
</style>


