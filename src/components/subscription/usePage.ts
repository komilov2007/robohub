import { useMemo, useState } from "react";

export interface MarketplaceItem {
  id: string;

  title: string;

  description: string;

  features: string[];

  bonus: string;

  gradient: string;

  stores: number;
}

const BASE_PRICE = 500000;

const PERIODS = {
  3: 1,
  6: 0.95,
  12: 0.85,
};

export const usePage = () => {
  const [period, setPeriod] = useState<3 | 6 | 12>(3);
  const [paymentModal, setPaymentModal] = useState(false);

  const [selectedPayment, setSelectedPayment] = useState("uzum");

  const handleOpenPayment = () => {
    setPaymentModal(true);
  };

  const handleClosePayment = () => {
    setPaymentModal(false);
  };

  const handleSelectPayment = (value: string) => {
    setSelectedPayment(value);
  };
  const [marketplaces, setMarketplaces] = useState<MarketplaceItem[]>([
    {
      id: "uzum",

      title: "Uzum Market",

      description: "subscription_uzum_desc",

      features: [
        "subscription_uzum_feature_1",
        "subscription_uzum_feature_2",
        "subscription_uzum_feature_3",
      ],

      bonus: "Bonus",

      gradient:
        "linear-gradient(177deg, rgba(191,138,255,0.95) -10%, rgba(255,255,255,0.96) 50%)",

      stores: 3,
    },

    {
      id: "yandex",

      title: "Yandex Market",

      description: "subscription_yandex_desc",

      features: [
        "subscription_yandex_feature_1",
        "subscription_yandex_feature_2",
        "subscription_yandex_feature_3",
      ],

      bonus: "Bonus",

      gradient:
        "linear-gradient(177deg, rgba(255,230,112,0.95) -10%, rgba(255,255,255,0.96) 50%)",

      stores: 3,
    },

    {
      id: "wildberries",

      title: "Wildberries",

      description: "subscription_wb_desc",

      features: [
        "subscription_wb_feature_1",
        "subscription_wb_feature_2",
        "subscription_wb_feature_3",
      ],

      bonus: "Bonus",

      gradient:
        "linear-gradient(177deg, rgba(222,148,255,0.95) -10%, rgba(255,255,255,0.96) 50%)",

      stores: 3,
    },

    {
      id: "ozon",

      title: "Ozon",

      description: "subscription_ozon_desc",

      features: [
        "subscription_ozon_feature_1",
        "subscription_ozon_feature_2",
        "subscription_ozon_feature_3",
      ],

      bonus: "Bonus",

      gradient:
        "linear-gradient(177deg, rgba(145,185,255,0.95) -10%, rgba(255,255,255,0.96) 50%)",

      stores: 3,
    },
  ]);

  const handlePeriod = (value: 3 | 6 | 12) => {
    setPeriod(value);
  };

  const handleCounter = (id: string, type: "increment" | "decrement") => {
    setMarketplaces((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        const nextStores =
          type === "increment" ? item.stores + 1 : Math.max(0, item.stores - 1);

        return {
          ...item,
          stores: nextStores,
        };
      }),
    );
  };

  const additionalStores = useMemo(() => {
    return marketplaces.reduce((acc, item) => {
      if (item.stores <= 3) return acc;

      return acc + (item.stores - 3);
    }, 0);
  }, [marketplaces]);

  const additionalPrice = additionalStores * 50000;

  const monthlyPrice = Math.floor(
    (BASE_PRICE + additionalPrice) * PERIODS[period],
  );

  const totalPrice = monthlyPrice * period;

  return {
    period,

    marketplaces,

    additionalStores,

    additionalPrice,

    monthlyPrice,

    totalPrice,

    handleCounter,

    handlePeriod,

    paymentModal,
    selectedPayment,
    handleOpenPayment,
    handleClosePayment,
    handleSelectPayment,
  };
};
