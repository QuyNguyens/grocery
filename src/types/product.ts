import { MetaCommon } from './user';

export interface Product {
  image: string;
  description: string;
  amount: number;
  weight: number;
  _id: string;
  name: string;
  categoryId: string;
  basePrice: number;
  images: string[];
}

export interface ProductState extends MetaCommon {
  products: any[];
}

export interface ProductCollectionState {
  products: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
  isLoading: boolean;
  error: string | null;
}
