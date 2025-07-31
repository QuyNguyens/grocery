'use client';

import React, { useMemo } from 'react';
import ProductDetail from './components/ProductDetail';
import ShippingInfo from './components/ShippingInfo';
import { useAppSelector } from 'hooks/useAppDispatch';
import { CalculateDiscount } from 'utils/calculateDiscount';
import Link from 'next/link';

const CheckOutScreen = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItem);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const itemTotal = CalculateDiscount(item.price, item.discount.value) * item.quantity;
      return sum + itemTotal;
    }, 0);
  }, [cartItems]);

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 pt-10 bg-white">
      <div className="w-full max-w-[1200px] flex gap-8">
        {cartItems && cartItems.length > 0 ? (
          <>
            <ProductDetail totalPrice={totalPrice} cartItems={cartItems} />
            <ShippingInfo totalPrice={totalPrice} cartItems={cartItems} />
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

export default CheckOutScreen;
