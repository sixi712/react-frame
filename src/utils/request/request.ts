import axios from "axios";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API
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
