'use client';

import Slider from 'react-slick';
import { NextArrow, PrevArrow } from 'views/NavBarItems/components/Special';
import BannerItem from './components/BannerItem';
import Banner1 from '../../../../../public/images/banner1.webp';
import Banner2 from '../../../../../public/images/banner2.webp';
import CatalogItems from './components/CatalogItems';

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative p-2">
      <Slider {...settings}>
        <BannerItem image={Banner1.src} />
        <BannerItem image={Banner2.src} />
      </Slider>
      <div className="static mt-5 lg:mt-0 lg:absolute w-full -bottom-10">
        <div className="w-[90%] mx-auto">
          <CatalogItems />
        </div>
      </div>
    </div>
  );
};

export default Banner;
