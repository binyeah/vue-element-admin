// import fetch  from './index'
import Axios from './index';
const api = {};

// 新歌推荐
api.newsong= params => Axios.get('/personalized/newsong', params);

export default api;