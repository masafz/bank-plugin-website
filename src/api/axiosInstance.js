import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const status = error.response?.status;
    if (status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    if (status === 403) console.error("Forbidden: You don't have access.");
    if (status === 500) console.error("Server error. Please try again later.");
    return Promise.reject(error.response?.data || error.message);
  }
);

export default axiosInstance;