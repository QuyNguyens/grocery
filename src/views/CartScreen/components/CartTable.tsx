import React from 'react';
import { CartItem as CartItemData } from 'types/cart';
import CartItem from './CartItem';

type CartTableProps = {
  cartItems: CartItemData[];
};

const CartTable = ({ cartItems }: CartTableProps) => {
  return (
    <div className="overflow-y-auto max-h-[400px]">
      <table className="w-full text-left">
        <thead>
          <tr className="font-semibold">
            <th className="p-2">Item</th>
            <th className="p-2">Info</th>
            <th className="p-2">Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Total</th>
            <th className="p-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems &&
            cartItems.map((item, index) => {
              const discountedPrice = item.discount
                ? Math.ceil(item.price - (item.price * item.discount.value) / 100)
                : item.price;

              return <CartItem key={index} cartItem={item} discountedPrice={discountedPrice} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
