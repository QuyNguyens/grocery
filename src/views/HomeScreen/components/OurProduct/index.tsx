import { Button } from '@heroui/button';
import ProductItemVertical from 'components/molecules/productItemVertical';
import Title from 'components/molecules/title';
import { PRODUCT_KEY } from 'constants/product';
import { useAppSelector } from 'hooks/useAppDispatch';
import React from 'react';

const OurProduct = () => {
      const categories = useAppSelector((state) => state.products.collections[PRODUCT_KEY.categories]);

  return (
    <div className="mt-10 flex flex-col justify-center items-center gap-5 p-4">
      <Title title="Don't Miss Our Products" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[380px]">
        {categories?.products.map((product, index) => (
          <ProductItemVertical key={index} product={product} imageSize={100} isBorderImage={true} />
        ))}
      </div>
      <Button className="bg-green-500 text-white! w-fit rounded-full font-bold">Load more</Button>
    </div>
  );
};

export default OurProduct;
