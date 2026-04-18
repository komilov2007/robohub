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