<template>
    <div @click="login">登录</div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        login(){
            this.$router.push('/')
        }
    },
}
</script>
<style lang="scss" scoped>

</style>