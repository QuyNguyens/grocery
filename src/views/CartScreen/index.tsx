'use client';

import React, { useState } from 'react';
import CartTable from './components/CartTable';
import { CART_ITEMS } from 'constants/product';
import CheckoutInfo from './components/CheckoutInfo';

const CartScreen = () => {
  const [couponCode, setCouponCode] = useState<string>('');
  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px]">
        <h1 className="text-2xl text-center mb-5">Your Cart (4 items)</h1>
        <CartTable cartItems={CART_ITEMS} />
        <CheckoutInfo couponCode={couponCode} total={1019.98} saleTax={102} setCouponCode={setCouponCode} />
      </div>
    </div>
  );
};

export default CartScreen;
