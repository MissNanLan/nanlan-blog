import axios from 'axios';
// import qs from 'qs';
import { message } from 'antd';
// import store from '../store';

/**
 * @function 封装post与get请求
 *           错误代码的统一返回
 */

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use((config) => {
  const res = localStorage.getItem('userInfo');
  const _config = config;
  _config.headers['x-token'] = (JSON.parse(res) || {}).token;
  return config;
});

axios.interceptors.response.use((response) => {
  const {status} = response;
  if (status >= 400 && status < 500) {
    switch (status) {
      case 403:
        message.error(status + '抱歉你没有权限');
        break;
      case 401:
        message.error(status + '抱歉你没有权限');
        break;
      default:
    }
  } else if (status >= 500) {
    // message.error(status+"服务器错误")
  } else {
    return response.data;
  }
  return response;
});

export default axios;
