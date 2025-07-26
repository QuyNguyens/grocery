import ProductSkeleton from 'components/molecules/productSkeleton';
import ProductSlider from 'components/molecules/productSlider';
import Title from 'components/molecules/title';
import { PRODUCT_KEY } from 'constants/product';
import { useAppSelector } from 'hooks/useAppDispatch';
import React from 'react';

const BestSellingProduct = () => {
  const bestSelling = useAppSelector(
    (state) => state.products.collections[PRODUCT_KEY.bestSelling],
  );

  return (
    <div className="mt-10">
      <Title title="Best Selling Products" className="mb-2" />
      {bestSelling?.products.length > 0 ? (
        <ProductSlider
          productState={bestSelling}
          sliderToScroll={1}
          sliderToShow={5}
          sliderToShowMd={4}
          sliderToShowSm={2}
        />
      ) : (
        <ProductSkeleton className="h-[397px]" imageHeight="h-[190px]" />
      )}
    </div>
  );
};

export default BestSellingProduct;
