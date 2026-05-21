import { Outlet } from "react-router-dom";

import Sidebar from "@/pages/admin/sidebar/page";

import { usePage } from "./usePage";

import {
  LayoutWrapper,
  MainContent,
  MobileOverlay,
  SidebarWrapper,
} from "./styled";
import { ArrowRight } from "@mui/icons-material";

export default function MainLayout() {
  const { collapsed, setCollapsed, isMobile, sidebarWidth } = usePage();

  return (
    <LayoutWrapper>
      <SidebarWrapper $sidebarWidth={sidebarWidth} $collapsed={collapsed}>
        <Sidebar collapsed={collapsed} onCollapseChange={setCollapsed} />
      </SidebarWrapper>
      {collapsed && isMobile && (
        <button
          onClick={() => setCollapsed(false)}
          style={{
            position: "fixed",
            top: 12,
            left: 8,
            zIndex: 10000,
            width: 32,
            height: 32,
            borderRadius: 8,
            border: "none",
            background: "#00524F",
            color: "#fff",
          }}
        >
          <ArrowRight />
        </button>
      )}
      {!collapsed && isMobile && (
        <MobileOverlay onClick={() => setCollapsed(true)} />
      )}

      <MainContent $sidebarWidth={sidebarWidth}>
        {/* <Suspense fallback={<CircularIndeterminate />}> */}
        <Outlet context={{ collapsed }} />
        {/* </Suspense> */}
      </MainContent>
    </LayoutWrapper>
  );
}
