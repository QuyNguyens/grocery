import { UserRating } from './ratingCustomer';
import { MetaCommon } from './user';

interface Discount {
  type: 'percentage' | 'fixed';
  value: number;
  endDate?: Date;
}

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
  discount?: Discount;
  rating?: number;
  sku: string;
}

export interface ProductState extends MetaCommon {
  products: Product[];
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

export interface ProductVariant {
  _id: string;
  productId: string;
  attributeValueIds: string[];
  price: number;
  currentPrice: number;
  discount: {
    type: 'percentage' | 'fixed';
    value: number;
    endDate?: Date;
  };
  quantity: number;
  sku: string;
  name?: string;
  description?: string;
  type?: string;
  attribute?: string[];
  images: string[];
  rating?: {
    value: number;
    total: number;
  };
  userRating: UserRating[];
}
