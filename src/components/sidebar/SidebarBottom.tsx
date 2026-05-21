import { StarRounded } from "@mui/icons-material";

import SidebarProfilImg from "@/assets/img/profil.webp";
import { ROUTERS } from "@/constants/router";

import {
  BottomArea,
  SubCardWrapper,
  SubTopBox,
  SubInfoBox,
  SubIconBox,
  SubTextBox,
  SubTitle,
  SubStatus,
  SubBottomBox,
  SubDays,
  SubPriceBox,
  SubPrice,
  SubMonth,
  SubProgress,
  NotificationsRow,
  NotificationsLeft,
  NotificationsText,
  Badge,
  MenuIconWrap,
  UserCard,
  AvatarWrap,
  UserInfo,
  UserName,
  UserPhone,
} from "@/pages/admin/sidebar/styled";

type Props = {
  collapsed: boolean;
  notification: any;
  user: any;
  handleNavigate: (path: string) => void;
  handleToggleSidebar: () => void;
  t: (key: string) => string;
};

const SidebarBottom = ({
  collapsed,
  notification,
  user,
  handleNavigate,
  handleToggleSidebar,
  t,
}: Props) => {
  const NotificationIcon = notification.icon;

  const subscriptionPath = `/${ROUTERS.admin}/${ROUTERS.admin_subscription}`;
  const notificationsPath = `/${ROUTERS.admin}/${ROUTERS.admin_notifications}`;
  const profilePath = `/${ROUTERS.admin}/${ROUTERS.admin_profile}`;

  return (
    <BottomArea>
      <SubCardWrapper
        to={subscriptionPath}
        $collapsed={collapsed}
        onClick={() => {
          if (window.innerWidth < 900) {
            handleToggleSidebar();
          }
        }}
      >
        <SubTopBox $collapsed={collapsed}>
          <SubInfoBox>
            <SubIconBox>
              <StarRounded
                sx={{
                  color: "#D9FF66",
                  fontSize: 16,
                }}
              />
            </SubIconBox>

            {!collapsed && (
              <SubTextBox>
                <SubTitle>{t("subscription_active")}</SubTitle>
                <SubStatus>{t("subscription_active")}</SubStatus>
              </SubTextBox>
            )}
          </SubInfoBox>
        </SubTopBox>

        {!collapsed && (
          <>
            <SubBottomBox>
              <SubDays>87 {t("subscription_days_left")}</SubDays>

              <SubPriceBox>
                <SubPrice>500,000</SubPrice>
                <SubMonth>/{t("month_short")}</SubMonth>
              </SubPriceBox>
            </SubBottomBox>

            <SubProgress variant="determinate" value={72} />
          </>
        )}
      </SubCardWrapper>

      <NotificationsRow
        to={notificationsPath}
        $collapsed={collapsed}
        onClick={() => handleNavigate(notificationsPath)}
      >
        <NotificationsLeft>
          <MenuIconWrap>
            <NotificationIcon />
          </MenuIconWrap>

          <NotificationsText $collapsed={collapsed}>
            {notification.title}
          </NotificationsText>
        </NotificationsLeft>

        {!collapsed && (
          <Badge $collapsed={collapsed}>{notification.count}</Badge>
        )}
      </NotificationsRow>

      <UserCard
        to={profilePath}
        $collapsed={collapsed}
        onClick={() => handleNavigate(profilePath)}
      >
        <AvatarWrap>
          <img src={user.image || SidebarProfilImg} alt={user.fullName} />
        </AvatarWrap>

        <UserInfo $collapsed={collapsed}>
          <UserName>{user.fullName}</UserName>
          <UserPhone>{user.phone}</UserPhone>
        </UserInfo>
      </UserCard>
    </BottomArea>
  );
};

export default SidebarBottom;
