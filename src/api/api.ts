import axios from "axios";

const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const [key, ...rest] = cookie.split("=");

    if (key === name) {
      return decodeURIComponent(rest.join("="));
    }
  }

  return null;
};

export const api = axios.create({
  baseURL: "/api",
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("access_token");
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
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
