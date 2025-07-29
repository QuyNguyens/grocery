import ProductSkeleton from 'components/molecules/productSkeleton';
import ProductSlider from 'components/molecules/productSlider';
import Title from 'components/molecules/title';
import { PRODUCT_KEY } from 'constants/product';
import { useAppSelector } from 'hooks/useAppDispatch';
import React from 'react';

const BestSellingProduct = () => {
  const productState = useAppSelector(
    (state) => state.products.collections[PRODUCT_KEY.bestSelling],
  );
  const products = productState?.pages?.[productState?.currentPage || 1];
  return (
    <div className="mt-10">
      <Title title="Best Selling Products" className="mb-2" />
      {products?.length > 0 ? (
        <ProductSlider
          products={products}
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
