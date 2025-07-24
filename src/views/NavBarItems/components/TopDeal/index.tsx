import React from 'react';
import { products } from 'constants/product';
import Catalog from 'components/molecules/catalog';
import ShopBy from './components/ShopBy';

const TopDeal = () => {
  return (
    <div className="flex">
      <ShopBy />
      <Catalog title="Top Rated" products={products} />
    </div>
  );
};

export default TopDeal;
