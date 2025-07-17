import { TrashIcon } from '@heroicons/react/24/outline';
import { Image } from '@heroui/image';
import React from 'react';
import { Product } from 'types/product';

type CartItemProps = {
  item: Product;
};

const CartItem = ({ item }: CartItemProps) => {
  return (
    <div className="flex gap-3">
      <Image alt="image product" src={item.image} width={75} className="border border-gray-300" />
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex w-full items-start justify-between gap-5">
          <p className="font-bold text-sm hover:text-green-500">{item.description}</p>
          <TrashIcon className="w-6 h-6 text-red-500" />
        </div>
        <span className="text-gray-600 ml-4 text-xs">X ${item.amount}.00</span>
        <span className="text-gray-600 text-xs">Weight: {item.weight}kg</span>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
