'use client';

import React, { useMemo, useState } from 'react';
import CartTable from './components/CartTable';
import CheckoutInfo from './components/CheckoutInfo';
import { useAppSelector } from 'hooks/useAppDispatch';

const CartScreen = () => {
  const [couponCode, setCouponCode] = useState<string>('');
  const cartItems = useAppSelector((state) => state.cart.cartItem);
  console.log('cartItems: ', cartItems);
  const totalItems = useMemo(() => {
    if (cartItems.length > 0)
      return cartItems?.reduce((total, item) => total + item.price * item.quantity, 0);
    return 0;
  }, [cartItems]);

  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px]">
        <h1 className="text-2xl text-center mb-5">Your Cart (4 items)</h1>
        {cartItems && <CartTable cartItems={cartItems} />}
        <CheckoutInfo
          couponCode={couponCode}
          total={totalItems}
          saleTax={102}
          setCouponCode={setCouponCode}
        />
      </div>
    </div>
  );
};

export default CartScreen;
