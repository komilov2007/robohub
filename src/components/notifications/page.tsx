import { usePage } from "./usePage";
import {
  Page,
  Header,
  HeaderTitle,
  Content,
  Card,
  NotificationItem,
  NotificationLeft,
  Title,
  Description,
  Time,
} from "./styled";

const NotificationsPage = () => {
  const { notifications, t } = usePage();

  return (
    <Page>
      <Header>
        <HeaderTitle>{t("notifications.title")}</HeaderTitle>
      </Header>

      <Content>
        <Card>
          {notifications.map((item) => (
            <NotificationItem key={item.id} unread={item.unread}>
              <NotificationLeft>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
              </NotificationLeft>

              <Time>{item.time}</Time>
            </NotificationItem>
          ))}
        </Card>
      </Content>
    </Page>
  );
};

export default NotificationsPage;
