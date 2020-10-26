import axios from "axios";
import baseConfig from "@BaseConfig";
// 创建axios实例
const service = axios.create({
  baseURL: baseConfig.baseUrl
});
// request拦截器
service.interceptors.request.use(
  config => config,

  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    const passList = [res.code === "000", res instanceof Blob];
    return passList.some(Boolean) ? res : Promise.reject(res);
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
