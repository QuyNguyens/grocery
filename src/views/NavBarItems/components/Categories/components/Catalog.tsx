import React from 'react';
import Items from './Items';
import { Product } from '../../Special/components/ProductItem';
type CatalogProps = {
  products: Product[];
  title: string;
};
const Catalog = ({ products, title }: CatalogProps) => {
  return (
    <div className="bg-gray-100 p-4 flex-1">
      <h3 className="font-semibold text-[16px] text-gray-700 text-center">{title}</h3>
      <div className="mt-4 flex flex-wrap overflow-y-auto h-[400px]">
        {products.map((product, index) => (
          <div key={index} className="p-2 w-1/2">
            <Items product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
