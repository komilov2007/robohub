import { Navigate, Outlet } from "react-router-dom";
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
  const accessToken = getCookie("access_token");
  const isAuthenticated = !!accessToken;
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
