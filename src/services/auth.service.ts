import { PREFIX_SERVICES } from 'constants/service';
import axiosInstance from './axiosInstance';

const authServices = {
  login: async (params: any) => {
    return axiosInstance.post(PREFIX_SERVICES.auth_service, '/login', params);
  },
  signup: async (params: any) => {
    return axiosInstance.post(PREFIX_SERVICES.auth_service, '/signup', params);
  },
};

export default authServices;
