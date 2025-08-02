'use client';

import React from 'react';
import FormProfile from './components/FormProfile';

const ProfileScreen = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="mt-5 w-full max-w-[1200px] min-h-screen">
        <FormProfile />
      </div>
    </div>
  );
};

export default ProfileScreen;
