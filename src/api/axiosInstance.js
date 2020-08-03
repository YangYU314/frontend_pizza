import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://idea-pizza-backend.herokuapp.com",
  timeout: 5000,
  headers: { withCredentials: "true" },
  // data:{}
});

axiosInstance.interceptors.request.use(
  (config) => {
    //public apis should not have token in the header
    if (
      config.url === "/user/login" ||
      config.url === "/products" ||
      config.url === "/user/signup"
    ) {
      return config;
    } else {
      let token = window.localStorage.getItem("Authorization");
      if (token) {
        //put token to the header
        config.headers.authorization = `${token}`;
        return config;
      } else {
        alert("You haven't log in yet!");
      }
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const { authorization } = response.headers;
    //if there is token in the header,put it to the local storage;
    if (authorization) {
      window.localStorage.setItem("Authorization", `Bearer ${authorization}`);
    }
    return response;
  },
  (error) => {
    //if status error 401 or 405, auth error, go back to login
    if (error.response) {
      const { status } = error.response;
      if (status === 401 || status === 405) {
        alert("You haven't log in yet!");
      }
    }
  }
);

export default axiosInstance;
