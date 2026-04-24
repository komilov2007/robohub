import { useMemo, useState } from "react";
import ProductImg from "@/assets/img//table-phone.webp";
export type ProductStatus = "Archived" | "Active" | "Draft";
export type PlatformTone = "green" | "orange" | "red" | "teal";

export interface PlatformItem {
  name: string;
  status: string;
  tone: PlatformTone;
}

export interface ProductStats {
  rating: string;
  views: string;
  conversion: string;
  sold: string;
  returned: string;
  invalid: string;
}

export interface ProductItem {
  id: number;
  image: string;
  status: ProductStatus;
  name: string;
  sku: string;
  articleId: string;
  price: string;
  platforms: PlatformItem[];
  stats: ProductStats;
}

export interface TabItem {
  label: string;
  count: number;
}

const tabs: TabItem[] = [
  { label: "all_products", count: 0 },
  { label: "on_sale", count: 13 },
  { label: "running_out", count: 2 },
  { label: "not_for_sale", count: 6 },
  { label: "blocked", count: 0 },
  { label: "archived", count: 4 },
  { label: "attributes_not_filled", count: 0 },
];

const productsMock: ProductItem[] = [
  {
    id: 1987867,
    image: ProductImg,
    status: "Archived",
    name: "Mackbook uchun charm g'ilof, 15/16 dyumli",
    sku: "SWA234A",
    articleId: "1987867",
    price: "129 000 so'm dan boshlab",
    platforms: [
      { name: "Ozon", status: "Tasdiqlangan", tone: "green" },
      { name: "Robosell", status: "Ulash", tone: "teal" },
      { name: "Wildberries", status: "Moderatsiyada", tone: "orange" },
      { name: "Yandex Market", status: "Ulash", tone: "teal" },
      { name: "Uzum Market", status: "Rad etilgan", tone: "red" },
    ],
    stats: {
      rating: "4.3",
      views: "110",
      conversion: "57%",
      sold: "45",
      returned: "0",
      invalid: "0",
    },
  },
  {
    id: 1987868,
    image: ProductImg,
    status: "Active",
    name: "Mackbook uchun charm g'ilof, 15/16 dyumli",
    sku: "SWA234A",
    articleId: "1987868",
    price: "129 000 so'm dan boshlab",
    platforms: [
      { name: "Ozon", status: "Tasdiqlangan", tone: "green" },
      { name: "Robosell", status: "Ulash", tone: "teal" },
      { name: "Wildberries", status: "Moderatsiyada", tone: "orange" },
      { name: "Yandex Market", status: "Ulash", tone: "teal" },
      { name: "Uzum Market", status: "Rad etilgan", tone: "red" },
    ],
    stats: {
      rating: "4.3",
      views: "110",
      conversion: "57%",
      sold: "45",
      returned: "0",
      invalid: "0",
    },
  },
  {
    id: 1987868,
    image: ProductImg,
    status: "Active",
    name: "Mackbook uchun charm g'ilof, 15/16 dyumli",
    sku: "SWA234A",
    articleId: "1987868",
    price: "129 000 so'm dan boshlab",
    platforms: [
      { name: "Ozon", status: "Tasdiqlangan", tone: "green" },
      { name: "Robosell", status: "Ulash", tone: "teal" },
      { name: "Wildberries", status: "Moderatsiyada", tone: "orange" },
      { name: "Yandex Market", status: "Ulash", tone: "teal" },
      { name: "Uzum Market", status: "Rad etilgan", tone: "red" },
    ],
    stats: {
      rating: "4.3",
      views: "110",
      conversion: "57%",
      sold: "45",
      returned: "0",
      invalid: "0",
    },
  },
  {
    id: 1987868,
    image: ProductImg,
    status: "Active",
    name: "Mackbook uchun charm g'ilof, 15/16 dyumli",
    sku: "SWA234A",
    articleId: "1987868",
    price: "129 000 so'm dan boshlab",
    platforms: [
      { name: "Ozon", status: "Tasdiqlangan", tone: "green" },
      { name: "Robosell", status: "Ulash", tone: "teal" },
      { name: "Wildberries", status: "Moderatsiyada", tone: "orange" },
      { name: "Yandex Market", status: "Ulash", tone: "teal" },
      { name: "Uzum Market", status: "Rad etilgan", tone: "red" },
    ],
    stats: {
      rating: "4.3",
      views: "110",
      conversion: "57%",
      sold: "45",
      returned: "0",
      invalid: "0",
    },
  },
  {
    id: 1987868,
    image: ProductImg,
    status: "Active",
    name: "Mackbook uchun charm g'ilof, 15/16 dyumli",
    sku: "SWA234A",
    articleId: "1987868",
    price: "129 000 so'm dan boshlab",
    platforms: [
      { name: "Ozon", status: "Tasdiqlangan", tone: "green" },
      { name: "Robosell", status: "Ulash", tone: "teal" },
      { name: "Wildberries", status: "Moderatsiyada", tone: "orange" },
      { name: "Yandex Market", status: "Ulash", tone: "teal" },
      { name: "Uzum Market", status: "Rad etilgan", tone: "red" },
    ],
    stats: {
      rating: "4.3",
      views: "110",
      conversion: "57%",
      sold: "45",
      returned: "0",
      invalid: "0",
    },
  },
];

export default function usePage() {
  const [tab, setTab] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    let data = productsMock;

    if (query) {
      data = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(query) ||
          item.sku.toLowerCase().includes(query) ||
          item.articleId.toLowerCase().includes(query)
        );
      });
    }

    return data;
  }, [search]);

  return {
    tab,
    setTab,
    search,
    setSearch,
    tabs,
    filteredProducts,
  };
}
