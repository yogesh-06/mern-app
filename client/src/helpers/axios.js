import axios from "axios";

const baseURL = "http://localhost:8080/api/";
let headers = {};

if (localStorage.getItem("token")) {
  headers = { Authorization: `Bearer ${localStorage.getItem("token")}` };
}

const axiosInstance = axios.create({ baseURL, headers });

axiosInstance.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      config.headers = headers;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Axios Response =>", response);
    return response;
  },
  (error) => {
    console.log("Axios Error =>", error);
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
