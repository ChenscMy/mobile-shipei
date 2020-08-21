import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: "/api", // 基础路径：所有请求的公共路径
  timeout: 10000, // 如果请求超过10s都没有响应结果，就自动中断请求
  headers: {
    // 公共的请求头参数
  },
});
// 设置axios拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  });

// 响应拦截器
axiosInstance.interceptors.response.use(
  // 响应成功触发的回调函数（status: [200, 300)）
  // 响应成功之后，用户设置回调函数之前触发
  (res) => {
    return res
  }
);

export default axiosInstance;
