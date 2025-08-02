import BackgroundImageCustom from 'components/molecules/backgroundImageCustom';
import React from 'react';
import CollectionBanner1 from '../../../../../../../public/images/collection-banner1.webp';
import CollectionBanner2 from '../../../../../../../public/images/collection-banner2.webp';
import TextItem from './components/TextItem';

const BannerFeature = () => {
  return (
    <div className="flex gap-4 mt-8">
      <BackgroundImageCustom
        image={CollectionBanner1.src}
        children={
          <TextItem
            titleSmall="Up to 45% OFF"
            titleLarge="Don't Miss Out on Tasty Grocery Deals"
            className="w-[35%] pl-4 md:pl-6 lg:pl-8 xl:pl-10 pt-5"
            buttonText="View More"
            buttonClassName="hidden md:block bg-green-500 text-white!"
          />
        }
        className="flex-3 h-[180px] lg:h-[200px] xl:h-[230px]"
      />
      <BackgroundImageCustom
        image={CollectionBanner2.src}
        children={
          <TextItem
            flatSell="Flat 15% OFF"
            titleLarge="Tasty Fruits Juice from Farm"
            className="w-1/2 pl-4 md:pl-6 lg:pl-8 xl:pl-10 pt-5"
          />
        }
        className="hidden lg:block flex-2 h-[180px] lg:h-[200px] xl:h-[230px]"
      />
    </div>
  );
};

export default BannerFeature;
