import { PREFIX_SERVICES } from 'constants/service';
import axiosInstance from './axiosInstance';
import { LoginFormInputs } from 'views/LoginScreen/components/FormLogin';
import { FormSignUpInputs } from 'views/SignUpScreen/components/FormSignUp';

const authServices = {
  login: async (params: LoginFormInputs) => {
    return axiosInstance.post(PREFIX_SERVICES.auth_service, '/login', params);
  },

  signup: async (params: FormSignUpInputs) => {
    return axiosInstance.post(PREFIX_SERVICES.auth_service, '/signup', params);
  },

  update: async (params: any) => {
    const formData = new FormData();
    formData.append('userId', params.userId);
    formData.append('username', params?.name);
    formData.append('phone', params?.phone);
    formData.append('password', params?.password);
    formData.append('avatar', params?.avatar);

    return axiosInstance.post(PREFIX_SERVICES.auth_service, '/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        requiresAuth: true,
      },
    });
  },

  logout: async (rfToken: string) => {
    return axiosInstance.post(PREFIX_SERVICES.auth_service, '/logout', { rfToken });
  },
};

export default authServices;
