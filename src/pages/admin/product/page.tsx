import { useTranslation } from "react-i18next";

import usePage from "./usePage";

import {
  Header,
  PageWrapper,
  StyledTab,
  StyledTabs,
  TabCount,
  TabLabel,
  TabsWrapper,
  Title,
  CreateButton,
} from "./styled";

import IconAdd from "@/assets/icons/icon-add.svg?react";
import ProductsToolbar from "@/components/product/ProductsToolbar";
import ProductsGrid from "@/components/product/ProductsGrid";
import EmptyProducts from "@/components/product/EmptyProducts";

export default function Page() {
  const { t } = useTranslation();

  const data = usePage();

  return (
    <PageWrapper>
      <Header>
        <Title>{t("my_products")}</Title>

        <CreateButton to="/admin/products/add">
          <IconAdd />

          {t("create_product_card")}
        </CreateButton>
      </Header>

      <TabsWrapper>
        <StyledTabs
          value={data.tab}
          variant="scrollable"
          scrollButtons={false}
          onChange={(_, value: number) => data.setTab(value)}
        >
          {data.tabs.map((item: any, index: number) => (
            <StyledTab
              key={item.label}
              value={index}
              label={
                <TabLabel>
                  <span>{t(item.label)}</span>

                  <TabCount>{item.count}</TabCount>
                </TabLabel>
              }
            />
          ))}
        </StyledTabs>
      </TabsWrapper>

      <ProductsToolbar {...data} t={t} />

      {data.filteredProducts.length > 0 ? (
        <ProductsGrid {...data} t={t} />
      ) : (
        <EmptyProducts t={t} />
      )}
    </PageWrapper>
  );
}
