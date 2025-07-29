import { PREFIX_SERVICES } from 'constants/service';
import axiosInstance from './axiosInstance';
import { Product } from 'types/product';

const productServices = {
  create: async (params: Product) => {
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
    name: string = '',
  ) => {
    return axiosInstance.get(
      PREFIX_SERVICES.product_service,
      `/${collectionKey}?name=${name}&page=${page}&limit=${limit}`,
    );
  },
};

export default productServices;
