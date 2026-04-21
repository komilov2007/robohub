import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import IconIntegration from '@/assets/icons/icon-integration.svg?react';
import IconProduct from '@/assets/icons/icon-product.svg?react';
import IconOrder from '@/assets/icons/sidebar-order.svg?react';
import IconWareHouse from '@/assets/icons/sidebar-ware-house.svg?react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import IconDashboard from '@/assets/icons/icon-dashboard.svg?react';
import SidebarPhone from '@/assets/img/sidebar-phone.png';
import ProfilImg from '@/assets/img/profil.webp'
export const usePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const cardData = {
    title: t('sidebar_card_title'),
    description: t('sidebar_card_description'),
    buttonText: t('sidebar_card_button'),
    image: SidebarPhone,
  };

  const handleInstall = () => {
    navigate('/dashboard/integration');
  };

  const menus = useMemo(
    () => [
      {
        id: 1,
        title: t('sidebar_dashboard'),
        path: '/dashboard',
        icon: IconDashboard,
      },
      {
        id: 2,
        title: t('sidebar_orders'),
        path: '/dashboard/orders',
        icon: IconOrder,
      },
      {
        id: 3,
        title: t('sidebar_products'),
        path: '/dashboard/products',
        icon: IconProduct,
      },
      {
        id: 4,
        title: t('sidebar_warehouse'),
        path: '/dashboard/warehouse',
        icon: IconWareHouse,
      },
      {
        id: 5,
        title: t('sidebar_integration'),
        path: '/dashboard/integration',
        icon: IconIntegration,
      },
    ],
    [t]
  );

  const notification = {
    title: t('sidebar_notifications'),
    count: 2,
    icon: NotificationsNoneOutlinedIcon,
  };

  const user = {
    fullName: 'Sarvarbek Erkinjonov',
    phone: '+998(50) 074 20-00',
    image: ProfilImg,
  };

  const handleToggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
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
    handleInstall,
    cardData,
  };
};