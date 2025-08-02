'use client';

import React from 'react';
import FormLogin from './components/FormLogin';
import { Image } from '@heroui/image';
import Logo from '../../../public/logo/app-logo.png';
import { useRouter } from 'next/navigation';

const LoginScreen = () => {
  const router = useRouter();

  return (
    <div>
      <div onClick={() => router.push('/')} className="flex gap-1 justify-center items-center">
        <Image alt="logo" src={Logo.src} width={50} />
        <span className="font-bold text-xl">Grocery</span>
      </div>
      <div>
        <h2 className="text-2xl font-extrabold text-center">Welcome Back</h2>
        <p className="text-gray-500 text-xs text-center">Please login to your account</p>
      </div>
      <FormLogin />
    </div>
  );
};

export default LoginScreen;
