<template>
    <app-body>
        <div slot="header-left">
            <div class="center-col left">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="选择年份">
                        <el-date-picker
                        @change="select(year)"
                        v-model="year"
                        type="year"
                        value-format="yyyy"
                        placeholder="选择年">
                        </el-date-picker>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div slot="header-right">
            <el-button type="primary">主要按钮</el-button>
        </div>
        <el-table slot="content" :data="songList" stripe border style="width: 100%" height="100%">
                <el-table-column type="index" width="50" label="序号">
                </el-table-column>
                <el-table-column label="id" min-width="300" prop="id" show-overflow-tooltip> 
                </el-table-column>
                <el-table-column label="歌曲名称" min-width="300" prop="name" show-overflow-tooltip> 
                </el-table-column>
            </el-table>
        <div slot="foot" >
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-size="10"
                layout="total, prev, pager, next"
                :total="total_page">
            </el-pagination>
        </div>
    </app-body>
</template>
<script>
import appBody from "@/components/appBody"
import api from '@/api/proxy.js';
export default {
    components:{
        appBody
    },
    data(){
        return{
            addbox:false,
            input:'',
            total_page:1,
            userlist:[],
            form:{},
            page:0,
            year:'',
            songList:[]
        }
    },
    created(){

    },
    mounted(){
        this.getNewSongs()
    },
    methods:{
        async getNewSongs(){
            // console.log(api)
            try{
                const res = await api.newsong()
                this.songList = res.result || []
                console.log(this.songList)
            }catch(e){
                console.log(e)
            }
        },
        select(){
            // console.log(this.year)
        },
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            //console.log(`当前页: ${val}`);
            this.page=val-1          
        },
        
    }
}
</script>
<style lang="scss">


</style>
