import axios from "axios";
import qs from "qs";
import { message } from "antd";
import store from "../store";

/**
 * @function 封装post与get请求
 *           错误代码的统一返回
 */

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(config => {
  let res = localStorage.getItem("userInfo");
  config.headers["x-token"] = JSON.parse(res).token;
  return config;
});

axios.interceptors.response.use(function(response) {
  let status = response.status;
  if (status >= 400 && status < 500) {
    switch (status) {
      case 403:
        message.error(status + "抱歉你没有权限");
        break;
      case 401:
        message.error(status + "抱歉你没有权限");
        break;
    }
  } else if (status >= 500) {
    // message.error(status+"服务器错误")
  } else {
    return response.data;
  }
});

export default axios;
