import { Box, styled } from "@mui/material";

export const LayoutWrapper = styled(Box)({
  minHeight: "100vh",
  background: "#F8FAFC",
  position: "relative",
});

export const SidebarWrapper = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "$sidebarWidth" && prop !== "$collapsed",
})<{
  $sidebarWidth: number;
  $collapsed: boolean;
}>(({ $sidebarWidth, $collapsed }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: `${$sidebarWidth}px`,
  height: "100vh",
  transition: "width 0.3s ease, transform 0.3s ease",
  overflow: "visible",
  zIndex: 1300,

  "@media (max-width:899px)": {
    width: "262px",
    zIndex: 9999,
    transform: $collapsed ? "translateX(-262px)" : "translateX(0)",
  },
}));

export const MobileOverlay = styled(Box)({
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.35)",
  backdropFilter: "blur(4px)",
  zIndex: 9998,

  "@media (min-width:900px)": {
    display: "none",
  },
});

export const MainContent = styled(Box, {
  shouldForwardProp: (prop) => prop !== "$sidebarWidth",
})<{ $sidebarWidth: number }>(({ $sidebarWidth }) => ({
  flex: 1,
  marginLeft: `${$sidebarWidth}px`,
  width: `calc(100% - ${$sidebarWidth}px)`,
  minWidth: 0,
  height: "100vh",
  minHeight: 0,
  background: "#F5F7FA",
  overflowY: "auto",
  overflowX: "hidden",
  WebkitOverflowScrolling: "touch",
  overscrollBehavior: "contain",
  transition: "margin-left 0.3s ease, width 0.3s ease",

  "@media (max-width:899px)": {
    marginLeft: 0,
    width: "100%",
  },
}));
