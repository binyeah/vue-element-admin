import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/login',
            name:'login',
            component:()=>import('@/view/login'),
            meta:{
                title:'登录'
            }
        },
        {
            path:'/',
            redirect:'dashboard',
            component:()=>import('@/components/layout'),
            children:[
                {
                    path:'dashboard',
                    name:'dashboard',
                    component:()=>import('@/view/dashboard'),
                    meta:{
                        title:'首页'
                    }
                },
                {
                    path:'users',
                    name:'users',
                    component:()=>import('@/view/users'),
                    meta:{
                        title:'用户管理'
                    }
                }
                
            ]
            
        }
    ]
})