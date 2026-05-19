import { useTranslation } from "react-i18next";

import usePage from "./usePage";

import { ContentLayout, MainColumn, PageWrapper, Sidebar } from "./styled";
import ProductTopbar from "@/components/product-card-add/ProductTopbar";
import ProductSidebar from "@/components/product-card-add/ProductSidebar";
import ProductSections from "@/components/product-card-add/ProductSections";

export default function Page() {
  const { t } = useTranslation();

  const data = usePage();

  return (
    <PageWrapper>
      <ProductTopbar t={t} />

      <ContentLayout>
        <Sidebar>
          <ProductSidebar t={t} />
        </Sidebar>

        <MainColumn>
          <ProductSections {...data} t={t} />
        </MainColumn>
      </ContentLayout>
    </PageWrapper>
  );
}
