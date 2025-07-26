export interface CartItem {
  _id: string;
  productVariantId: string;
  name: string;
  type?: string;
  quantity: number;
  attributesSnapshot: {
    name: string;
    value: string;
  };
  discount: {
    type: string;
    value: number;
  };
  image: string;
  price: number;
}

export interface Cart {
  items: CartItem[];
}
