import { PREFIX_SERVICES } from 'constants/service';
import axiosInstance from './axiosInstance';
import { CartItem } from 'types/cart';
import { DeliveryAddress } from 'types/deliveryAddress';

const cartService = {
  async get(userId: string, page: number = 1, limit: number = 10) {
    return axiosInstance.get(
      PREFIX_SERVICES.cart_service,
      `/items?userId=${userId}&page=${page}&limit=${limit}`,
      {
        headers: {
          requiresAuth: true,
        },
      },
    );
  },

  async updateCartItem(userId: string, itemId: string, quantity: number) {
    return axiosInstance.put(
      PREFIX_SERVICES.cart_service,
      `/update?userId=${userId}&itemId=${itemId}&quantity=${quantity}`,
      {},
      {
        headers: {
          requiresAuth: true,
        },
      },
    );
  },

  async create(userId: string) {
    return axiosInstance.post(PREFIX_SERVICES.cart_service, `/create?userId=${userId}`);
  },

  async addCartItem(cartItem: any, userId: string) {
    return axiosInstance.post(
      PREFIX_SERVICES.cart_service,
      `/add-cart-item?userId=${userId}`,
      cartItem,
      {
        headers: {
          requiresAuth: true,
        },
      },
    );
  },

  async deleteCartItem(userId: string, itemId: string) {
    return axiosInstance.delete(
      PREFIX_SERVICES.cart_service,
      `/delete?userId=${userId}&itemId=${itemId}`,
      {
        headers: {
          requiresAuth: true,
        },
      },
    );
  },

  async payment(userId: string, totalPrice: number, items: CartItem[], address: DeliveryAddress) {
    return axiosInstance.post(
      PREFIX_SERVICES.vnpay_service,
      '/create-qr',
      {
        userId,
        totalPrice,
        items,
        address,
      },
      {
        headers: {
          requiresAuth: true,
        },
      },
    );
  },
};

export default cartService;
