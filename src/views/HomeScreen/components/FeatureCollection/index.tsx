'use client';

import React from 'react';
import BannerFeature from './components/BannerFeature';
import { products } from 'constants/product';
import ProductSlider from 'components/molecules/productSlider';
import Title from 'components/molecules/title';

const FeatureCollection = () => {
  return (
    <div className="md:mt-10 lg:mt-20">
      <Title title="Featured Collection" />
      <ProductSlider
        products={products}
        sliderToScroll={1}
        sliderToShow={5}
        sliderToShowMd={4}
        sliderToShowSm={2}
      />
      <BannerFeature />
    </div>
  );
};

export default FeatureCollection;
