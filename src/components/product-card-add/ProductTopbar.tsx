import { useNavigate } from "react-router-dom";

import IconArrow from "@/assets/icons/icon-arrow.svg?react";
import IconArrowRight from "@/assets/icons/icon-right-arrow.svg?react";

import { Arrow } from "@/pages/auth/otp-verificate/styled";

import {
  BackButton,
  BreadcrumbText,
  BreadcrumbsRow,
  StrongHead,
  StrongHeadLink,
  SubmitButton,
  TopBar,
} from "@/pages/dashboard/product-card-add/styled";

const ProductTopbar = ({ t }: any) => {
  const navigate = useNavigate();

  return (
    <TopBar>
      <BreadcrumbsRow>
        <BackButton>
          <Arrow onClick={() => navigate(-1)}>
            <IconArrow />
          </Arrow>
        </BackButton>

        <BreadcrumbText>
          <StrongHeadLink to="/admin/products">{t("products")}</StrongHeadLink>

          <IconArrowRight />

          <StrongHead>{t("create_product_card_text")}</StrongHead>
        </BreadcrumbText>
      </BreadcrumbsRow>

      <SubmitButton>{t("save_and_continue")}</SubmitButton>
    </TopBar>
  );
};

export default ProductTopbar;
