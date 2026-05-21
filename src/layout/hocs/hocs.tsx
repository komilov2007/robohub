import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTERS } from "@/constants/router";

const adminPath = `/${ROUTERS.admin}/${ROUTERS.admin_dashboard}`;

export const ProtectedRoute = () => {
  const user = Cookies.get("user");

  if (!user) {
    return <Navigate to={ROUTERS.home} replace />;
  }

  return <Outlet />;
};

export const PublicRoute = () => {
  const user = Cookies.get("user");

  if (user) {
    return <Navigate to={adminPath} replace />;
  }

  return <Outlet />;
};
