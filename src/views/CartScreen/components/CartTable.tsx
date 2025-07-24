import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import { Image } from '@heroui/image';
import { CartItem } from 'constants/product';
import React from 'react';

type CartTableProps = {
  cartItems: CartItem[];
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

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
          {cartItems.map((item, index) => {
            const discountedPrice = item.discount
              ? Math.ceil(item.price - (item.price * item.discount) / 100)
              : item.price;
            const total = discountedPrice * item.quantity;

            return (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-100">
                <td className="p-2">
                  <Image
                    alt="product image"
                    src={item.image}
                    width={60}
                    className="rounded-lg border border-gray-200"
                  />
                </td>
                <td className="p-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-gray-500">{item.type}</span>
                    <p className="font-semibold">{item.name}</p>
                    {item.weight ? (
                      <p className="text-sm text-gray-400">Weight: {item.weight} kg</p>
                    ) : null}
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex gap-2 items-center">
                    {item.discount ? (
                      <>
                        <span className="line-through text-gray-400 text-sm">
                          {formatCurrency(item.price)}
                        </span>
                        <span className="text-red-500 font-semibold">
                          {formatCurrency(discountedPrice)}
                        </span>
                        <div className="px-1.5 py-0.5 bg-green-500 rounded-lg font-bold text-white text-xs">
                          -{item.discount}%
                        </div>
                      </>
                    ) : (
                      <span className="text-gray-700 font-medium">
                        {formatCurrency(item.price)}
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-center rounded overflow-hidden">
                    <span className="border border-gray-200 px-4 py-3">{item.quantity}</span>
                    <div className="flex flex-col">
                      <button className="border border-gray-200 p-1">
                        <PlusIcon className="w-4 h-4" />
                      </button>
                      <button className="border border-gray-200 p-1">
                        <MinusIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
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
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
