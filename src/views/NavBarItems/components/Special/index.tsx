import React from 'react';
import { products } from 'constants/product';
import ProductSlider from 'components/molecules/productSlider';

const Special = () => {
  return (
    <div>
      <h1 className="mt-4 text-xl font-semibold text-gray-700 text-center">Special</h1>
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

export default Special;
