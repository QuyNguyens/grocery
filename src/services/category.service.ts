import { PREFIX_SERVICES } from 'constants/service';
import axiosInstance from './axiosInstance';

export const categoryServices = {
  async get() {
    return axiosInstance.get(PREFIX_SERVICES.category_service, '');
  },
};
