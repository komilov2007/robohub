export interface LoginType {
  email: string;
  phone: string;
  user_id: number;
  full_name: string;
  last_name: string;
  first_name: string;
  is_verified: boolean;
  isExpiredAccess?: boolean;
  isExpiredRefresh?: boolean;
  tokens: {
    access: string;
    refresh: string;
  };
}

export interface LoginRequestType {
  contact: string;
  password: string;
}

export type RegisterFormType = {
  first_name: string;
  last_name: string;
  contact: string;
  password: string;
  confirm_password: string;
};

export type RegisterPayload = {
  first_name: string;
  last_name: string;
  contact: string;
  password: string;
  confirm_password: string;
};

export type RegisterResponsee = {
  message?: string;
  detail?: string;
};
export type RegisterResponse = {
  email?: string;
  phone?: string;
  user_id?: number;
  full_name?: string;
  last_name?: string;
  first_name?: string;
  is_verified?: boolean;
  tokens?: {
    access?: string;
    refresh?: string;
  };
  message?: string;
  detail?: string;
};
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