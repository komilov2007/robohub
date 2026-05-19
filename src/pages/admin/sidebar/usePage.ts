import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { profileQueryOptions } from "@/api/profile";
import IconComment from "@/assets/icons/icon-comment.svg?react";
import IconCommentActive from "@/assets/icons/icon-comment-act.svg?react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import IconDashboardActive from "@/assets/icons/icon-dashboard-act.svg?react";
import IconProductActive from "@/assets/icons/icon-product-act.svg?react";
import IconWareActive from "@/assets/icons/sidebar-ware-act.svg?react";
import IconIntegrationActive from "@/assets/icons/icon-integration-act.svg?react";
import IconChatActive from "@/assets/icons/icon-chat-act.svg?react";
import IconOrderActive from "@/assets/icons/icon-order-act.svg?react";

import IconChat from "@/assets/icons/icon-chat.svg?react";
import IconIntegration from "@/assets/icons/icon-integration.svg?react";
import IconProduct from "@/assets/icons/icon-product.svg?react";
import IconOrder from "@/assets/icons/sidebar-order.svg?react";
import IconWareHouse from "@/assets/icons/sidebar-ware-house.svg?react";
import IconDashboard from "@/assets/icons/icon-dashboard.svg?react";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

import { useBoolean } from "@/hook/useBoolean";
import toast from "react-hot-toast";

export const usePage = (
  controlledCollapsed?: boolean,
  onCollapseChange?: (collapsed: boolean) => void,
) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [internalCollapsed, setInternalCollapsed] = useState(
    () => window.innerWidth < 900,
  );

  const collapsed = controlledCollapsed ?? internalCollapsed;

  const { data: profile } = useQuery(profileQueryOptions());

  useEffect(() => {
    if (controlledCollapsed !== undefined) {
      return;
    }

    const handleResize = () => {
      setInternalCollapsed(window.innerWidth < 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [controlledCollapsed]);

  const menus = useMemo(
    () => [
      {
        id: 1,
        title: t("sidebar_dashboard"),
        path: "/admin/dashboard",
        icon: IconDashboard,
        iconAct: IconDashboardActive,
      },
      {
        id: 2,
        title: t("sidebar_orders"),
        path: "/admin/orders",
        icon: IconOrder,
        iconAct: IconOrderActive,
      },
      {
        id: 3,
        title: t("sidebar_products"),
        path: "/admin/products",
        icon: IconProduct,
        iconAct: IconProductActive,
      },
      {
        id: 4,
        title: t("sidebar_warehouse"),
        path: "/admin//warehouse",
        icon: IconWareHouse,
        iconAct: IconWareActive,
      },
      {
        id: 5,
        title: t("sidebar_integration"),
        path: "/admin//integration",
        icon: IconIntegration,
        iconAct: IconIntegrationActive,
      },
      {
        id: 6,
        title: t("sidebar_chat"),
        path: "/admin/chat",
        icon: IconChat,
        iconAct: IconChatActive,
      },
      {
        id: 7,
        title: t("sidebar_comment"),
        path: "/admin/comment",
        icon: IconComment,
        iconAct: IconCommentActive,
      },
      {
        id: 7,
        title: t("Avtojavob"),
        path: "/admin/answers",
        icon: StarBorderIcon,
        iconAct: StarBorderIcon,
      },
    ],
    [t],
  );

  const notification = {
    title: t("sidebar_notifications"),
    count: 3,
    icon: NotificationsNoneOutlinedIcon,
  };

  const fullName =
    profile?.full_name ||
    `${profile?.first_name ?? ""} ${profile?.last_name ?? ""}`.trim() ||
    "User";

  const user = {
    fullName,
    phone: profile?.phone || profile?.phone_number || "",
    image: profile?.image || profile?.avatar,
  };

  const handleToggleSidebar = () => {
    const nextCollapsed = !collapsed;

    if (onCollapseChange) {
      onCollapseChange(nextCollapsed);
    } else {
      setInternalCollapsed(nextCollapsed);
    }
  };

  const logoutModal = useBoolean();
  const handleLogout = () => {
    document.cookie =
      "access_token=; Max-Age=0; path=/; secure; samesite=strict";

    document.cookie =
      "refresh_token=; Max-Age=0; path=/; secure; samesite=strict";

    toast.success(t("logout_success"));

    setTimeout(() => {
      window.location.replace("/");
    }, 800);
  };

  const handleNavigate = (path: string) => {
    navigate(path);

    if (window.innerWidth < 800) {
      if (onCollapseChange) {
        onCollapseChange(true);
      } else {
        setInternalCollapsed(true);
      }
    }
  };

  const isActive = (path: string) => {
    if (path === "/admin/dashboard") {
      return location.pathname === "/admin/dashboard";
    }

    return location.pathname.startsWith(path);
  };

  return {
    collapsed,
    menus,
    notification,
    user,
    handleToggleSidebar,
    handleNavigate,
    isActive,
    handleLogout,
    logoutModal,
    t,
  };
};
