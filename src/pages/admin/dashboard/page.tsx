import { memo } from "react";
import { Box } from "@mui/material";
import DashboardStatsSection from "@/components/dashboard/stats";
import AnalyticsDashboard from "@/components/dashboard/analitika";
import OrdersPage from "@/pages/admin/order/page";

const Page = () => {
  return (
    <Box>
      <DashboardStatsSection />
      <Box sx={{ padding: "10px" }}>
        <AnalyticsDashboard />
      </Box>
      <OrdersPage />
    </Box>
  );
};

export default memo(Page);
