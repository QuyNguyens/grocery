import React from 'react';
import Shopby from './components/Shopby';
import Catalog from '../Categories/components/Catalog';
import { products } from 'constants/product';

const TopDeal = () => {
  return (
    <div className="flex">
      <Shopby />
      <Catalog title="Top Rated" products={products} />
    </div>
  );
};

export default TopDeal;
