<template>
    <div class="app-body">
        <div class="app-header padding-24" ref="appHeader">
            <slot name="header-left"></slot>
            <slot name="header-right"></slot>
        </div>
        <div class="app-content padding-24" ref="appContent" :style="appContentStyle">
            <div class="content">
                <slot name="content"></slot>
            </div>
            <div class="foot">
                <slot name="foot"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            appContentStyle:{}
        }
    },
    mounted() {
        this.setAppContentStyle()
    },
    methods: {
        setAppContentStyle(){
            const appHeaderHeight = this.$refs.appHeader.getBoundingClientRect().height
            this.appContentStyle = {height:`calc(100% - ${appHeaderHeight}px)`}
        }
    },
}
</script>
<style lang="scss" scoped>
.app-body{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    .app-header{
        width: 100%;
        height: auto;
        padding: 10px 0;
        box-sizing: border-box;
    }
    .app-content{
        .content{
            // background-color: pink;
            width: 100%;
            height: calc(100% - 60px);
            position: relative;
        }
        .foot{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
        }
    }
}
</style>