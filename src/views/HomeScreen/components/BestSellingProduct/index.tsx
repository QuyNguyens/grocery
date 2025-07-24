import ProductSlider from 'components/molecules/productSlider';
import Title from 'components/molecules/title';
import { products } from 'constants/product';
import React from 'react';

const BestSellingProduct = () => {
  return (
    <div className="mt-10">
      <Title title="Best Selling Products" className="mb-2" />
      <ProductSlider
        products={products}
        sliderToScroll={1}
        sliderToShow={5}
        sliderToShowMd={4}
        sliderToShowSm={2}
      />
    </div>
  );
};

export default BestSellingProduct;
