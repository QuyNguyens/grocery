import { PREFIX_SERVICES } from 'constants/service';
import axiosInstance from './axiosInstance';

const reviewService = {
  async create(review: any) {
    return axiosInstance.post(PREFIX_SERVICES.review_service, `/create`, review);
  },
};

export default reviewService;
