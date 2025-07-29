'use client';

import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../arrowSlider';
import ProductItem from '../productItem';
import { Product } from 'types/product';

type ProductSliderProps = {
  products: Product[];
  sliderToShow: number;
  sliderToScroll: number;
  sliderToShowMd: number;
  sliderToShowSm: number;
};

const ProductSlider = ({
  products,
  sliderToShow,
  sliderToScroll,
  sliderToShowMd,
  sliderToShowSm,
}: ProductSliderProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sliderToShow,
    slidesToScroll: sliderToScroll,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: sliderToShowMd,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: sliderToShowSm,
        },
      },
    ],
  };

  return (
    <div className="relative p-2">
      <Slider {...settings}>
        {products?.map((product, index) => (
          <div key={index} className="p-2">
            <ProductItem product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
