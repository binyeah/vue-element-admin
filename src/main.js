import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/app.css'
import router from './router'

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
    document.title = to.meta.title
    }
    next()
})
Vue.config.productionTip = false
Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
