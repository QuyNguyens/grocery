import { Image } from '@heroui/image';
import { products } from 'constants/product';
import React from 'react';

const Shopby = () => {
  return (
    <div className="p-4 flex-1">
      <h3 className="text-[16px] text-center text-gray-700 font-semibold">Shop by</h3>
      <div className="mt-4 grid grid-cols-4 gap-5">
        {products.map((product, index) => {
          if (index === 8) return;
          return (
            <div key={index} className="flex flex-col gap-2">
              <Image
                className="rounded-full border-2 border-gray-300 hover:border-gray-400"
                alt="product image"
                src={product.image?.toString()}
                width={140}
              />
              <span className="text-sm text-center font-semibold text-gray-700 hover:text-green-500">
                {product.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shopby;
