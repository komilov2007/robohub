import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api/api'

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
}
interface MarketplaceIconProps {
  label: string
  sx: Record<string, any>
}

const getMarketplaceIcon = (marketplace: string): MarketplaceIconProps => {
  const value = marketplace?.toLowerCase?.() || ''

  if (value.includes('uzum')) {
    return {
      label: 'uz',
      sx: {
        background: 'linear-gradient(135deg, #7c3aed 0%, #9333ea 100%)',
        color: '#ffd60a',
        fontSize: '9px',
        fontWeight: 700,
      },
    }
  }

  if (value.includes('wildberries')) {
    return {
      label: 'wb',
      sx: {
        background: 'linear-gradient(135deg, #d946ef 0%, #a21caf 100%)',
        color: '#ffffff',
        fontSize: '9px',
        fontWeight: 700,
      },
    }
  }

  if (value.includes('yandex')) {
    return {
      label: 'Y',
      sx: {
        background: '#ef4444',
        color: '#ffffff',
        fontSize: '9px',
        fontWeight: 700,
      },
    }
  }

  return {
    label: 'OZON',
    sx: {
      background: 'transparent',
      color: '#005bff',
      fontSize: '10px',
      fontWeight: 800,
      width: '38px',
    },
  }
}
const fetchOrders = async (): Promise<DashboardOrder[]> => {
  const res = await api.get('dashboard/new-dashboard/')
  return res.data
}

export const usePage = () => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['dashboard-orders'],
    queryFn: fetchOrders,
  })

  const filteredRows = useMemo(() => {
    if (!data) return []

    const query = search.toLowerCase()

    if (!query) return data

    return data.filter((item) =>
      [
        item.order_number,
        item.marketplace,
        item.product_name,
        item.shop_name,
        item.work_type,
      ]
        .join(' ')
        .toLowerCase()
        .includes(query)
    )
  }, [data, search])

  return {
    rows: filteredRows,
    isLoading,
    isError,
    search,
    setSearch,
    page,
    setPage,
    getMarketplaceIcon
  }
}