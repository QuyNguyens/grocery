import React from 'react';
import FormSignUp from './components/FormSignUp';
import { Image } from '@heroui/image';
import Logo from '../../../public/logo/app-logo.png';

const SignUpScreen = () => {
  return (
    <div>
      <div className="flex gap-1 justify-center items-center">
        <Image alt="logo" src={Logo.src} width={50} />
        <span className="font-bold text-xl">Grocery</span>
      </div>
      <div>
        <h2 className="text-2xl font-extrabold text-center">Welcome Back</h2>
        <p className="text-gray-500 text-xs text-center">Please signup to your account</p>
      </div>
      <FormSignUp />
    </div>
  );
};

export default SignUpScreen;
