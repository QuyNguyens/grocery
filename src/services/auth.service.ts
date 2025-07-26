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
};

export default authServices;
