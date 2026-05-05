import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const resetToken = localStorage.getItem("reset_access_token");

  // 🔥 faqat kerakli endpointlarda qo‘shamiz
  const isResetFlow =
    config.url?.includes("/account/otp/verify/") ||
    config.url?.includes("/account/reset-password/");

  if (resetToken && isResetFlow) {
    config.headers.Authorization = `Bearer ${resetToken}`;
  }

  return config;
});
