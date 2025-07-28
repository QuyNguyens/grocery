import React from 'react';
import { PRODUCT_KEY } from 'constants/product';
import Catalog from 'components/molecules/catalog';
import ShopBy from './components/ShopBy';
import { useAppSelector } from 'hooks/useAppDispatch';

const TopDeal = () => {
  const topDeal = useAppSelector((state) => state.products.collections[PRODUCT_KEY.topDeal]);
  
  return (
    <div className="flex">
      <ShopBy />
      <Catalog title="Top Rated" products={topDeal?.products} overflowHeight='max-h-[400px]'/>
    </div>
  );
};

export default TopDeal;
