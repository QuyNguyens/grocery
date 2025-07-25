import { DeliveryAddress } from './deliveryAddress';

export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  address?: DeliveryAddress[];
}

export interface MetaCommon {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
  isLoading: boolean;
  error: string | null;
}
