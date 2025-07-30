import ImageTitle from 'components/molecules/imageTitle';
import React from 'react';
import { Product } from 'types/product';

type ShopByProps = {
  products: Product[];
};
const ShopBy = ({ products }: ShopByProps) => {
  return (
    <div className="p-4 flex-1">
      <h3 className="text-[16px] text-center text-gray-700 font-semibold">Shop by</h3>
      <div className="mt-4 grid grid-cols-4 gap-5">
        {products?.map((product, index) => {
          if (index === 8) return;
          return (
            <ImageTitle key={index} product={product} imageSize={140} imageRadius="rounded-full" />
          );
        })}
      </div>
    </div>
  );
};

export default ShopBy;
