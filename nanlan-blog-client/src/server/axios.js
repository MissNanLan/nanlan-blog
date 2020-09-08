import axios from 'axios';
import { message } from 'antd';

axios.defaults.timeout = 8000;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem('userInfo');
  const _config = config;
  if (userInfo) {
    _config.headers['x-token'] = JSON.parse(userInfo).token || {};
  }
  return _config;
}, (error) => {
   return Promise.reject(error);
});

axios.interceptors.response.use(
  (response) => {
    const { status, data } = response;
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
    }
    return data;
  },
  (error) => {
    Promise.reject(error.response);
  }
);

export default axios;
