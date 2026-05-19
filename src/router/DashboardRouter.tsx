import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardPage from "@/pages/dashboard/dashboard/page";
import OrdersPage from "@/pages/dashboard/order/page";
import ProductsPage from "@/pages/dashboard/product/page";
import WarehousePage from "@/pages/dashboard/were-house/page";
import IntegrationPage from "@/pages/dashboard/integration/page";
import ProductAddCard from "@/pages/dashboard/product-card-add/page";
import Profile from "@/pages/dashboard/profile/page";
import NotificationsPage from "@/pages/dashboard/notifications/page";
import MappingPage from "@/pages/dashboard/mappping/page";
import CommentPage from "@/pages/dashboard/comment/page";
import SubscriptionPage from "@/pages/dashboard/subscription/page";
import AnswerPage from "@/pages/dashboard/answer/page";
import Chat from "@/pages/dashboard/chat/page";
import NotFoundPage from "@/pages/not-found/page";
const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="/admin" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/add" element={<ProductAddCard />} />
        <Route path="warehouse" element={<WarehousePage />} />
        <Route path="warehouse/mapping" element={<MappingPage />} />
        <Route path="integration" element={<IntegrationPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="comment" element={<CommentPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="answers" element={<AnswerPage />} />
        <Route path="chat" element={<Chat />} />
        <Route path="subscription" element={<SubscriptionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default DashboardRouter;
