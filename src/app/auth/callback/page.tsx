import React, { Suspense } from 'react';
import AuthCallbackScreen from 'views/AuthCallbackScreen';

const AuthCallbackPage = () => {
  return (
    <Suspense fallback={<div className="text-center mt-10">Đang đăng nhập...</div>}>
      <AuthCallbackScreen />
    </Suspense>
  );
};

export default AuthCallbackPage;
