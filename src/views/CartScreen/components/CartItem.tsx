import { TrashIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import { Image } from '@heroui/image';
import QuantityCustom from 'components/molecules/quantityCustom';
import React, { useEffect, useMemo, useState } from 'react';
import { CartItem as CartItemData } from 'types/cart';

type CartItemProps = {
  cartItems: CartItemData[];
  cartItem: CartItemData;
  discountedPrice: number;
  setCartItems: React.Dispatch<React.SetStateAction<CartItemData[] | undefined>>;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

const CartItem = ({ discountedPrice, cartItem, cartItems, setCartItems }: CartItemProps) => {
  const [amount, setAmount] = useState<number>(cartItem.quantity);

  useEffect(() => {
    setCartItems((prev) =>
      prev?.map((item) => (item._id === cartItem._id ? { ...item, quantity: amount } : item)),
    );
  }, [amount]);

  const total = useMemo(() => {
    return discountedPrice * amount;
  }, [amount]);
  return (
    <tr className="border-t border-gray-200 hover:bg-gray-100">
      <td className="p-2">
        <Image
          alt="product image"
          src={cartItem.image}
          width={60}
          className="rounded-lg border border-gray-200"
        />
      </td>
      <td className="p-2">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">{cartItem.type || 'Vegetable'}</span>
          <p className="font-semibold">{cartItem.attributesSnapshot.name}</p>
          {cartItem.attributesSnapshot.value ? (
            <p className="text-sm text-gray-400">Weight: {cartItem.attributesSnapshot.value}</p>
          ) : null}
        </div>
      </td>
      <td className="p-2">
        <div className="flex gap-2 items-center">
          {cartItem.discount ? (
            <>
              <span className="line-through text-gray-400 text-sm">
                {formatCurrency(cartItem.price)}
              </span>
              <span className="text-red-500 font-semibold">{formatCurrency(discountedPrice)}</span>
              <div className="px-1.5 py-0.5 bg-green-500 rounded-lg font-bold text-white text-xs">
                -{cartItem.discount.value}%
              </div>
            </>
          ) : (
            <span className="text-gray-700 font-medium">{formatCurrency(cartItem.price)}</span>
          )}
        </div>
      </td>
      <td className="p-2">
        <QuantityCustom inStock={10} amount={amount} setAmount={setAmount} />
      </td>
      <td className="p-2">
        <h4 className="font-semibold">{formatCurrency(total)}</h4>
      </td>
      <td className="p-2">
        <Button
          className="bg-red-500 text-white! rounded-full"
          isIconOnly
          size="sm"
          aria-label="Remove item"
        >
          <TrashIcon className="w-4 h-4" />
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
