import { PREFIX_SERVICES } from 'constants/service';
import axiosInstance from './axiosInstance';

const orderService = {
  async getOrderDetail(orderId: string) {
    return axiosInstance.get(PREFIX_SERVICES.order_service, `/order-detail?orderId=${orderId}`);
  },
  async getOrders(userId: string) {
    return axiosInstance.get(PREFIX_SERVICES.order_service, `?userId=${userId}`, {
      headers: {
        requiresAuth: true,
      },
    });
  },
};

export default orderService;
