'use client';

import React from 'react';
import BannerFeature from './components/BannerFeature';
import { PRODUCT_KEY } from 'constants/product';
import ProductSlider from 'components/molecules/productSlider';
import Title from 'components/molecules/title';
import { useAppSelector } from 'hooks/useAppDispatch';
import ProductSkeleton from 'components/molecules/productSkeleton';

const FeatureCollection = () => {
  const productState = useAppSelector(
    (state) => state.products.collections[PRODUCT_KEY.topDeal],
  );
  const categories = productState?.pages?.[productState?.currentPage || 1];

  return (
    <div className="md:mt-10 lg:mt-20">
      <Title title="Featured Collection" />
      {categories?.length > 0 ? (
        <ProductSlider
          products={categories}
          sliderToScroll={1}
          sliderToShow={5}
          sliderToShowMd={4}
          sliderToShowSm={2}
        />
      ) : (
        <ProductSkeleton className="h-[397px]" imageHeight="h-[190px]" />
      )}
      <BannerFeature />
    </div>
  );
};

export default FeatureCollection;
