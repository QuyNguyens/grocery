import React from 'react';
import { PRODUCT_KEY } from 'constants/product';
import Catalog from 'components/molecules/catalog';
import ShopBy from './components/ShopBy';
import { useAppSelector } from 'hooks/useAppDispatch';

const TopDeal = () => {
  const productState = useAppSelector((state) => state.products.collections[PRODUCT_KEY.topDeal]);
  const products = productState?.pages?.[productState?.currentPage || 1];

  return (
    <div className="flex">
      <ShopBy />
      <Catalog title="Top Rated" products={products} overflowHeight="max-h-[400px]" />
    </div>
  );
};

export default TopDeal;
