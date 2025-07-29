import { PRODUCT_KEY } from 'constants/product';
import { useAppSelector } from 'hooks/useAppDispatch';
import React from 'react';
import ProductList from 'views/ProductList';

const TopDealScreen = () => {
  const productState = useAppSelector((state) => state.products.collections[PRODUCT_KEY.topDeal]);
  const products = productState?.pages?.[productState.currentPage || 1];
  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px] flex gap-8">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default TopDealScreen;
