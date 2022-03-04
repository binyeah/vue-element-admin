<template>
    <div>
        <template v-for="(item,index) in menuData" >
            <el-submenu :index="item.url" v-if="item.child" :key="index">
                <template slot="title">
                    <i class="el-icon-s-platform"></i>
                    {{item.title}}
                </template>
                <template v-for="(items,indexs) in item.child" >
                    <el-menu-item :index="items.url" v-if="!items.child || !items.child.length" :key="indexs">{{items.title}}</el-menu-item>
                    <el-submenu :index="items.url" :key="indexs" v-else>
                    <template slot="title">
                        <i class="el-icon-s-platform"></i>
                        {{items.title}}
                    </template>
                    <menu-tree :menuData="items.child"></menu-tree>
                    </el-submenu>
                </template>
            </el-submenu>
            <el-menu-item :index="item.url" v-else :key="index">
                <i class="el-icon-s-platform"></i>
                <span slot="title">{{item.title}}</span>
            </el-menu-item>
        </template>
    </div>
</template>
<script>
export default {
    name:"menuTree",
    props:{
        menuData:{
            type:Array,
            default:[],
        }
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>

</style>