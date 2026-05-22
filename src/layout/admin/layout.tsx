import { Outlet } from "react-router-dom";

import Sidebar from "@/pages/admin/sidebar/page";

import { usePage } from "./usePage";

import {
  LayoutWrapper,
  MainContent,
  MobileOverlay,
  SidebarWrapper,
  MobileBtn,
} from "./styled";
import { ArrowRight } from "@mui/icons-material";
import { ProtectedRoute } from "./hocs";

export default function AdminLayout() {
  const { collapsed, setCollapsed, isMobile, sidebarWidth } = usePage();

  return (
    <ProtectedRoute>
      <LayoutWrapper>
        <SidebarWrapper $sidebarWidth={sidebarWidth} $collapsed={collapsed}>
          <Sidebar collapsed={collapsed} onCollapseChange={setCollapsed} />
        </SidebarWrapper>
        {collapsed && isMobile && (
          <MobileBtn onClick={() => setCollapsed(false)}>
            <ArrowRight />
          </MobileBtn>
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
    </ProtectedRoute>
  );
}
