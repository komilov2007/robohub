import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardPage from "@/components/dashboard/page";
import OrdersPage from "@/components/order/page";
import ProductsPage from "@/components/product/page";
import WarehousePage from "@/components/were-house/page";
import IntegrationPage from "@/components/integration/page";
import ProductAddCard from "@/components/product-card-add/page";
import Page from "@/components/chat/page";
import Profile from "@/components/profile/page";
import NotificationsPage from "@/components/notifications/page";
import MappingPage from "@/components/mappping/page";
import CommentPage from "@/components/comment/page";
const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="warehouse" element={<WarehousePage />} />
        <Route path="integration" element={<IntegrationPage />} />
        <Route path="chat" element={<Page />} />
        <Route path="/dashboard/products/add" element={<ProductAddCard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/warehouse/mapping" element={<MappingPage />} />
        <Route path="/dashboard/comment" element={<CommentPage />} />
        <Route
          path="/dashboard/notifications"
          element={<NotificationsPage />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default DashboardRouter;
