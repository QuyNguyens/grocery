import React from 'react';
import { CartItem as CartItemData } from 'types/cart';
import CartItem from './CartItem';
import QuantityCustom from 'components/molecules/quantityCustom';
import { formatCurrency } from 'utils/formatCurrency';
import { Image } from '@heroui/image';
import CartItemMobile from './CartItemMobile';

type CartTableProps = {
  cartItems: CartItemData[];
};

const CartTable = ({ cartItems }: CartTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="hidden md:table w-full text-left">
        {/* Desktop table layout */}
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
          {cartItems.map((item, index) => {
            const discountedPrice = item.discount
              ? Math.ceil(item.price - (item.price * item.discount.value) / 100)
              : item.price;

            return <CartItem key={index} cartItem={item} discountedPrice={discountedPrice} />;
          })}
        </tbody>
      </table>

      {/* Mobile version: flex layout */}
      <div className="md:hidden space-y-4">
        {cartItems.map((item, index) => {
          const discountedPrice = item.discount
            ? Math.ceil(item.price - (item.price * item.discount.value) / 100)
            : item.price;

          return <CartItemMobile key={index} cartItem={item} discountedPrice={discountedPrice} />;
        })}
      </div>
    </div>
  );
};

export default CartTable;
