'use client';

import React, { useEffect, useMemo, useState } from 'react';
import CartTable from './components/CartTable';
import CheckoutInfo from './components/CheckoutInfo';
import { CartItem } from 'types/cart';
import cartService from 'services/cart.service';
import { useUserContext } from 'context/AuthContext';

const CartScreen = () => {
  const [couponCode, setCouponCode] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[] | undefined>(undefined);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await cartService.get(user._id, 1, 10);

        if (res.data.success) {
          setCartItems(res.data.data);
        }
      } catch (error) {
        console.error('Error when get cartItems');
      }
    };
    if (user._id) {
      fetchCart();
    }
  }, [user]);

  const totalItems = useMemo(() => {
    return cartItems?.reduce((total, item) => total + item.price * item.quantity, 0) ?? 0;
  }, [cartItems]);

  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px]">
        <h1 className="text-2xl text-center mb-5">Your Cart (4 items)</h1>
        {cartItems && setCartItems && (
          <CartTable cartItems={cartItems} setCartItems={setCartItems} />
        )}
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
