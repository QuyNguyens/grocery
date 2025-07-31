export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';

export interface Order {
  _id: string;
  userId: string;
  status: OrderStatus;
  totalAmount: number;
  paymentMethod: 'COD' | 'PayPal' | 'CreditCard';
  createdAt?: Date;
}

export interface OrderDetail {
  orderId: string;
  productVariantId: string;
  quantity: number;
  price: number;
  image: string;
  name: string;
  type: string;
}
