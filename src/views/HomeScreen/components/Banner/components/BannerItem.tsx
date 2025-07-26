import React from 'react';
import BackgroundImageCustom from 'components/molecules/backgroundImageCustom';
import TextItem from './TextItem';

type BannerItemProps = {
  image: string;
};

const BannerItem = ({ image }: BannerItemProps) => {
  return (
    <>
      <BackgroundImageCustom
        image={image}
        children={<TextItem />}
        className="w-full h-[250px] md:h-[350[x]] lg:h-[400px] xl:h-[490px]"
      />
    </>
  );
};

export default BannerItem;
