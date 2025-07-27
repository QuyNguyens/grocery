import { UserRating } from './ratingCustomer';
import { MetaCommon } from './user';

interface Discount {
  type: 'percentage' | 'fixed';
  value: number;
  endDate?: Date;
}

export interface Product {
  _id: string;
  image: string;
  description: string;
  name: string;
  categoryId: string;
  basePrice: number;
  images: string[];
  attributeValueIds: string[];
  discount?: Discount;
  rating?: number;
  totalRating: number;
  sku: string;
  categoryType?: string;
  categoryRefType?: string[];
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
  images: string[];
  type?: string;
  categoryType?: string;
  categoryRefType?: string[];
  attribute?: string[];
  rating?: {
    value: number;
    total: number;
  };
  userRating: UserRating[];
}
