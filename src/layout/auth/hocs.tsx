import type { ReactNode } from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

type PublicRouteProps = {
  children?: ReactNode;
};

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const token = Cookies.get("user");

  if (token) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
