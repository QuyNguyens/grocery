import { Image } from '@heroui/image';
import ImagesSlider from 'components/molecules/imagesSlider';
import React from 'react';

type ImageSliderProps = {
  imageMain: number;
  setImageMain: React.Dispatch<React.SetStateAction<number>>;
  images: string[];
};

const ImageSlider = ({ imageMain, images, setImageMain }: ImageSliderProps) => {
  return (
    <div className="w-full relative flex flex-col gap-2">
      <Image
        className="rounded-lg border border-gray-200"
        alt="image main"
        src={images[imageMain]}
        width={620}
      />
      <ImagesSlider
        images={images}
        imageSize={100}
        sliderToScroll={1}
        sliderToShow={5}
        sliderToShowMd={4}
        sliderToShowSm={3}
        setSelectedImage={setImageMain}
        selectedImage={imageMain}
      />
    </div>
  );
};

export default ImageSlider;
