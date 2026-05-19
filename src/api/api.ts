import Cookies from "js-cookie";
import axios from "axios";
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const user = Cookies.get("user");

    const resetToken = localStorage.getItem("reset_access_token");
    const registerToken = localStorage.getItem("register_access_token");

    const url = config.url || "";

    if (url.includes("/account/otp/verify/")) {
      if (registerToken) {
        config.headers.Authorization = `Bearer ${registerToken}`;
      } else if (resetToken) {
        config.headers.Authorization = `Bearer ${resetToken}`;
      }
    } else if (url.includes("/account/reset-password/")) {
      if (resetToken) {
        config.headers.Authorization = `Bearer ${resetToken}`;
      }
    } else {
      if (user) {
        config.headers.Authorization = `Bearer ${user}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
