import React from "react";
import { Box, Typography } from "@mui/material";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";

type StatCardItem = {
  id: number;
  title: string;
  value: string;
  unit: string;
  percent: string;
  trend: "up" | "down";
  icon: React.ReactNode;
};

const statsData: StatCardItem[] = [
  {
    id: 1,
    title: "Oylik tushum",
    value: "12,234,500",
    unit: "so'm",
    percent: "8.4%",
    trend: "up",
    icon: <TrendingDownIcon sx={{ fontSize: 20, color: "#344054" }} />,
  },
  {
    id: 2,
    title: "Oylik sotuvlar",
    value: "57 000 098",
    unit: "dona",
    percent: "1.2%",
    trend: "down",
    icon: <SyncRoundedIcon sx={{ fontSize: 20, color: "#344054" }} />,
  },
  {
    id: 3,
    title: "Oylik buyurtmalar soni",
    value: "98 000 789",
    unit: "ta",
    percent: "8.4%",
    trend: "up",
    icon: <AssignmentOutlinedIcon sx={{ fontSize: 20, color: "#344054" }} />,
  },
  {
    id: 4,
    title: "Yangi mijozlar",
    value: "127",
    unit: "nafar",
    percent: "8.4%",
    trend: "up",
    icon: <PeopleOutlineRoundedIcon sx={{ fontSize: 20, color: "#344054" }} />,
  },
];

function TrendBadge({
  trend,
  percent,
}: {
  trend: "up" | "down";
  percent: string;
}) {
  const isUp = trend === "up";

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        px: "7px",
        py: "3px",
        borderRadius: "999px",
        backgroundColor: isUp ? "#ECFDF3" : "#FEF3F2",
        color: isUp ? "#12B76A" : "#F04438",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {isUp ? (
        <ArrowUpwardRoundedIcon sx={{ fontSize: 14 }} />
      ) : (
        <ArrowDownwardRoundedIcon sx={{ fontSize: 14 }} />
      )}
      <span>{percent}</span>
    </Box>
  );
}

function DashboardStatCard({ item }: { item: StatCardItem }) {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #D9E2F2",
        borderRadius: "12px",
        px: "14px",
        py: "16px",
        minHeight: 138,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 3 }}>
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: "8px",
            border: "1px solid #D0D5DD",
            backgroundColor: "#F9FAFB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {item.icon}
        </Box>

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#344054",
            lineHeight: 1.2,
          }}
        >
          {item.title}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 1.5, flexWrap: "wrap" }}>
        <Box sx={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#344054",
              lineHeight: 1.2,
            }}
          >
            {item.value}
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#98A2B3",
              lineHeight: 1.2,
            }}
          >
            {item.unit}
          </Typography>
        </Box>

        <TrendBadge trend={item.trend} percent={item.percent} />
      </Box>

      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#98A2B3",
          lineHeight: 1.2,
        }}
      >
        O'tgan oyga nisbatan
      </Typography>
    </Box>
  );
}

export default function DashboardStatsSection() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#101828",
          mb: "18px",
          borderBottom: '0.5px solid #E0E6F0',
          padding:'10px 15px',
          fontFamily:'inter'
        }}
      >
        Dashboard
      </Typography>

      <Box
        sx={{
          display: "grid",
          padding:'0px 10px',
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: "14px",
        }}
      >
        {statsData.map((item) => (
          <DashboardStatCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
}