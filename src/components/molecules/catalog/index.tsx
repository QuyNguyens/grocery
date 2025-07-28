import React from 'react';
import ProductItemVertical from '../productItemVertical';
import { Product } from 'types/product';

type CatalogProps = {
  products: Product[];
  title: string;
  overflowHeight: string;
};
const Catalog = ({ products, title, overflowHeight }: CatalogProps) => {
  return (
    <div className="bg-gray-100 p-4 flex-1">
      <h3 className="font-semibold text-[16px] text-gray-700 text-center">{title}</h3>
      <div className={`mt-4 grid grid-cols-2 overflow-y-auto ${overflowHeight}`}>
        {products?.map((product, index) => (
          <div key={index} className="p-2">
            <ProductItemVertical product={product} imageSize={70} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Catalog);
