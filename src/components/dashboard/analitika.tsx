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
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useTranslation } from "react-i18next";

import { usePage } from "./usePage";
import {
  ChartBox,
  ChartCard,
  ControlsRow,
  DashboardGrid,
  HeaderRow,
  LegendLine,
  LegendText,
  LegendWrap,
  PlatformLeft,
  PlatformLogoBox,
  PlatformName,
  PlatformPercent,
  PlatformRight,
  PlatformRowTop,
  PlatformRowWrap,
  ProgressBg,
  ProgressDot,
  ProgressFill,
  SelectRenderWrap,
  SmallSelect,
  StatsCard,
  StatsHeaderLabel,
  StatsHeaderValue,
  StatsList,
  StyledSelect,
  Title,
  TooltipBox,
  TooltipColorLine,
  TooltipLabel,
  TooltipMonth,
  TooltipRow,
  TooltipRowLeft,
  TooltipValue,
} from "./styled";

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
  const { t } = useTranslation();

  if (!active || !payload || !payload.length || !label) return null;

  const row = payload[0].payload;

  const tooltipItems = [
    {
      label: t("orders_count"),
      value: row.orders,
      color: "#0B766E",
    },
    {
      label: t("sales_count"),
      value: row.sales,
      color: "#FF6A2A",
    },
    {
      label: t("success_orders_count"),
      value: row.success,
      color: "#FDBA8C",
    },
  ];

  return (
    <TooltipBox>
      <TooltipMonth>{t(`month_${label}`)} 2025</TooltipMonth>

      {tooltipItems.map((item) => (
        <TooltipRow key={item.label}>
          <TooltipRowLeft>
            <TooltipColorLine color={item.color} />
            <TooltipLabel>{item.label}</TooltipLabel>
          </TooltipRowLeft>

          <TooltipValue>{item.value.toLocaleString()}</TooltipValue>
        </TooltipRow>
      ))}
    </TooltipBox>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <LegendWrap>
      <LegendLine linecolor={color} />
      <LegendText>{label}</LegendText>
    </LegendWrap>
  );
}

type PlatformRowProps = {
  id: number;
  name: string;
  short: string;
  value: number;
  percent: number;
  color: string;
  logoBg: string;
  logoBorder?: string;
  logoColor?: string;
};

function PlatformRow(item: PlatformRowProps) {
  return (
    <PlatformRowWrap>
      <PlatformRowTop>
        <PlatformLeft>
          <PlatformLogoBox
            logobg={item.logoBg}
            logoborder={item.logoBorder}
            logocolor={item.logoColor}
          >
            {item.short}
          </PlatformLogoBox>

          <PlatformName>{item.name}</PlatformName>
        </PlatformLeft>

        <PlatformRight>
          <StatsHeaderLabel>{item.value.toLocaleString()}</StatsHeaderLabel>
          <PlatformPercent>{item.percent}%</PlatformPercent>
        </PlatformRight>
      </PlatformRowTop>

      <ProgressBg>
        <ProgressFill percent={item.percent} fillcolor={item.color}>
          <ProgressDot />
        </ProgressFill>
      </ProgressBg>
    </PlatformRowWrap>
  );
}

function RightStatsCard() {
  const { t } = useTranslation();
  const { month, setMonth, months, platformStats } = usePage();

  return (
    <StatsCard>
      <HeaderRow>
        <div>
          <StatsHeaderLabel>{t("orders_count")}</StatsHeaderLabel>

          <StatsHeaderValue>98 008 {t("piece")}</StatsHeaderValue>
        </div>

        <FormControl size="small">
          <SmallSelect
            value={month}
            onChange={(e) => setMonth(e.target.value as string)}
            IconComponent={KeyboardArrowDownRoundedIcon}
            renderValue={(selected) => (
              <SelectRenderWrap>
                <CalendarTodayOutlinedIcon fontSize="small" />
                <span>{t(`month_${selected}`)}</span>
              </SelectRenderWrap>
            )}
          >
            {months.map((item) => (
              <MenuItem key={item} value={item}>
                {t(`month_${item}`)}
              </MenuItem>
            ))}
          </SmallSelect>
        </FormControl>
      </HeaderRow>

      <StatsList>
        {platformStats.map((item) => (
          <PlatformRow key={item.id} {...item} />
        ))}
      </StatsList>
    </StatsCard>
  );
}

function AnalyticsChart() {
  const { t } = useTranslation();

  const {
    chartData,
    platform,
    setPlatform,
    year,
    setYear,
    activeMonth,
    setActiveMonth,
    years,
    platforms,
  } = usePage();

  return (
    <ChartCard>
      <HeaderRow>
        <Title>{t("analytics_title")}</Title>

        <ControlsRow>
          <LegendItem color="#0B766E" label={t("orders_count")} />
          <LegendItem color="#FF6A2A" label={t("sales_count")} />

          <FormControl size="small">
            <StyledSelect
              value={platform}
              onChange={(e) => setPlatform(e.target.value as string)}
              IconComponent={KeyboardArrowDownRoundedIcon}
            >
              {platforms.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {t(item.labelKey)}
                </MenuItem>
              ))}
            </StyledSelect>
          </FormControl>

          <FormControl size="small">
            <StyledSelect
              value={year}
              onChange={(e) => setYear(e.target.value as string)}
              IconComponent={KeyboardArrowDownRoundedIcon}
            >
              {years.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </StyledSelect>
          </FormControl>
        </ControlsRow>
      </HeaderRow>

      <ChartBox>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 8, right: 10, left: 5, bottom: 0 }}
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
              tickFormatter={(value) => t(`month_short_${value}`)}
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
              isAnimationActive={false}
            />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#FF6A2A"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartBox>
    </ChartCard>
  );
}

export default function AnalyticsDashboard() {
  return (
    <DashboardGrid>
      <AnalyticsChart />
      <RightStatsCard />
    </DashboardGrid>
  );
}
