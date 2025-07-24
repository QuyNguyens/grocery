import { products } from 'constants/product';
import React from 'react';
import ProductFilter from 'views/ProductFilter';

const SpecialScreen = () => {
  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px] flex gap-8">
        <ProductFilter products={products} />
      </div>
    </div>
  );
};

export default SpecialScreen;
