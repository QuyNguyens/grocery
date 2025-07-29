import { PREFIX_SERVICES } from 'constants/service';
import axiosInstance from './axiosInstance';

const ProductVariantServices = {
  async getByProductId(productId: string) {
    return axiosInstance.get(PREFIX_SERVICES.productVariant_service, `?productId=${productId}`);
  },
};

export default ProductVariantServices;
