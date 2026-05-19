import { useTranslation } from "react-i18next";

import {
  Divider,
  PayButton,
  SectionHeader,
  SectionTitle,
  Step,
  SummaryCard,
  SummaryRow,
  SummaryText,
  SummaryTitle,
  SummaryValue,
  TotalPrice,
} from "@/pages/admin/subscription/styled";

import PaymentModal from "./PaymentModal";

type Props = {
  period: number;
  monthlyPrice: number;
  additionalPrice: number;
  totalPrice: number;
  paymentModal: boolean;
  selectedPayment: string;
  handleOpenPayment: () => void;
  handleClosePayment: () => void;
  handleSelectPayment: (id: string) => void;
};

const SubscriptionSummary = ({
  period,
  monthlyPrice,
  additionalPrice,
  totalPrice,
  paymentModal,
  selectedPayment,
  handleOpenPayment,
  handleClosePayment,
  handleSelectPayment,
}: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionHeader>
        <Step>3</Step>

        <SectionTitle>{t("subscription_checkout")}</SectionTitle>
      </SectionHeader>

      <SummaryCard>
        <SummaryTitle>{t("subscription_order_summary")}</SummaryTitle>

        <SummaryRow>
          <SummaryText>{t("subscription_monthly")}</SummaryText>

          <SummaryValue>{monthlyPrice.toLocaleString()} UZS</SummaryValue>
        </SummaryRow>

        <SummaryRow>
          <SummaryText>{t("subscription_extra_shops")}</SummaryText>

          <SummaryValue>+{additionalPrice.toLocaleString()} UZS</SummaryValue>
        </SummaryRow>

        <Divider />

        <SummaryText>{t("subscription_total")}</SummaryText>

        <TotalPrice>{totalPrice.toLocaleString()} UZS</TotalPrice>

        <SummaryText>{t("summary_period", { period })}</SummaryText>

        <PayButton onClick={handleOpenPayment}>
          {t("subscription_continue")}
        </PayButton>

        <PaymentModal
          paymentModal={paymentModal}
          selectedPayment={selectedPayment}
          handleClosePayment={handleClosePayment}
          handleSelectPayment={handleSelectPayment}
        />
      </SummaryCard>
    </>
  );
};

export default SubscriptionSummary;
