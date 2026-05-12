import { Box } from "@mui/material";
import Sidebar from "@/components/sidebar/page";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const SIDEBAR_OPEN_WIDTH = 252;
const SIDEBAR_COLLAPSED_WIDTH = 0;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_OPEN_WIDTH;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F8FAFC",
        position: "relative",
      }}
    >
      {/* SIDEBAR */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,

          width: `${sidebarWidth}px`,
          height: "100vh",

          transition: "width 0.3s ease",

          overflow: "visible",

          zIndex: {
            xs: 9999,
            md: 1,
          },
        }}
      >
        <Sidebar onCollapseChange={setCollapsed} />
      </Box>

      {/* MOBILE BACKDROP */}
      {!collapsed && (
        <Box
          onClick={() => setCollapsed(true)}
          sx={{
            display: {
              xs: "block",
              md: "none",
            },

            position: "fixed",
            inset: 0,

            background: "rgba(0,0,0,0.35)",

            backdropFilter: "blur(4px)",

            zIndex: 9998,
          }}
        />
      )}

      {/* CONTENT */}
      <Box
        component="main"
        sx={{
          flex: 1,

          // DESKTOP
          ml: {
            xs: 0,
            md: `${sidebarWidth}px`,
          },

          width: {
            xs: "100%",
            md: `calc(100% - ${sidebarWidth}px)`,
          },

          minWidth: 0,
          minHeight: "100vh",

          background: "#F5F7FA",

          overflow: "hidden",

          transition: "margin-left 0.3s ease, width 0.3s ease",
        }}
      >
        <Outlet context={{ collapsed }} />
      </Box>
    </Box>
  );
}
