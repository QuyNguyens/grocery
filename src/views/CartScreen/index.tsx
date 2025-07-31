'use client';

import React, { useMemo, useState } from 'react';
import CartTable from './components/CartTable';
import CheckoutInfo from './components/CheckoutInfo';
import { useAppSelector } from 'hooks/useAppDispatch';
import { Link } from '@heroui/link';

const CartScreen = () => {
  const [couponCode, setCouponCode] = useState<string>('');
  const cartItems = useAppSelector((state) => state.cart.cartItem);

  const totalPriceItems = useMemo(() => {
    if (cartItems.length > 0)
      return cartItems?.reduce((total, item) => total + item.price * item.quantity, 0);
    return 0;
  }, [cartItems]);

  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px]">
        <h1 className="text-2xl text-center mb-5">Your Cart ({cartItems.length} items)</h1>
        {cartItems && cartItems.length > 0 ? (
          <>
            {<CartTable cartItems={cartItems} />}
            <CheckoutInfo
              couponCode={couponCode}
              total={totalPriceItems}
              saleTax={totalPriceItems / 10}
              setCouponCode={setCouponCode}
            />
          </>
        ) : (
          <p className="text-center">
            You don't have any items,{' '}
            <Link href="/" className="hover:underline font-semibold">
              Continue shopping
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
