import { Box } from "@mui/material";
import Sidebar from "@/pages/admin/sidebar/page";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const SIDEBAR_OPEN_WIDTH = 262;
const SIDEBAR_COLLAPSED_WIDTH = 0;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(() => window.innerWidth < 900);

  const sidebarWidth = collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_OPEN_WIDTH;

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;
    const originalTouchAction = body.style.touchAction;
    const originalOverscrollBehavior = body.style.overscrollBehavior;

    const isMobile = window.innerWidth < 900;
    const shouldLock = !collapsed && isMobile;

    if (shouldLock) {
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
      body.style.overscrollBehavior = "none";
    } else {
      body.style.overflow = originalOverflow;
      body.style.touchAction = originalTouchAction;
      body.style.overscrollBehavior = originalOverscrollBehavior;
    }

    return () => {
      body.style.overflow = originalOverflow;
      body.style.touchAction = originalTouchAction;
      body.style.overscrollBehavior = originalOverscrollBehavior;
    };
  }, [collapsed]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !collapsed && window.innerWidth < 900) {
        setCollapsed(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [collapsed]);

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
            md: 1300,
          },
        }}
      >
        <Sidebar collapsed={collapsed} onCollapseChange={setCollapsed} />
      </Box>

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

      <Box
        component="main"
        sx={{
          flex: 1,

          ml: {
            xs: 0,
            md: `${sidebarWidth}px`,
          },

          width: {
            xs: "100%",
            md: `calc(100% - ${sidebarWidth}px)`,
          },

          minWidth: 0,
          height: "100vh",
          minHeight: 0,

          background: "#F5F7FA",

          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
          overscrollBehavior: "contain",

          transition: "margin-left 0.3s ease, width 0.3s ease",
        }}
      >
        <Outlet context={{ collapsed }} />
      </Box>
    </Box>
  );
}
