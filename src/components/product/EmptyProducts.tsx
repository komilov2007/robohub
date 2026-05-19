import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import {
  EmptyStateBox,
  EmptyStateButton,
  EmptyStateDescription,
  EmptyStateIconBox,
  EmptyStateTitle,
  EmptyStateWrapper,
} from "@/pages/admin/product/styled";

const EmptyProducts = ({ t }: any) => {
  return (
    <EmptyStateWrapper>
      <EmptyStateBox>
        <EmptyStateIconBox>
          <Inventory2OutlinedIcon
            sx={{
              fontSize: 34,
              color: "#D0D5DD",
            }}
          />
        </EmptyStateIconBox>

        <EmptyStateTitle>{t("empty_products_title")}</EmptyStateTitle>

        <EmptyStateDescription>
          {t("empty_products_description")}
        </EmptyStateDescription>

        <EmptyStateButton>{t("add_another_product")}</EmptyStateButton>
      </EmptyStateBox>
    </EmptyStateWrapper>
  );
};

export default EmptyProducts;
