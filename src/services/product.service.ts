import { PREFIX_SERVICES } from 'constants/service';
import axiosInstance from './axiosInstance';

const productServices = {
  create: async (params: any) => {
    return axiosInstance.post(PREFIX_SERVICES.product_service, '/create', params);
  },
  get: async (categoryId: string, page: number = 1, limit: number = 10) => {
    return axiosInstance.get(
      PREFIX_SERVICES.product_service,
      `$categoryId=${categoryId}&page=${page}&limit=${limit}`,
    );
  },
  fetchProductsByCollection: async (
    collectionKey: string,
    page: number = 1,
    limit: number = 10,
    categoryId: string = '',
  ) => {
    return axiosInstance.get(
      PREFIX_SERVICES.product_service,
      `/${collectionKey}?categoryId=${categoryId}&page=${page}&limit=${limit}`,
    );
  },
};

export default productServices;
