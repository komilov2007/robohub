import { useTranslation } from "react-i18next";

export const usePage = () => {
  const { t } = useTranslation();

  const notifications = [
    {
      id: 1,
      title: t("notifications.new_order"),
      description: t("notifications.new_order_desc"),
      time: "2 min",
      unread: true,
    },
    {
      id: 2,
      title: t("notifications.stock_updated"),
      description: t("notifications.stock_updated_desc"),
      time: "10 min",
      unread: false,
    },
    {
      id: 3,
      title: t("notifications.integration"),
      description: t("notifications.integration_desc"),
      time: "1 hour",
      unread: false,
    },
  ];

  return {
    notifications,
    t,
  };
};
