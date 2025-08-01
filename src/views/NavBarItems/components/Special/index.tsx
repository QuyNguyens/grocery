import React from 'react';
import ProductSlider from 'components/molecules/productSlider';
import { useAppSelector } from 'hooks/useAppDispatch';
import { PRODUCT_KEY } from 'constants/product';

const Special = () => {
  const productState = useAppSelector((state) => state.products.collections[PRODUCT_KEY.special]);
  const products = productState?.pages?.[productState?.currentPage || 1];

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
