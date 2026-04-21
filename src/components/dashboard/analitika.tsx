import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const chartData = [
  { month: "Yan", orders: 8700, sales: 6500, success: 6100 },
  { month: "Fev", orders: 9300, sales: 6900, success: 6400 },
  { month: "Mar", orders: 9000, sales: 7100, success: 6600 },
  { month: "Apr", orders: 10200, sales: 7100, success: 6800 },
  { month: "May", orders: 10900, sales: 8000, success: 7200 },
  { month: "Iyun", orders: 10200, sales: 7500, success: 7000 },
  { month: "Iyul", orders: 11520, sales: 7760, success: 7890 },
  { month: "Avg", orders: 11350, sales: 7950, success: 8050 },
  { month: "Sent", orders: 12100, sales: 8200, success: 8300 },
  { month: "Okt", orders: 11800, sales: 8500, success: 8450 },
  { month: "Noy", orders: 12500, sales: 8900, success: 8700 },
  { month: "Dek", orders: 12850, sales: 9600, success: 9100 },
];

const platformStats = [
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
  {
    id: 4,
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
    id: 5,
    name: "Uzum Market",
    short: "uz",
    value: 750,
    percent: 36.0,
    color: "#E9AB42",
    logoBg: "#6F1AB6",
  },
];

type TooltipProps = {
  active?: boolean;
  payload?: Array<{
    payload: {
      month: string;
      orders: number;
      sales: number;
      success: number;
    };
  }>;
  label?: string;
};

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload || !payload.length) return null;

  const row = payload[0].payload;

  return (
    <Box
      sx={{
        minWidth: 282,
        backgroundColor: "#FFFFFF",
        border: "1px solid #E4E7EC",
        boxShadow: "0px 12px 28px rgba(16, 24, 40, 0.10)",
        borderRadius: "14px",
        px: "14px",
        py: "12px",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          color: "#98A2B3",
          mb: 1.5,
        }}
      >
        {label} 2025
      </Typography>

      {[
        {
          label: "Buyurtmalar soni",
          value: row.orders,
          color: "#0B766E",
        },
        {
          label: "Tovar soni",
          value: row.sales,
          color: "#FF6A2A",
        },
        {
          label: "Muvaffaqiyatli buyurtmalar soni",
          value: row.success,
          color: "#FDBA8C",
        },
      ].map((item) => (
        <Box
          key={item.label}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: item.label === "Muvaffaqiyatli buyurtmalar soni" ? 0 : 1.2,
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Box
              sx={{
                width: 3,
                height: 18,
                borderRadius: "999px",
                backgroundColor: item.color,
              }}
            />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#475467",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#101828",
            }}
          >
            {item.value.toLocaleString()}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Box
        sx={{
          width: 3,
          height: 13,
          borderRadius: "999px",
          backgroundColor: color,
        }}
      />
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          color: "#475467",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

function PlatformLogo({
  short,
  bg,
  color = "#fff",
  border,
}: {
  short: string;
  bg: string;
  color?: string;
  border?: string;
}) {
  return (
    <Box
      sx={{
        width: 16,
        height: 16,
        borderRadius: "4px",
        backgroundColor: bg,
        border: border ? `1px solid ${border}` : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "9px",
        fontWeight: 700,
        color,
        textTransform: "uppercase",
        flexShrink: 0,
      }}
    >
      {short}
    </Box>
  );
}

function PlatformRow({
  name,
  short,
  value,
  percent,
  color,
  logoBg,
  logoBorder,
  logoColor,
}: {
  name: string;
  short: string;
  value: number;
  percent: number;
  color: string;
  logoBg: string;
  logoBorder?: string;
  logoColor?: string;
}) {
  return (
    <Box sx={{ mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 0.8,
          gap: 1.5,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, minWidth: 0 }}>
          <PlatformLogo
            short={short}
            bg={logoBg}
            border={logoBorder}
            color={logoColor}
          />
          <Typography
            sx={{
              fontSize: "14px",
              color: "#475467",
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#101828",
            }}
          >
            {value.toLocaleString()}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#98A2B3",
              minWidth: "40px",
              textAlign: "right",
            }}
          >
            {percent}%
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: 20,
          backgroundColor: "#EAEEF4",
          borderRadius: "4px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: `${percent}%`,
            minWidth: "60px",
            height: "100%",
            backgroundColor: color,
            borderRadius: "4px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "#F9FAFB",
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              opacity: 0.95,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

function RightStatsCard() {
  const [month, setMonth] = React.useState("Oktabr");

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFFFF",
        border: "1px solid #D9E2F2",
        borderRadius: "12px",
        p: "14px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 1,
          mb: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#98A2B3",
              lineHeight: 1.2,
            }}
          >
            Buyurtmalar soni
          </Typography>
          <Typography
            sx={{
              fontSize: "31px",
              fontWeight: 600,
              color: "#101828",
              lineHeight: 1.2,
              mt: 0.3,
            }}
          >
            98 008 ta
          </Typography>
        </Box>

        <FormControl size="small">
          <Select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            IconComponent={KeyboardArrowDownRoundedIcon}
            sx={{
              minWidth: 96,
              height: 32,
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              fontSize: "14px",
              color: "#101828",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "#D0D5DD",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#D0D5DD",
              },
              ".MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                gap: "8px",
              },
            }}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CalendarTodayOutlinedIcon sx={{ fontSize: 16, color: "#101828" }} />
                <span>{selected}</span>
              </Box>
            )}
          >
            <MenuItem value="Yanvar">Yanvar</MenuItem>
            <MenuItem value="Fevral">Fevral</MenuItem>
            <MenuItem value="Mart">Mart</MenuItem>
            <MenuItem value="Aprel">Aprel</MenuItem>
            <MenuItem value="May">May</MenuItem>
            <MenuItem value="Iyun">Iyun</MenuItem>
            <MenuItem value="Iyul">Iyul</MenuItem>
            <MenuItem value="Avgust">Avgust</MenuItem>
            <MenuItem value="Sentabr">Sentabr</MenuItem>
            <MenuItem value="Oktabr">Oktabr</MenuItem>
            <MenuItem value="Noyabr">Noyabr</MenuItem>
            <MenuItem value="Dekabr">Dekabr</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mt: 1.5 }}>
        {platformStats.map((item) => (
          <PlatformRow
            key={item.id}
            name={item.name}
            short={item.short}
            value={item.value}
            percent={item.percent}
            color={item.color}
            logoBg={item.logoBg}
            logoBorder={item.logoBorder}
            logoColor={item.logoColor}
          />
        ))}
      </Box>
    </Box>
  );
}

function AnalyticsChart() {
  const [platform, setPlatform] = React.useState("Barcha platformalar");
  const [year, setYear] = React.useState("2025");
  const [activeMonth, setActiveMonth] = React.useState("Iyul");

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        border: "1px solid #D9E2F2",
        borderRadius: "12px",
        p: "14px 16px 10px 16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            color: "#101828",
          }}
        >
          Analitika
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
            flexWrap: "wrap",
          }}
        >
          <LegendItem color="#0B766E" label="Buyurtmalar soni" />
          <LegendItem color="#FF6A2A" label="Sotuvlar soni" />

          <FormControl size="small">
            <Select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              IconComponent={KeyboardArrowDownRoundedIcon}
              sx={{
                minWidth: 178,
                height: 40,
                borderRadius: "10px",
                backgroundColor: "#FFFFFF",
                color: "#101828",
                fontSize: "14px",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D0D5DD",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D0D5DD",
                },
              }}
            >
              <MenuItem value="Barcha platformalar">Barcha platformalar</MenuItem>
              <MenuItem value="Ozon">Ozon</MenuItem>
              <MenuItem value="Uzum">Uzum</MenuItem>
              <MenuItem value="WB">WB</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small">
            <Select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              IconComponent={KeyboardArrowDownRoundedIcon}
              sx={{
                minWidth: 80,
                height: 40,
                borderRadius: "10px",
                backgroundColor: "#FFFFFF",
                color: "#101828",
                fontSize: "14px",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D0D5DD",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D0D5DD",
                },
              }}
            >
              <MenuItem value="2025">2025</MenuItem>
              <MenuItem value="2024">2024</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box sx={{ width: "100%", height: 330 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 8, right: 10, left: -8, bottom: 0 }}
            onMouseMove={(state) => {
              if (state?.activeLabel) {
                setActiveMonth(String(state.activeLabel));
              }
            }}
          >
            <defs>
              <linearGradient id="greenArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0B766E" stopOpacity={0.18} />
                <stop offset="70%" stopColor="#0B766E" stopOpacity={0.08} />
                <stop offset="100%" stopColor="#0B766E" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="orangeArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF6A2A" stopOpacity={0.16} />
                <stop offset="70%" stopColor="#FF6A2A" stopOpacity={0.07} />
                <stop offset="100%" stopColor="#FF6A2A" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#D9E2F2"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              dy={10}
              tick={{
                fill: "#667085",
                fontSize: 14,
                fontWeight: 400,
              }}
            />

            <YAxis
              domain={[0, 14000]}
              ticks={[0, 2000, 4000, 6000, 8000, 10000, 12000, 14000]}
              tickLine={false}
              axisLine={false}
              tickMargin={14}
              tickFormatter={(value) => value.toLocaleString()}
              tick={{
                fill: "#667085",
                fontSize: 14,
                fontWeight: 400,
              }}
            />

            <Tooltip
              cursor={false}
              content={<CustomTooltip />}
              wrapperStyle={{ outline: "none" }}
            />

            <ReferenceLine
              x={activeMonth}
              stroke="#98A2B3"
              strokeDasharray="4 4"
            />

            <Area
              type="monotone"
              dataKey="orders"
              stroke="none"
              fill="url(#greenArea)"
              isAnimationActive={false}
            />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="none"
              fill="url(#orangeArea)"
              isAnimationActive={false}
            />

            <Line
              type="monotone"
              dataKey="orders"
              stroke="#0B766E"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#0B766E",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
              isAnimationActive={false}
            />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#FF6A2A"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#FF6A2A",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export default function AnalyticsDashboard() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          lg: "minmax(0, 1fr) 322px",
        },
        gap: "16px",
      }}
    >
      <AnalyticsChart />
      <RightStatsCard />
    </Box>
  );
}