import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { useTranslation } from "react-i18next";

import type { StatCardItem } from "./usePage";
import { usePage } from "./usePage";
import {
  CardTitle,
  CardTop,
  CardsGrid,
  DescriptionText,
  IconBox,
  SectionTitle,
  SectionWrapper,
  StatCard,
  TrendBadgeWrap,
  UnitText,
  ValueRow,
  ValueText,
  ValueWrap,
} from "./styled";

function TrendBadge({
  trend,
  percent,
}: {
  trend: "up" | "down";
  percent: string;
}) {
  const isUp = trend === "up";

  return (
    <TrendBadgeWrap trend={trend}>
      {isUp ? (
        <ArrowUpwardRoundedIcon sx={{ fontSize: 14 }} />
      ) : (
        <ArrowDownwardRoundedIcon sx={{ fontSize: 14 }} />
      )}
      <span>{percent}</span>
    </TrendBadgeWrap>
  );
}

function DashboardStatCard({ item }: { item: StatCardItem }) {
  const { t } = useTranslation();

  return (
    <StatCard>
      <CardTop>
        <IconBox>{item.icon}</IconBox>
        <CardTitle>{t(item.titleKey)}</CardTitle>
      </CardTop>

      <ValueRow>
        <ValueWrap>
          <ValueText>{item.value}</ValueText>
          <UnitText>{t(item.unitKey)}</UnitText>
        </ValueWrap>

        <TrendBadge trend={item.trend} percent={item.percent} />
      </ValueRow>

      <DescriptionText>{t("compared_last_month")}</DescriptionText>
    </StatCard>
  );
}

export default function DashboardStatsSection() {
  const { t } = useTranslation();
  const { statsData } = usePage();

  return (
    <SectionWrapper>
      <SectionTitle>{t("dashboard_title")}</SectionTitle>

      <CardsGrid>
        {statsData.map((item) => (
          <DashboardStatCard key={item.id} item={item} />
        ))}
      </CardsGrid>
    </SectionWrapper>
  );
}
