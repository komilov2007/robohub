import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneImg from "@/assets/img/table-phone.webp";
export type ReviewStatus = "all" | "new" | "unanswered" | "reviewed";

export interface ReviewItem {
  id: number;
  marketplace: string;
  productName: string;
  productId: string;
  image: string;
  time: string;
  date: string;
  rating: number;
  comment: string;
  client: string;
  sku: string;
  reviewId: string;
  shop: string;
  shopRating: number;
  orderFinished: string;
  answer?: string;
}

export const usePage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ReviewStatus>("all");
  const [selectedId, setSelectedId] = useState(1);
  const [search, setSearch] = useState("");
  const [reply, setReply] = useState("");

  const reviews: ReviewItem[] = useMemo(
    () =>
      Array.from({ length: 15 }).map((_, index) => ({
        id: index + 1,
        marketplace: "Uzum Market",
        productName: "Mackbook uchun charm g‘ilof, 15/16 dyumli",
        productId: "724586737",
        image: PhoneImg,
        time: "11:07",
        date: "13.09.2025",
        rating: index % 5 === 0 ? 3 : index % 3 === 0 ? 4 : 5,
        comment:
          index % 4 === 0
            ? t("review_mock_short")
            : index % 3 === 0
              ? t("review_mock_medium")
              : t("review_mock_long"),
        client: "Asadbek Mirolimov",
        sku: "13 inch, Ametist",
        reviewId: "1313615357",
        shop: "Zarimall",
        shopRating: 4.1,
        orderFinished: "10:39; 13.09.2025",
      })),
    [t],
  );

  const selectedReview =
    reviews.find((item) => item.id === selectedId) || reviews[0];

  const tabs = [
    { key: "all" as const, label: t("review_tab_all"), count: 127 },
    { key: "new" as const, label: t("review_tab_new"), count: 17 },
    {
      key: "unanswered" as const,
      label: t("review_tab_unanswered"),
      count: 73,
    },
    {
      key: "reviewed" as const,
      label: t("review_tab_reviewed"),
      count: 34,
    },
  ];

  const handleSend = () => {
    if (!reply.trim()) return;
    console.log("reply:", reply);
    setReply("");
  };

  return {
    t,
    tabs,
    reviews,
    activeTab,
    selectedId,
    selectedReview,
    search,
    reply,
    setReply,
    setSearch,
    setActiveTab,
    setSelectedId,
    handleSend,
  };
};
