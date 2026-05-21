// import { ROUTERS } from "@/constants/router";
// import { lazy, Suspense } from "react";
// import { createBrowserRouter } from "react-router-dom";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { ROUTERS } from "@/constants/router";

import AuthLayout from "@/layout/auth/auth-layout";
import DashboardLayout from "@/layout/admin/dashboard-layout";

import { ProtectedRoute, PublicRoute } from "../layout/hocs/hocs";

import Login from "@/pages/auth/login/page";
import Register from "@/pages/auth/register/page";
import ForgetPassword from "@/pages/auth/forget-password/page";
import OtpVerify from "@/pages/auth/otp-verificate/page";
import OtpReset from "@/pages/auth/otp-reset/page";
import ResetPassword from "@/pages/auth/reset-password/page";
import Success from "@/pages/auth/register-success/page";
import NotFound from "@/pages/not-found/page";
import Dashboard from "@/pages/admin/dashboard/page";
import Orders from "@/pages/admin/order/page";
import Products from "@/pages/admin/product/page";
import ProductAdd from "@/pages/admin/product-card-add/page";
import Warehouse from "@/pages/admin/were-house/page";
import Mapping from "@/pages/admin/mappping/page";
import Integration from "@/pages/admin/integration/page";
import Profile from "@/pages/admin/profile/page";
import Comment from "@/pages/admin/comment/page";
import Notifications from "@/pages/admin/notifications/page";
import Answers from "@/pages/admin/answer/page";
import Chat from "@/pages/admin/chat/page";
import Subscription from "@/pages/admin/subscription/page";

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: ROUTERS.home,
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: ROUTERS.register,
            element: <Register />,
          },
          {
            path: ROUTERS.forget_password,
            element: <ForgetPassword />,
          },
          {
            path: ROUTERS.otp_verify,
            element: <OtpVerify />,
          },
          {
            path: ROUTERS.otp,
            element: <OtpReset />,
          },
          {
            path: ROUTERS.reset_password,
            element: <ResetPassword />,
          },
          {
            path: ROUTERS.register_success,
            element: <Success />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: ROUTERS.admin,
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={ROUTERS.admin_dashboard} replace />,
          },
          {
            path: ROUTERS.admin_dashboard,
            element: <Dashboard />,
          },
          {
            path: ROUTERS.admin_orders,
            element: <Orders />,
          },
          {
            path: ROUTERS.admin_products,
            element: <Products />,
          },
          {
            path: ROUTERS.admin_products_add,
            element: <ProductAdd />,
          },
          {
            path: ROUTERS.admin_warehouse,
            element: <Warehouse />,
          },
          {
            path: ROUTERS.admin_warehouse_mapping,
            element: <Mapping />,
          },
          {
            path: ROUTERS.admin_integration,
            element: <Integration />,
          },
          {
            path: ROUTERS.admin_profile,
            element: <Profile />,
          },
          {
            path: ROUTERS.admin_comment,
            element: <Comment />,
          },
          {
            path: ROUTERS.admin_notifications,
            element: <Notifications />,
          },
          {
            path: ROUTERS.admin_answers,
            element: <Answers />,
          },
          {
            path: ROUTERS.admin_chat,
            element: <Chat />,
          },
          {
            path: ROUTERS.admin_subscription,
            element: <Subscription />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
// const Login = lazy(() => import("@/pages/auth/login/page"));

// export const router = createBrowserRouter([
//   {
//     path: ROUTERS.home,
//     element: (
//       <Suspense fallback={<div>Loading...</div>}>
//         <Login />
//       </Suspense>
//     ),
//   },
// ]);
