import { DeliveryAddress } from './deliveryAddress';

export interface ProfileFormData {
  name: string;
  avatar: string;
  avatarFile: File | null;
  phone?: string;
  showPasswordFields: boolean;
  newPassword: string;
  confirmPassword: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  address?: DeliveryAddress[];
  phone?: string;
}

export interface MetaCommon {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
  isLoading: boolean;
  error: string | null;
}
