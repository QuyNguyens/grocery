'use client';

import { useUserContext } from 'context/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const AuthCallbackScreen = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useUserContext();

  useEffect(() => {
    const accessToken = searchParams.get('token');
    const userString = searchParams.get('user');

    if (accessToken && userString) {
      const user = JSON.parse(decodeURIComponent(userString));

      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      setUser(user);

      const backUrl = localStorage.getItem('backUrl');
      if (backUrl) {
        localStorage.removeItem('backUrl');
        router.push(backUrl);
      } else {
        router.push('/');
      }
    } else {
      router.push('/login');
    }
  }, []);
  return <div className="mt-10 text-center text-2xl font-bold">Đang đăng nhập...</div>;
};

export default AuthCallbackScreen;
