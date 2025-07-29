import React, { useEffect, useState } from 'react';
import SelectOption from './components/SelectOption';
import ProductSlider from 'components/molecules/productSlider';
import Banner from '../../../../../public/images/department-banner.jpg';
import Image from 'next/image';
import Title from 'components/molecules/title';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { fetchProductsByCollection } from 'stores/productSlice';
import { PRODUCT_KEY } from 'constants/product';
import ProductSkeleton from 'components/molecules/productSkeleton';

const ShopByDepartment = () => {
  const [option, setOption] = useState<string>('Vegetables');

  const dispatch = useAppDispatch();
  const productState = useAppSelector(
    (state) => state.products.collections[PRODUCT_KEY.categories],
  );
  const products = productState?.pages?.[productState?.currentPage || 1];

  useEffect(() => {
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.categories,
        page: 1,
        limit: 10,
        name: option,
      }),
    );
  }, [option]);

  return (
    <div className="mt-10 flex flex-col gap-4">
      <Title title="Shop by Department" />
      <SelectOption option={option} setOption={setOption} />
      {products?.length > 0 ? (
        <ProductSlider
          products={products}
          sliderToScroll={1}
          sliderToShow={5}
          sliderToShowMd={4}
          sliderToShowSm={1}
        />
      ) : (
        <ProductSkeleton className="h-[397px]" imageHeight="h-[190px]" />
      )}
      <div className="relative rounded-2xl overflow-hidden w-full h-[225px] lg:h-[259px] xl:h-[303px]">
        <Image className="w-full h-full  object-cover" alt="department-banner" src={Banner} fill />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
};

export default ShopByDepartment;
