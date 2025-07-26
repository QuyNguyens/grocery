import { PRODUCT_KEY } from 'constants/product';
import { useAppSelector } from 'hooks/useAppDispatch';
import React from 'react';
import ProductFilter from 'views/ProductFilter';

const SpecialScreen = () => {
  const categories = useAppSelector((state) => state.products.collections[PRODUCT_KEY.special]);

  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px] flex gap-8">
        <ProductFilter products={categories?.products} />
      </div>
    </div>
  );
};

export default SpecialScreen;
