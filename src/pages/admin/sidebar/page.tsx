import { usePage } from "./usePage";

import {
  SidebarWrap,
  TopArea,
  BrandWrap,
  ToggleButton,
  TopBlock,
} from "./styled";

import IconLogo from "@/assets/icons/sidebar-logo.svg?react";
import IconArrow from "@/assets/icons/sidebar-arrow.svg?react";
import IconArrowLeft from "@/assets/icons/sidebar-arrow-left.svg?react";
import SidebarMenu from "@/components/sidebar/SidebarMenu";
import SidebarBottom from "@/components/sidebar/SidebarBottom";

type SidebarPageProps = {
  collapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
};

const SidebarPage = ({
  collapsed: controlledCollapsed,
  onCollapseChange,
}: SidebarPageProps) => {
  const {
    collapsed,
    menus,
    notification,
    user,
    handleToggleSidebar,
    handleNavigate,
    isActive,
    t,
  } = usePage(controlledCollapsed, onCollapseChange);

  return (
    <SidebarWrap collapsed={collapsed}>
      <TopBlock>
        <TopArea collapsed={collapsed}>
          {!collapsed && (
            <BrandWrap to={"/"} collapsed={collapsed}>
              <IconLogo />
            </BrandWrap>
          )}

          <ToggleButton collapsed={collapsed} onClick={handleToggleSidebar}>
            {collapsed ? <IconArrowLeft /> : <IconArrow />}
          </ToggleButton>
        </TopArea>

        <SidebarMenu
          collapsed={collapsed}
          menus={menus}
          isActive={isActive}
          handleNavigate={handleNavigate}
          t={t}
        />
      </TopBlock>

      <SidebarBottom
        collapsed={collapsed}
        notification={notification}
        user={user}
        handleNavigate={handleNavigate}
        handleToggleSidebar={handleToggleSidebar}
        t={t}
      />
    </SidebarWrap>
  );
};

export default SidebarPage;
