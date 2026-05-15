import { useState } from "react";

import IconLogo from "@/assets/icons/sidebar-logo.svg?react";
import IconArrow from "@/assets/icons/sidebar-arrow.svg?react";
import IconArrowLeft from "@/assets/icons/sidebar-arrow-left.svg?react";

import SidebarProfilImg from "@/assets/img/profil.webp";

import { usePage } from "./usePage";

import {
  AvatarWrap,
  Badge,
  BottomArea,
  BrandWrap,
  MenuIconWrap,
  MenuItem,
  MenuText,
  MenuWrap,
  NotificationsLeft,
  NotificationsRow,
  NotificationsText,
  SidebarWrap,
  ToggleButton,
  TopArea,
  UserCard,
  UserInfo,
  UserName,
  UserPhone,
  TopBlock,
  SoonModal,
  SoonTitle,
  MenuBadge,
  SoonBadge,
  SoonText,
  MenuItemWrap,
  SoonWrapper,
  SubBottomBox,
  SubCardWrapper,
  SubDays,
  SubIconBox,
  SubInfoBox,
  SubMonth,
  SubPrice,
  SubPriceBox,
  SubProgress,
  SubStatus,
  SubTextBox,
  SubTitle,
  SubTopBox,
} from "./styled";
import { StarRounded } from "@mui/icons-material";

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

  const NotificationIcon = notification.icon;
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
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

        {!collapsed && (
          <MenuWrap>
            {menus.map((item, index) => {
              const Icon = item.icon;
              const IconAct = item.iconAct;

              const active = isActive(item.path);

              const firstItem = index === 0;

              return (
                <MenuItemWrap
                  key={item.id}
                  onMouseEnter={() => firstItem && setHoveredMenu(item.id)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <MenuItem
                    active={active}
                    collapsed={collapsed}
                    firstitem={firstItem}
                    disablecursor={firstItem}
                    onClick={() => {
                      if (!firstItem) {
                        handleNavigate(item.path);
                      }
                    }}
                  >
                    <MenuIconWrap active={active}>
                      {active ? <IconAct /> : <Icon />}
                    </MenuIconWrap>

                    <MenuText active={active} collapsed={collapsed}>
                      {item.title}
                    </MenuText>

                    {firstItem && <MenuBadge>TEZ KUNDA</MenuBadge>}
                  </MenuItem>

                  {firstItem && hoveredMenu === item.id && (
                    <SoonModal>
                      <SoonWrapper>
                        <SoonTitle>{t("sidebar_dashboard")}</SoonTitle>

                        <SoonBadge>{t("sidebar_soon")}</SoonBadge>
                      </SoonWrapper>

                      <SoonText>{t("sidebar_soon_description")}</SoonText>
                    </SoonModal>
                  )}
                </MenuItemWrap>
              );
            })}
          </MenuWrap>
        )}
      </TopBlock>

      {!collapsed && (
        <BottomArea>
          <SubCardWrapper
            to={"/dashboard/subscription"}
            collapsed={collapsed}
            onClick={() => {
              if (window.innerWidth < 900) {
                handleToggleSidebar();
              }
            }}
          >
            <SubTopBox>
              <SubInfoBox>
                <SubIconBox>
                  <StarRounded
                    sx={{
                      color: "#D9FF66",
                      fontSize: 16,
                    }}
                  />
                </SubIconBox>

                <SubTextBox>
                  <SubTitle>{t("subscription_active")}</SubTitle>

                  <SubStatus>{t("subscription_active")}</SubStatus>
                </SubTextBox>
              </SubInfoBox>
            </SubTopBox>

            <SubBottomBox>
              <SubDays>87 {t("subscription_days_left")}</SubDays>

              <SubPriceBox>
                <SubPrice>500,000</SubPrice>

                <SubMonth>/mo</SubMonth>
              </SubPriceBox>
            </SubBottomBox>

            <SubProgress variant="determinate" value={72} />
          </SubCardWrapper>
          <NotificationsRow
            to={"/dashboard/notifications"}
            collapsed={collapsed}
            onClick={() => handleNavigate("/dashboard/notifications")}
          >
            <NotificationsLeft>
              <MenuIconWrap>
                <NotificationIcon />
              </MenuIconWrap>

              <NotificationsText collapsed={collapsed}>
                {notification.title}
              </NotificationsText>
            </NotificationsLeft>

            <Badge collapsed={collapsed}>{notification.count}</Badge>
          </NotificationsRow>

          <UserCard
            to={"/dashboard/profile"}
            collapsed={collapsed}
            onClick={() => handleNavigate("/dashboard/profile")}
          >
            <AvatarWrap>
              <img src={user.image || SidebarProfilImg} alt={user.fullName} />
            </AvatarWrap>

            <UserInfo collapsed={collapsed}>
              <UserName>{user.fullName}</UserName>

              <UserPhone>{user.phone}</UserPhone>
            </UserInfo>
          </UserCard>
        </BottomArea>
      )}
    </SidebarWrap>
  );
};

export default SidebarPage;
