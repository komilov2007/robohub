import { Box } from "@mui/material";
import Sidebar from "@/components/sidebar/page";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const SIDEBAR_OPEN_WIDTH = 252;
const SIDEBAR_COLLAPSED_WIDTH = 80;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed
    ? SIDEBAR_COLLAPSED_WIDTH
    : SIDEBAR_OPEN_WIDTH;

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#F8FAFC" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${sidebarWidth}px`,
          height: "100vh",
          transition: "width 0.3s ease",
          overflow: "hidden",
        }}
      >
        <Sidebar onCollapseChange={setCollapsed} />
      </Box>

      <Box
        component="main"
        sx={{
          flex: 1,
          ml: `${sidebarWidth}px`,
          width: `calc(100% - ${sidebarWidth}px)`,
          minWidth: 0,
          minHeight: "100vh",
          background: "#F5F7FA",
          overflow: "hidden",
          transition: "margin-left 0.3s ease, width 0.3s ease",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}