import { Navigate, Outlet } from "react-router-dom";

// 🔥 COOKIE GETTER
const getCookie = (name: string) => {
  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const [key, ...rest] = cookie.split("=");

    if (key === name) {
      return decodeURIComponent(rest.join("="));
    }
  }

  return null;
};

const ProtectedRoute = () => {
  // 🔥 FAQAT LOGIN TOKEN
  const accessToken = getCookie("access_token");

  // 🔥 REGISTER TOKEN
  const registerToken = getCookie("register_access_token");

  // 🔥 RESET TOKEN
  const resetToken = getCookie("reset_access_token");

  console.log("ACCESS:", accessToken);

  console.log("REGISTER:", registerToken);

  console.log("RESET:", resetToken);

  // ✅ FAQAT ACCESS TOKEN LOGIN
  const isAuthenticated = !!accessToken;

  // ❌ REGISTER/RESET TOKEN LOGIN EMAS
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
