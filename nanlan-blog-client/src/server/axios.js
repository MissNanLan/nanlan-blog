/* eslint-disable */
import axios from "axios";
import { message } from "antd";

axios.defaults.timeout = 8000;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem("userInfo");
    const _config = config;
    if (userInfo) {
      _config.headers["x-token"] = JSON.parse(userInfo).token || {};
    }
    return _config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const reponseErr = {
  400: "服务器连接",
  500: "内部服务器错误",
  404: "请求的资源（网页等）不存在",
  405: "客户端请求中的方法被禁止",
};

axios.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    if (status >= 400 && status < 500) {
      message.error(status + ":" + reponseErr(status));
      return;
    }
    if (data.status === 403) {
      message.error("登录已经失效，请重新登录")
      window.location.href = "/login";
    }
    return data;
  },
  (error) => {
    Promise.reject(error.response);
  }
);

export default axios;
