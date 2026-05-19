import { ThemeProvider } from "@mui/material";

import theme from "@/theme/theme";

import { useTranslation } from "react-i18next";

import { usePage } from "./usePage";

import {
  ContentWrap,
  DashboardWrap,
  OrdersCard,
  OrdersContainer,
  TabCount,
  TabItem,
  TabsRow,
  TabText,
  TitleRow,
  TitleText,
} from "./styled";
import OrdersToolbar from "@/components/order/OrdersToolbar";
import OrdersFilterModal from "@/components/order/OrdersFilterModal";
import OrdersTable from "@/components/order/OrdersTable";

const OrdersPage = () => {
  const { t } = useTranslation();

  const data = usePage();

  return (
    <ThemeProvider theme={theme}>
      <DashboardWrap>
        <ContentWrap>
          <OrdersContainer>
            <OrdersCard>
              <TitleRow>
                <TitleText>{t("orders_title")}</TitleText>
              </TitleRow>

              <TabsRow>
                {data.tabs.map((tab) => {
                  const active = data.activeTab === tab.id;

                  return (
                    <TabItem
                      key={tab.id}
                      active={active}
                      onClick={() => data.setActiveTab(tab.id)}
                    >
                      <TabText active={active}>{t(tab.label)}</TabText>

                      <TabCount active={active}>{tab.count}</TabCount>
                    </TabItem>
                  );
                })}
              </TabsRow>

              <OrdersToolbar {...data} t={t} />

              <OrdersFilterModal {...data} />

              <OrdersTable {...data} t={t} />
            </OrdersCard>
          </OrdersContainer>
        </ContentWrap>
      </DashboardWrap>
    </ThemeProvider>
  );
};

export default OrdersPage;
