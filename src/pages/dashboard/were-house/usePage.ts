import { useMemo, useState } from "react";
import TablePhoneImg from "@/assets/img/table-phone.webp";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export interface WarehouseRow {
  id: number;
  group: string;
  productName: string;
  sku: string;
  ikpu: string;
  buyPrice: string;
  sellPrice: string;
  quantity: number;
  addedAt: string;
  image: string;
}

export interface WarehouseRenderItem {
  type: "group" | "row";
  group?: string;
  row?: WarehouseRow;
}

const formSchema = yup.object({
  text: yup
    .string()
    .required("Matn majburiy")
    .min(3, "Kamida 3 ta harf kiriting")
    .default(""),
});

const pageSchema = yup.number().integer().min(1).required().default(1);

const rowsPerPageSchema = yup
  .number()
  .integer()
  .oneOf([5, 10, 15, 20])
  .required()
  .default(15);

const modalOpenSchema = yup.boolean().required().default(false);

const quantityValueSchema = yup.number().integer().min(0).required();

const quantitiesSchema = yup
  .object()
  .test("all-values-valid", "Invalid quantity values", (value) => {
    if (!value) return true;

    return Object.values(value).every((item) =>
      quantityValueSchema.isValidSync(item),
    );
  })
  .required()
  .default({});

export type FormSchemaType = yup.InferType<typeof formSchema>;

/* -------------------- mock data -------------------- */

const baseRows: WarehouseRow[] = [
  {
    id: 1,
    group: "ZARYADCHIK",
    productName: "Mackbook uchun charm g'ilof, 15/16 dyumli",
    sku: "72445089",
    ikpu: "12132434354",
    buyPrice: "17 500 so'm",
    sellPrice: "19 500 so'm",
    quantity: 27,
    addedAt: "11:07; 13.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 2,
    group: "ZARYADCHIK",
    productName: "Ipad uchun suv o'tkazmaydigan qoplama, 10.2 dyumli",
    sku: "59432040",
    ikpu: "90123456789",
    buyPrice: "12 000 so'm",
    sellPrice: "15 000 so'm",
    quantity: 35,
    addedAt: "09:45; 14.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 3,
    group: "ZARYADCHIK",
    productName: "Samsung Galaxy uchun kuchli himoya qopqog'i, S21",
    sku: "85946372",
    ikpu: "32145698700",
    buyPrice: "8 000 so'm",
    sellPrice: "10 000 so'm",
    quantity: 50,
    addedAt: "14:20; 13.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 4,
    group: "ZARYADCHIK",
    productName: "Xiaomi telefon uchun avtonom quvvat banki, 10000 mAh",
    sku: "23456789",
    ikpu: "78901234567",
    buyPrice: "25 000 so'm",
    sellPrice: "30 000 so'm",
    quantity: 20,
    addedAt: "10:15; 15.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 5,
    group: "ZARYADCHIK",
    productName: "Sony naushniklari, simsiz modeli",
    sku: "45678901",
    ikpu: "23456789012",
    buyPrice: "40 000 so'm",
    sellPrice: "45 000 so'm",
    quantity: 15,
    addedAt: "16:30; 12.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 6,
    group: "IPHONE 17 PRO MAX",
    productName: "Asus monitor uchun qo'shimcha LED yoritgich",
    sku: "32109876",
    ikpu: "56789012345",
    buyPrice: "50 000 so'm",
    sellPrice: "55 000 so'm",
    quantity: 10,
    addedAt: "11:00; 13.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 7,
    group: "IPHONE 17 PRO MAX",
    productName: "Dell portativ kompyuter uchun docking station",
    sku: "13579246",
    ikpu: "67890123456",
    buyPrice: "70 000 so'm",
    sellPrice: "75 000 so'm",
    quantity: 5,
    addedAt: "09:50; 15.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 8,
    group: "IPHONE 17 PRO MAX",
    productName: "Huawei smart soat, yangi model",
    sku: "24681357",
    ikpu: "89012345678",
    buyPrice: "65 000 so'm",
    sellPrice: "70 000 so'm",
    quantity: 8,
    addedAt: "14:10; 12.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 9,
    group: "IPHONE 17 PRO MAX",
    productName: "GoPro kamera uchun qo'shimcha batareya",
    sku: "78901234",
    ikpu: "98765432101",
    buyPrice: "15 000 so'm",
    sellPrice: "18 000 so'm",
    quantity: 40,
    addedAt: "12:25; 14.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 10,
    group: "IPHONE 17 PRO MAX",
    productName: "Apple AirPods, avtonom quvvat bilan",
    sku: "10293847",
    ikpu: "65432109876",
    buyPrice: "60 000 so'm",
    sellPrice: "65 000 so'm",
    quantity: 12,
    addedAt: "10:12; 13.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 11,
    group: "IPHONE 17 PRO MAX",
    productName: "Lenovo gaming qulayligi, yangi model",
    sku: "98765432",
    ikpu: "12345678901",
    buyPrice: "100 000 so'm",
    sellPrice: "110 000 so'm",
    quantity: 3,
    addedAt: "15:40; 12.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 12,
    group: "IPHONE 17 PRO MAX",
    productName: "Nikon kameralar uchun ob'ektiv to'plami",
    sku: "43210987",
    ikpu: "09876543210",
    buyPrice: "150 000 so'm",
    sellPrice: "160 000 so'm",
    quantity: 2,
    addedAt: "11:30; 14.09.2025",
    image: TablePhoneImg,
  },
  {
    id: 13,
    group: "IPHONE 17 PRO MAX",
    productName: "Oculus VR ko'zoynaklari, interaktiv model",
    sku: "56789012",
    ikpu: "34567890123",
    buyPrice: "300 000 so'm",
    sellPrice: "310 000 so'm",
    quantity: 1,
    addedAt: "13:55; 15.09.2025",
    image: TablePhoneImg,
  },
];

const createRows = (): WarehouseRow[] => {
  const total = 13;
  const rows: WarehouseRow[] = [];

  for (let i = 0; i < total; i += 1) {
    const base = baseRows[i % baseRows.length];

    rows.push({
      ...base,
      id: i + 1,
      sku: String(Number(base.sku) + i),
      ikpu: String(Number(base.ikpu) + i),
      quantity: Math.max(1, base.quantity + (i % 7) - 3),
    });
  }

  return rows;
};

const allRows = createRows();

export const usePage = () => {
  const [page, setPageState] = useState<number>(pageSchema.getDefault());
  const [rowsPerPage, setRowsPerPageState] = useState<number>(
    rowsPerPageSchema.getDefault(),
  );
  const [modalOpen, setModalOpenState] = useState<boolean>(
    modalOpenSchema.getDefault(),
  );
  const [quantities, setQuantitiesState] = useState<Record<number, number>>(
    quantitiesSchema.cast(
      Object.fromEntries(allRows.map((row) => [row.id, row.quantity])),
    ) as Record<number, number>,
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: yupResolver(formSchema),
    defaultValues: formSchema.getDefault(),
    mode: "onSubmit",
  });

  const totalCount = allRows.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / rowsPerPage));

  const setPage = (value: number) => {
    if (!pageSchema.isValidSync(value)) return;
    setPageState(value);
  };

  const setRowsPerPage = (value: number) => {
    if (!rowsPerPageSchema.isValidSync(value)) return;
    setRowsPerPageState(value);
    setPageState(1);
  };

  const setQuantity = (id: number, value: string) => {
    const parsed = Number(value.replace(/\D/g, ""));
    const safeValue = Number.isNaN(parsed) ? 0 : parsed;

    if (!quantityValueSchema.isValidSync(safeValue)) return;

    const nextQuantities = {
      ...quantities,
      [id]: safeValue,
    };

    if (!quantitiesSchema.isValidSync(nextQuantities)) return;

    setQuantitiesState(nextQuantities);
  };

  const handleOpenModal = () => {
    if (!modalOpenSchema.isValidSync(true)) return;
    setModalOpenState(true);
  };
  const onSubmit = (data: FormSchemaType) => {
    console.log(data.text);
    toast.success("Miqdor hozirchalik consolga saqlandi");
    handleCloseModal();
  };
  const handleCloseModal = () => {
    if (!modalOpenSchema.isValidSync(false)) return;
    setModalOpenState(false);
  };

  const paginatedRows = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return allRows.slice(start, end);
  }, [page, rowsPerPage]);

  const tableItems = useMemo<WarehouseRenderItem[]>(() => {
    const items: WarehouseRenderItem[] = [];
    let lastGroup = "";

    paginatedRows.forEach((row) => {
      if (row.group !== lastGroup) {
        items.push({
          type: "group",
          group: row.group,
        });
        lastGroup = row.group;
      }

      items.push({
        type: "row",
        row,
      });
    });

    return items;
  }, [paginatedRows]);

  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (page <= 3) {
      return [1, 2, 3, 4, 5];
    }

    if (page >= totalPages - 2) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [page - 2, page - 1, page, page + 1, page + 2];
  }, [page, totalPages]);

  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 1));
  };

  const handleNextPage = () => {
    setPage(Math.min(page + 1, totalPages));
  };

  return {
    page,
    setPage,
    rowsPerPage,
    handleChangeRowsPerPage: setRowsPerPage,
    totalCount,
    totalPages,
    pageNumbers,
    handlePrevPage,
    handleNextPage,
    tableItems,
    quantities,
    setQuantity,
    modal: {
      value: modalOpen,
      setTrue: handleOpenModal,
      setFalse: handleCloseModal,
    },
    handleOpenModal,
    handleCloseModal,
    onSubmit,
    handleSubmit,
    errors,
    control,
  };
};
