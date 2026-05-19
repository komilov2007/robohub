import { StarRounded } from "@mui/icons-material";

import SidebarProfilImg from "@/assets/img/profil.webp";

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

  if (collapsed) return null;

  return (
    <BottomArea>
      <SubCardWrapper
        to={"/admin/subscription"}
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

            <SubMonth>/{t("month_short")}</SubMonth>
          </SubPriceBox>
        </SubBottomBox>

        <SubProgress variant="determinate" value={72} />
      </SubCardWrapper>

      <NotificationsRow
        to={"/admin/notifications"}
        collapsed={collapsed}
        onClick={() => handleNavigate("/admin/notifications")}
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
        to={"/admin/profile"}
        collapsed={collapsed}
        onClick={() => handleNavigate("/admin/profile")}
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
  );
};
export default SidebarBottom;
