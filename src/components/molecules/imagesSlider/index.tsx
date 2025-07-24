import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../arrowSlider';
import { Image } from '@heroui/image';

type ImagesSliderProps = {
  images: string[];
  imageSize: number;
  sliderToShow: number;
  sliderToScroll: number;
  sliderToShowMd: number;
  sliderToShowSm: number;
  selectedImage: string;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
};

const ImagesSlider = ({
  images,
  imageSize,
  sliderToShow,
  sliderToScroll,
  sliderToShowMd,
  sliderToShowSm,
  selectedImage,
  setSelectedImage,
}: ImagesSliderProps) => {
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
    <div className="relative max-w-[620px] p-2">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Image
            onClick={() => setSelectedImage(image)}
            className={`border ${selectedImage === image ? 'border-orange-500' : 'border-gray-200'} rounded-lg`}
            key={index}
            alt={`image ${index + 1}`}
            src={image}
            width={imageSize}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ImagesSlider;
