import React from 'react';
import Slider from 'react-slick';
import ProductItem, { Product } from './components/ProductItem';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { products } from 'constants/product';

export function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-1 rounded-full bg-green-500 hover:bg-green-600"
      onClick={onClick}
    >
      <ChevronRightIcon className="w-5 h-5 text-white" />
    </div>
  );
}

export function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-1 rounded-full bg-green-500 hover:bg-green-600"
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-5 h-5 text-white" />
    </div>
  );
}

const Special = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="relative p-2">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-2">
            <ProductItem product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Special;
