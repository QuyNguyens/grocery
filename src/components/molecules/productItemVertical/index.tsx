'use client';
import { Image } from '@heroui/image';
import StarRatings from 'react-star-ratings';
import { Product } from '../productItem';
import React from 'react';

type ProductItemVerticalProps = {
  product: Product;
  isBorderImage?: boolean;
};

const ProductItemVertical = ({ product, isBorderImage }: ProductItemVerticalProps) => {
  return (
    <div className="flex items-center gap-2 group p-2 bg-white rounded-lg">
      <Image
        className={`${isBorderImage ? 'border border-gray-200' : ''} rounded-lg `}
        alt="product"
        src={product.image?.toString()}
        width={80}
        height={80}
      />
      <div className="flex-1">
        <p className="font-semibold text-sm line-clamp-2 group-hover:text-green-500">
          {product.description}
        </p>
        <StarRatings
          rating={product.rating}
          starRatedColor="#facc15"
          starEmptyColor="#d1d5db"
          numberOfStars={5}
          starDimension="14px"
          starSpacing="2px"
        />
        <div className="flex gap-2">
          {product.discount ? (
            <>
              <span className="line-through text-gray-500">${product.price}.00</span>
              <span className="text-red-500! font-semibold">
                ${Math.ceil(product.price - (product.price * product.discount) / 100)}.00
              </span>
              <div className="px-1.5 py-0.5 bg-green-500 rounded-lg font-bold text-white! flex items-center justify-center text-xs">
                {product.discount}%
              </div>
            </>
          ) : (
            <span className=" text-gray-500">${product.price}.00</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductItemVertical);
