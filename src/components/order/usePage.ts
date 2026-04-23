import { useMemo, useState } from 'react'
import * as yup from 'yup'
export interface DashboardOrder {
  id: number
  order_number: string
  marketplace: string
  product_name: string
  quantity: number
  shop_name: string
  work_type: string
  created_at: string
  image?: string
  moreCount?: number
}
const ROWS_PER_PAGE = 13
const tabValues = [
  'yangilar',
  'yigishdagilar',
  'qabul_qilingan',
  'topshirishni_kutyapti',
  'topshirilgan',
  'bekor_qilingan',
  'qaytarishlar',
] as const
type TabValue = (typeof tabValues)[number]
const searchSchema = yup.string().max(100).required().default('')
const pageSchema = yup.number().integer().min(1).required().default(1)
const activeTabSchema = yup
  .mixed<TabValue>()
  .oneOf(tabValues)
  .required()
  .default('yangilar')
const MOCK_DATA: DashboardOrder[] = [
  {
    id: 1,
    order_number: '72445089',
    marketplace: 'Uzum Market',
    product_name: 'Macbook uchun charm g‘ilof, 15/16 dyuym',
    quantity: 1,
    shop_name: 'Vizart Shop',
    work_type: 'FBO',
    created_at: '11:07, 13.09.2025',
    moreCount: 4,
  },
  {
    id: 2,
    order_number: '72445089',
    marketplace: 'Wildberries',
    product_name: 'Macbook uchun charm g‘ilof, 15/16 dyuym',
    quantity: 1,
    shop_name: 'Vizart Shop',
    work_type: 'FBS',
    created_at: '11:07, 13.09.2025',
  },
  {
    id: 3,
    order_number: '72445089',
    marketplace: 'Ozon',
    product_name: 'Macbook uchun charm g‘ilof, 15/16 dyuym',
    quantity: 1,
    shop_name: 'Vizart Shop',
    work_type: 'DBS',
    created_at: '11:07, 13.09.2025',
  },
  {
    id: 4,
    order_number: '72445090',
    marketplace: 'Wildberries',
    product_name: 'HP uchun to‘qimalar qopqog‘i, 15 dyuym',
    quantity: 2,
    shop_name: 'TechZone',
    work_type: 'DBS',
    created_at: '11:15, 14.09.2025',
  },
  {
    id: 5,
    order_number: '72445091',
    marketplace: 'AliExpress',
    product_name: 'Xiaomi Mi Book silikon qopqoq',
    quantity: 3,
    shop_name: 'Gadget World',
    work_type: 'DBS',
    created_at: '11:20, 15.09.2025',
  },
  {
    id: 6,
    order_number: '72445092',
    marketplace: 'eBay',
    product_name: 'Lenovo IdeaPad rang-barang qopqoq',
    quantity: 4,
    shop_name: 'Laptop Cases',
    work_type: 'DBS',
    created_at: '11:25, 16.09.2025',
  },
  {
    id: 7,
    order_number: '72445093',
    marketplace: 'Amazon',
    product_name: 'Dell uchun zamonaviy charm qopqoq',
    quantity: 5,
    shop_name: 'Electro Market',
    work_type: 'DBS',
    created_at: '11:30, 17.09.2025',
  },
  {
    id: 8,
    order_number: '72445094',
    marketplace: 'Best Buy',
    product_name: 'Asus uchun mustahkam qopqoq',
    quantity: 2,
    shop_name: 'Gadgets Hub',
    work_type: 'FBS',
    created_at: '11:35, 18.09.2025',
  },
  {
    id: 9,
    order_number: '72445095',
    marketplace: 'Newegg',
    product_name: 'Acer Swift uchun engil qopqoq',
    quantity: 6,
    shop_name: 'PC Essentials',
    work_type: 'FBS',
    created_at: '11:40, 19.09.2025',
  },
  {
    id: 10,
    order_number: '72445096',
    marketplace: 'Gearbest',
    product_name: 'Razer Blade qora charm qopqoq',
    quantity: 3,
    shop_name: 'Gaming Gear',
    work_type: 'FBS',
    created_at: '11:45, 20.09.2025',
  },
  {
    id: 11,
    order_number: '72445097',
    marketplace: 'Amazon',
    product_name: 'Dell uchun qora case',
    quantity: 1,
    shop_name: 'Tech Shop',
    work_type: 'FBO',
    created_at: '12:05, 21.09.2025',
  },
  {
    id: 12,
    order_number: '72445098',
    marketplace: 'Ozon',
    product_name: 'HP Pavilion uchun qopqoq',
    quantity: 2,
    shop_name: 'Ultra Market',
    work_type: 'DBS',
    created_at: '12:10, 22.09.2025',
  },
  {
    id: 13,
    order_number: '72445099',
    marketplace: 'Wildberries',
    product_name: 'Macbook Air uchun himoya qopqoq',
    quantity: 1,
    shop_name: 'Vizart Shop',
    work_type: 'FBS',
    created_at: '12:15, 23.09.2025',
  },
  {
    id: 14,
    order_number: '72445100',
    marketplace: 'Uzum Market',
    product_name: 'Lenovo uchun travel case',
    quantity: 2,
    shop_name: 'Case World',
    work_type: 'FBO',
    created_at: '12:20, 24.09.2025',
  },
  {
    id: 15,
    order_number: '72445101',
    marketplace: 'Amazon',
    product_name: 'Razer Blade uchun himoya qobiq',
    quantity: 1,
    shop_name: 'Gaming Gear',
    work_type: 'DBS',
    created_at: '12:25, 25.09.2025',
  },
]
export const usePage = () => {
  const [search, setSearchState] = useState<string>(searchSchema.getDefault())
  const [page, setPageState] = useState<number>(pageSchema.getDefault())
  const [activeTab, setActiveTabState] = useState<TabValue>(
    activeTabSchema.getDefault() as TabValue)
  const [isLoading] = useState<boolean>(false)
  const [isError] = useState<boolean>(false)
  const tabs: Array<{ id: TabValue; label: string; count: number }> = [
    { id: 'yangilar', label: 'Yangilar', count: 0 },
    { id: 'yigishdagilar', label: "Yig‘ishdagilar", count: 1 },
    { id: 'qabul_qilingan', label: 'Qabul qilingan', count: 1 },
    { id: 'topshirishni_kutyapti', label: 'Topshirishni kutyapti', count: 1 },
    { id: 'topshirilgan', label: 'Topshirilgan', count: 23 },
    { id: 'bekor_qilingan', label: 'Bekor qilingan', count: 4 },
    { id: 'qaytarishlar', label: 'Qaytarishlar', count: 0 }, ]
  const setSearch = (value: string) => {
    if (searchSchema.isValidSync(value)) {
      setSearchState(value)
      setPageState(1)}}
  const setPage = (value: number) => {
    if (pageSchema.isValidSync(value)) {
      setPageState(value)}}
  const setActiveTab = (value: string) => {
    if (activeTabSchema.isValidSync(value)) {
      setActiveTabState(value as TabValue)
      setPageState(1) }}
  const rows = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return MOCK_DATA
    return MOCK_DATA.filter((item) =>
      [ item.order_number,
        item.marketplace,
        item.product_name,
        item.shop_name,
        item.work_type,
        item.created_at,].join(' ').toLowerCase().includes(query))}, [search])
  const totalCount = rows.length
  const totalPages = Math.max(1, Math.ceil(totalCount / ROWS_PER_PAGE))
  const paginatedRows = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE
    const end = start + ROWS_PER_PAGE
    return rows.slice(start, end)
  }, [rows, page])
  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)}
    if (page <= 3) return [1, 2, 3, 4, 5]
    if (page >= totalPages - 2) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,]}
    return [page - 2, page - 1, page, page + 1, page + 2]
  }, [page, totalPages])
  const handlePrevPage = () => {
    setPageState((prev) => Math.max(prev - 1, 1))}
  const handleNextPage = () => {
    setPageState((prev) => Math.min(prev + 1, totalPages))}
  return {
    tabs,
    activeTab,
    setActiveTab,
    search,
    setSearch,
    page,
    setPage,
    rows,
    paginatedRows,
    totalCount,
    totalPages,
    pageNumbers,
    handlePrevPage,
    handleNextPage,
    ROWS_PER_PAGE,
    isLoading,
    isError,
  }
}