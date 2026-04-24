import React, { type ReactNode } from "react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";

export const chartData = [
  { month: "jan", orders: 8700, sales: 6500, success: 6100 },
  { month: "feb", orders: 9300, sales: 6900, success: 6400 },
  { month: "mar", orders: 9000, sales: 7100, success: 6600 },
  { month: "apr", orders: 10200, sales: 7100, success: 6800 },
  { month: "may", orders: 10900, sales: 8000, success: 7200 },
  { month: "jun", orders: 10200, sales: 7500, success: 7000 },
  { month: "jul", orders: 11520, sales: 7760, success: 7890 },
  { month: "aug", orders: 11350, sales: 7950, success: 8050 },
  { month: "sep", orders: 12100, sales: 8200, success: 8300 },
  { month: "oct", orders: 11800, sales: 8500, success: 8450 },
  { month: "nov", orders: 12500, sales: 8900, success: 8700 },
  { month: "dec", orders: 12850, sales: 9600, success: 9100 },
];

export type StatCardItem = {
  id: number;
  titleKey: string;
  value: string;
  unitKey: string;
  percent: string;
  trend: "up" | "down";
  icon: ReactNode;
};
export const platformStats = [
  {
    id: 1,
    name: "Wildberries",
    short: "wb",
    value: 6900,
    percent: 55.5,
    color: "#F15A29",
    logoBg: "#D61F9B",
  },
  {
    id: 2,
    name: "Ozon",
    short: "oz",
    value: 2100,
    percent: 16.9,
    color: "#35B86B",
    logoBg: "#FFFFFF",
    logoBorder: "#D0D5DD",
    logoColor: "#005BFF",
  },
  {
    id: 3,
    name: "Uzum Market",
    short: "uz",
    value: 750,
    percent: 36.0,
    color: "#E9AB42",
    logoBg: "#6F1AB6",
  },
];

export const statsData: StatCardItem[] = [
  {
    id: 1,
    titleKey: "dashboard_stats.monthly_income",
    value: "12,234,500",
    unitKey: "dashboard_stats.sum",
    percent: "8.4%",
    trend: "up",
    icon: <TrendingDownIcon sx={{ fontSize: 20, color: "#344054" }} />,
  },
  {
    id: 2,
    titleKey: "dashboard_stats.monthly_sales",
    value: "57 000 098",
    unitKey: "dashboard_stats.piece",
    percent: "1.2%",
    trend: "down",
    icon: <SyncRoundedIcon sx={{ fontSize: 20, color: "#344054" }} />,
  },
  {
    id: 3,
    titleKey: "dashboard_stats.monthly_orders",
    value: "98 000 789",
    unitKey: "dashboard_stats.count",
    percent: "8.4%",
    trend: "up",
    icon: <AssignmentOutlinedIcon sx={{ fontSize: 20, color: "#344054" }} />,
  },
  {
    id: 4,
    titleKey: "dashboard_stats.new_clients",
    value: "127",
    unitKey: "dashboard_stats.person",
    percent: "8.4%",
    trend: "up",
    icon: <PeopleOutlineRoundedIcon sx={{ fontSize: 20, color: "#344054" }} />,
  },
];

export function usePage() {
  const [platform, setPlatform] = React.useState("all");
  const [year, setYear] = React.useState("2025");
  const [activeMonth, setActiveMonth] = React.useState("jul");
  const [month, setMonth] = React.useState("oct");

  const years = ["2025", "2024"];

  const platforms = [
    { value: "all", labelKey: "analytics.all_platforms" },
    { value: "ozon", labelKey: "analytics.ozon" },
    { value: "uzum", labelKey: "analytics.uzum" },
    { value: "wb", labelKey: "analytics.wb" },
  ];

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  return {
    chartData,
    platformStats,
    statsData,

    platform,
    setPlatform,
    year,
    setYear,
    activeMonth,
    setActiveMonth,
    month,
    setMonth,

    years,
    platforms,
    months,
  };
}
