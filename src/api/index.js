import axios from 'axios'
import Vue from 'vue';
// import { Toast } from 'vant';
// Vue.use(Toast);

// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://music.eleuu.com'
} else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = 'http://music.eleuu.com'
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://music.eleuu.com'
}
// http超时
axios.defaults.timeout = 10000;
//http request 拦截器
// axios.interceptors.request.use(
//     config => {
//       // 获取token
//       const token = localStorage.getItem('cc_token');
//       // 设置参数格式
//       if(!config.headers['Content-Type']){
//         config.headers = {
//           'Content-Type':'application/json',
//         };
//       }
//       // 添加token到headers
//       if(token){
//         config.headers.token = token
//       }
//       // 鉴权参数设置
//       if(config.method === 'get'){
//          //get请求下 参数在params中，其他请求在data中
//         config.params = config.params || {};
//         let json = JSON.parse(JSON.stringify(config.params));
//         //一些参数处理
//       }else{
//         config.data = config.data || {};
//         //一些参数处理
//       }
//       return config;
//     },
//     err => {
//       return Promise.reject(err);
//     }
//   );

//   //http response 拦截器
// axios.interceptors.response.use(
//     response => {
//       //一些统一code的返回处理
//       if(response.data.code === 501){
//         // 登录验证
//         //做了个示例跳转项目中登录，并记录下相对路径
//         router.push({
//           name:'login',//从哪个页面跳转
//           query:{
//             retUrl:window.location.href.split('#')[1] || '',
//             is_new_user_url:1
//           }
//         })
//       }
//       return response;
//     },
//     error => {
//       return Promise.reject(error)
//     }
//   );
function request(url,params,method,headers,options){
//   console.log('method',method)
    return new Promise((resolve,reject)=>{
        let data = {}
        // get请求使用params字段
        if(method ==='get')data = {params}
        // post请求使用data字段
        if(method ==='post')data = {data:params}
        axios({
            url,
            method,
            headers,
            ...data,
            ...options,
        }).then((res)=>{
            // 此处作用很大，可以扩展很多功能。
            // 比如对接多个后台，数据结构不一致，可做接口适配器
            // 也可对返回日期/金额/数字等统一做集中处理
            if(res.data.code === 200){
                resolve(res.data);
            }else{
                // 通过配置可关闭错误提示
                // if(options.error)Message.error(res.message);
                // Toast(res.data.message)
                reject(res);
            }
        }).catch((error)=>{
        //   Toast('网络错误，请重试！')
            // Message.error(error.message)
        }).finally(()=>{
            // loadingInstance.close();
        })
    })
};
export default {
    post(url, data){
        return request(url, data,'post',{
            'Content-Type': 'application/json; charset=UTF-8'
        })
    },
    get(url, data){
        return request(url, data,'get',{
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        })
    },
    postFormData(url, data){
        return request(url, data,'post',{
            'Content-Type': 'multipart/form-data'
        })
    }
}