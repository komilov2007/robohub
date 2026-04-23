import { useEffect } from "react";

import IconLogo from "@/assets/icons/sidebar-logo.svg?react";
import IconArrow from "@/assets/icons/sidebar-arrow.svg?react";
import IconArrowLeft from "@/assets/icons/sidebar-arrow-left.svg?react";

import { usePage } from "./usePage";
import {
  AvatarWrap,
  Badge,
  BottomArea,
  BrandWrap,
  CardWrap,
  Description,
  GlassBlock,
  InstallButton,
  MenuIconWrap,
  MenuItem,
  MenuText,
  MenuWrap,
  NotificationsLeft,
  NotificationsRow,
  NotificationsText,
  PhoneImage,
  SidebarWrap,
  Title,
  ToggleButton,
  TopArea,
  UserCard,
  UserInfo,
  UserName,
  UserPhone,
} from "./styled";

type SidebarPageProps = {
  onCollapseChange?: (collapsed: boolean) => void;
};

const SidebarPage = ({ onCollapseChange }: SidebarPageProps) => {
  const {
    collapsed,
    menus,
    notification,
    user,
    handleToggleSidebar,
    handleNavigate,
    isActive,
    handleInstall,
    cardData,
  } = usePage();

  useEffect(() => {
    onCollapseChange?.(collapsed);
  }, [collapsed, onCollapseChange]);

  const NotificationIcon = notification.icon;

  return (
    <SidebarWrap collapsed={collapsed}>
      <div>
        <TopArea collapsed={collapsed}>
          {!collapsed && (
            <BrandWrap collapsed={collapsed}>
              <IconLogo />
            </BrandWrap>
          )}

          <ToggleButton onClick={handleToggleSidebar}>
            {collapsed ? <IconArrowLeft /> : <IconArrow />}
          </ToggleButton>
        </TopArea>

        <MenuWrap>
          {menus.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            const IconAct = item.iconAct;

            return (
              <MenuItem
                key={item.id}
                active={active}
                collapsed={collapsed}
                onClick={() => handleNavigate(item.path)}
              >
                <MenuIconWrap active={active}>
                  {active ? <IconAct /> : <Icon />}
                </MenuIconWrap>

                <MenuText active={active} collapsed={collapsed}>
                  {item.title}
                </MenuText>
              </MenuItem>
            );
          })}
        </MenuWrap>
      </div>

      {!collapsed && (
        <CardWrap>
          <PhoneImage src={cardData.image} alt={cardData.title} />

          <GlassBlock>
            <Title>{cardData.title}</Title>
            <Description>{cardData.description}</Description>
            <InstallButton onClick={handleInstall}>
              {cardData.buttonText}
            </InstallButton>
          </GlassBlock>
        </CardWrap>
      )}

      <BottomArea>
        <NotificationsRow collapsed={collapsed}>
          <NotificationsLeft>
            <MenuIconWrap>
              <NotificationIcon />
            </MenuIconWrap>

            <NotificationsText collapsed={collapsed}>
              {notification.title}
            </NotificationsText>
          </NotificationsLeft>

          {!collapsed && (
            <Badge collapsed={collapsed}>{notification.count}</Badge>
          )}
        </NotificationsRow>

        <UserCard collapsed={collapsed}>
          <AvatarWrap>
            <img src={user.image} alt={user.fullName} />
          </AvatarWrap>

          <UserInfo collapsed={collapsed}>
            <UserName>{user.fullName}</UserName>
            <UserPhone>{user.phone}</UserPhone>
          </UserInfo>
        </UserCard>
      </BottomArea>
    </SidebarWrap>
  );
};

export default SidebarPage;
