import axios from "axios";
// redux

import { store } from "../redux/store";
import { resetLogin } from "../redux/slide/app.slice";
import { APP_URL } from "../constants/Url";

const handleRequest = (config) => {
  const storeState = store.getState();
  const access_token = storeState?.persistedReducer.app.token;
  if (access_token && config.headers) {
    config.headers["Authorization"] = "Bearer " + access_token;
  }

  config.validateStatus = function (status) {
    return status >= 200 && status < 300;
  };

  return config;
};

// Xử lý lỗi request
const handleRequestError = (error) => {
  return Promise.reject(error);
};

// Xử lý response thành công
const handleResponse = (response) => {
  return response.data;
};

// Xử lý response lỗi
const handleResponseError = async (error) => {
  console.log("error axios", error);
  if (error.response?.status === 401) {
    const dispatch = store.dispatch;
    dispatch(resetLogin());
    return;
  }

  if (error.response?.status !== 404) {
    // Xử lý thêm nếu cần
  }

  return Promise.reject(error.response?.data);
};

// Hàm gán interceptor dùng chung
const attachInterceptors = (axiosInstance) => {
  axiosInstance.interceptors.request.use(handleRequest, handleRequestError);
  axiosInstance.interceptors.response.use(handleResponse, handleResponseError);
};

// Axios instance cho upload file
const axiosClientFile = axios.create({
  baseURL: APP_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
attachInterceptors(axiosClientFile);

// Nếu cần axiosClient mặc định (application/json)
const axiosClient = axios.create({
  baseURL: APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
attachInterceptors(axiosClient);

// Xuất các client
export { axiosLoginClient, axiosClientFile, axiosClientV2, axiosClient };
