import { PREFIX_SERVICES } from 'constants/service';
import axiosInstance from './axiosInstance';

const cartService = {
  async get(userId: string, page: number = 1, limit: number = 10) {
    return axiosInstance.get(
      PREFIX_SERVICES.cart_service,
      `/items?userId=${userId}&page=${page}&limit=${limit}`,
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
    );
  },
};

export default cartService;
