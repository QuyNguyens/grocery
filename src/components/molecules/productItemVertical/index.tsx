import { Image } from '@heroui/image';
import { Product } from '../productItem';
import React from 'react';
import ClientStarRatings from '../clientStarRating';
import { Button } from '@heroui/button';
import { useResponsiveBreakpoint } from 'hooks/useResponsiveBreakpoint';

type ProductItemVerticalProps = {
  product: Product;
  isBorderImage?: boolean;
  isTitle?: boolean;
  isAddToCart?: boolean;
  imageSize: number;
};

const ProductItemVertical = ({
  product,
  isTitle,
  isAddToCart,
  imageSize,
  isBorderImage,
}: ProductItemVerticalProps) => {
  const breakpoint = useResponsiveBreakpoint();
  const imageWidth = !isAddToCart
    ? imageSize
    : breakpoint === 'sm'
      ? 100
      : breakpoint === 'md'
        ? 130
        : imageSize;
  return (
    <div
      className={`flex items-center ${isAddToCart ? 'gap-5' : 'gap-2'} group p-2 bg-white rounded-lg group`}
    >
      <Image
        className={`${isBorderImage ? 'border border-gray-200' : ''} rounded-lg`}
        alt="product"
        src={product.image?.toString()}
        width={imageWidth}
        height={imageWidth}
      />
      <div className="flex-1">
        <p className="font-semibold text-sm line-clamp-2 group-hover:text-green-500">
          {product.description}
        </p>
        <ClientStarRatings
          rating={product.rating}
          starRatedColor="#facc15"
          starEmptyColor="#d1d5db"
          numberOfStars={5}
          starDimension="14px"
          starSpacing="2px"
        />
        {isTitle && (
          <p className="text-sm leading-6 line-clamp-2 sm:line-clamp-4">{product.title}</p>
        )}
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
        {isAddToCart && (
          <Button
            variant="light"
            radius="full"
            className="bg-[#EDF4F6] mt-3 group-hover:bg-green-500! group-hover:text-white! font-semibold"
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default React.memo(ProductItemVertical);
