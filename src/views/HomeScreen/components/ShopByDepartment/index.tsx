import React, { useState } from 'react';
import SelectOption from './components/SelectOption';
import ProductSlider from 'components/molecules/productSlider';
import { products } from 'constants/product';
import Banner from '../../../../../public/images/department-banner.jpg';
import Image from 'next/image';
import Title from 'components/molecules/title';

const ShopByDepartment = () => {
  const [option, setOption] = useState<string>('Milk Items');

  return (
    <div className="mt-10 flex flex-col gap-4">
      <Title title="Shop by Department" />
      <SelectOption option={option} setOption={setOption} />
      <ProductSlider
        products={products}
        sliderToScroll={1}
        sliderToShow={5}
        sliderToShowMd={4}
        sliderToShowSm={1}
      />
      <div className="relative rounded-2xl overflow-hidden w-full h-[225px] lg:h-[259px] xl:h-[303px]">
        <Image className="w-full h-full  object-cover" alt="department-banner" src={Banner} fill />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
};

export default ShopByDepartment;
