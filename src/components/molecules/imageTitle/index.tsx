import { Image } from '@heroui/image';
import React from 'react';
import { Product } from '../productItem';

type ImageTitleProps = {
  product: Product;
  imageRadius: string;
  imageSize: number;
};

const ImageTitle = ({ product, imageRadius, imageSize }: ImageTitleProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        className={`${imageRadius} border-2 border-gray-300 hover:border-gray-400`}
        alt="product image"
        src={product.image?.toString()}
        width={imageSize}
      />
      <span className="text-sm text-center font-semibold text-gray-700 hover:text-green-500">
        {product.name}
      </span>
    </div>
  );
};

export default ImageTitle;
