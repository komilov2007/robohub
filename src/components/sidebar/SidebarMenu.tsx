import { useState } from "react";

import {
  MenuWrap,
  MenuItemWrap,
  MenuItem,
  MenuIconWrap,
  MenuText,
  MenuBadge,
  SoonModal,
  SoonWrapper,
  SoonTitle,
  SoonBadge,
  SoonText,
} from "@/pages/admin/sidebar/styled";

type Props = {
  collapsed: boolean;
  menus: any[];
  isActive: (path: string) => boolean;
  handleNavigate: (path: string) => void;
  t: (key: string) => string;
};

const SidebarMenu = ({
  collapsed,
  menus,
  isActive,
  handleNavigate,
  t,
}: Props) => {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  if (collapsed) return null;

  return (
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
  );
};

export default SidebarMenu;
