import { useEffect, useMemo, useState } from "react";

const DESKTOP_BREAKPOINT = 900;

export const SIDEBAR_OPEN_WIDTH = 262;
export const SIDEBAR_DESKTOP_COLLAPSED_WIDTH = 100;
export const SIDEBAR_MOBILE_COLLAPSED_WIDTH = 0;

export const usePage = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < DESKTOP_BREAKPOINT,
  );
  const [collapsed, setCollapsed] = useState(
    () => window.innerWidth < DESKTOP_BREAKPOINT,
  );

  const sidebarWidth = useMemo(() => {
    if (!collapsed) return SIDEBAR_OPEN_WIDTH;

    return isMobile
      ? SIDEBAR_MOBILE_COLLAPSED_WIDTH
      : SIDEBAR_DESKTOP_COLLAPSED_WIDTH;
  }, [collapsed, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < DESKTOP_BREAKPOINT;

      setIsMobile(mobile);

      if (mobile) {
        setCollapsed(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const body = document.body;

    const originalOverflow = body.style.overflow;
    const originalTouchAction = body.style.touchAction;
    const originalOverscrollBehavior = body.style.overscrollBehavior;

    const shouldLock = !collapsed && isMobile;

    if (shouldLock) {
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
      body.style.overscrollBehavior = "none";
    }

    return () => {
      body.style.overflow = originalOverflow;
      body.style.touchAction = originalTouchAction;
      body.style.overscrollBehavior = originalOverscrollBehavior;
    };
  }, [collapsed, isMobile]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !collapsed && isMobile) {
        setCollapsed(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [collapsed, isMobile]);

  return {
    collapsed,
    setCollapsed,
    isMobile,
    sidebarWidth,
  };
};
