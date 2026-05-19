import {
  AutoAwesomeRounded,
  CheckCircleRounded,
  CloseRounded,
  RadioButtonUncheckedRounded,
} from "@mui/icons-material";

import { useTranslation } from "react-i18next";

import IconClick from "@/assets/icons/icon-click.png";
import IconPayme from "@/assets/icons/icon-payme.png";
import IconUzumBank from "@/assets/icons/icon-uzum-bank.png";

import {
  PaymentBackButton,
  PaymentBottom,
  PaymentClose,
  PaymentDescription,
  PaymentDialog,
  PaymentDialogContent,
  PaymentEmoji,
  PaymentHeader,
  PaymentMethod,
  PaymentMethodLeft,
  PaymentMethods,
  PaymentSubmitButton,
  PaymentTitle,
  PaymentTop,
} from "@/pages/admin/subscription/styled";

type Props = {
  paymentModal: boolean;
  selectedPayment: string;
  handleClosePayment: () => void;
  handleSelectPayment: (id: string) => void;
};

const PaymentModal = ({
  paymentModal,
  selectedPayment,
  handleClosePayment,
  handleSelectPayment,
}: Props) => {
  const { t } = useTranslation();

  return (
    <PaymentDialog open={paymentModal} onClose={handleClosePayment}>
      <PaymentDialogContent>
        <PaymentTop>
          <PaymentClose
            onClick={(e) => {
              e.stopPropagation();

              handleClosePayment();
            }}
          >
            <CloseRounded />
          </PaymentClose>

          <PaymentHeader>
            <PaymentEmoji>
              <AutoAwesomeRounded
                sx={{
                  position: "absolute",
                  top: -50,
                  right: -30,
                  transform: "rotate(18deg)",
                  fontSize: {
                    xs: 170,
                    sm: 220,
                  },
                  color: "rgba(234,179,8,0.08)",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />
            </PaymentEmoji>

            <PaymentTitle>{t("subscription_payment_title")}</PaymentTitle>

            <PaymentDescription>
              {t("subscription_payment_desc")}
            </PaymentDescription>
          </PaymentHeader>

          <PaymentMethods>
            {[
              {
                id: "uzum",
                icon: (
                  <img
                    src={IconUzumBank}
                    alt="uzum"
                    style={{
                      width: 118,
                      height: 78,
                      objectFit: "contain",
                    }}
                  />
                ),
              },
              {
                id: "click",
                icon: (
                  <img
                    src={IconClick}
                    alt="click"
                    style={{
                      width: 118,
                      height: 78,
                      objectFit: "contain",
                    }}
                  />
                ),
              },
              {
                id: "payme",
                icon: (
                  <img
                    src={IconPayme}
                    alt="payme"
                    style={{
                      width: 118,
                      height: 68,
                      objectFit: "contain",
                    }}
                  />
                ),
              },
            ].map((item) => {
              const active = selectedPayment === item.id;

              return (
                <PaymentMethod
                  key={item.id}
                  active={active}
                  onClick={() => handleSelectPayment(item.id)}
                >
                  <PaymentMethodLeft>{item.icon}</PaymentMethodLeft>

                  {active ? (
                    <CheckCircleRounded
                      sx={{
                        color: "#015856",
                      }}
                    />
                  ) : (
                    <RadioButtonUncheckedRounded
                      sx={{
                        color: "#98A2B3",
                      }}
                    />
                  )}
                </PaymentMethod>
              );
            })}
          </PaymentMethods>
        </PaymentTop>

        <PaymentBottom>
          <PaymentBackButton onClick={handleClosePayment}>
            {t("subscription_back")}
          </PaymentBackButton>

          <PaymentSubmitButton>{t("subscription_pay")}</PaymentSubmitButton>
        </PaymentBottom>
      </PaymentDialogContent>
    </PaymentDialog>
  );
};

export default PaymentModal;
