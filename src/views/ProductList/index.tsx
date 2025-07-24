import ImageTitle from 'components/molecules/imageTitle';
import { Product } from 'components/molecules/productItem';
import React from 'react';

type ProductListProps = {
  products: Product[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
      {products.map((product, index) => (
        <ImageTitle key={index} product={product} imageSize={158} imageRadius="rounded-lg" />
      ))}
    </div>
  );
};

export default ProductList;
