'use client';

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import React from 'react';
import ProductDetail from './components/ProductDetail';
import { CART_ITEMS } from 'constants/product';
import ShippingInfo from './components/ShippingInfo';

const CheckOutScreen = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 pt-10 bg-white">
      <div className="w-full max-w-[1200px] flex gap-8">
        <ProductDetail cartItems={CART_ITEMS} />
        <ShippingInfo />
      </div>
    </div>
  );
};

export default CheckOutScreen;
