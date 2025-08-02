import { PREFIX_SERVICES } from 'constants/service';
import axiosInstance from './axiosInstance';

const reviewService = {
  async create(review: any) {
    return axiosInstance.post(PREFIX_SERVICES.review_service, `/create`, review, {
      headers: {
        requiresAuth: true,
      },
    });
  },
};

export default reviewService;
