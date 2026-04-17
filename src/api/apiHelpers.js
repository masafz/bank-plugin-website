import axiosInstance from "./axiosInstance";

export const get = (url, params = {}, config = {}) => {
  return axiosInstance.get(url, { params, ...config });
};

export const post = (url, data = {}, config = {}) => {
  return axiosInstance.post(url, data, config);
};

export const put = (url, data = {}, config = {}) => {
  return axiosInstance.put(url, data, config);
};

export const patch = (url, data = {}, config = {}) => {
  return axiosInstance.patch(url, data, config);
};

export const del = (url, config = {}) => {
  return axiosInstance.delete(url, config);
};