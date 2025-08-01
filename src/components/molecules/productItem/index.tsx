import { Button } from '@heroui/button';
import { Image } from '@heroui/image';
import React from 'react';
import ClientStarRatings from '../clientStarRating';
import { Product } from 'types/product';

type ProductItemProps = {
  product: Product;
  isChooseOption?: boolean;
  textSize?: string;
  isRating?: boolean;
};

const ProductItem = ({
  product,
  isChooseOption = true,
  textSize = '',
  isRating = true,
}: ProductItemProps) => {
  const handleNavigate = () => {
    window.location.href = `/products/${product._id}`;
  };

  return (
    <div onClick={handleNavigate} className="flex flex-col gap-2 group z-5">
      <Image
        className="w-full border border-gray-300 rounded-lg overflow-hidden"
        alt="product"
        src={product?.images[0].toString()}
      />
      {product?.categoryType && (
        <span className="text-sm text-gray-500 font-normal">
          {product.categoryType.charAt(0).toUpperCase() + product.categoryType.slice(1)}
        </span>
      )}
      <p className={`font-semibold text-sm line-clamp-2 ${textSize}`}>{product.name}</p>

      {isRating && (
        <div className="flex gap-2 items-end">
          <ClientStarRatings
            rating={product?.rating || 0}
            starRatedColor="#facc15"
            starEmptyColor="#d1d5db"
            numberOfStars={5}
            starDimension="16px"
            starSpacing="2px"
          />
          <h6 className={`text-sm ${textSize}`}>({product?.totalRating})</h6>
        </div>
      )}
      <div className={`flex gap-2 ${textSize}`}>
        {product.discount ? (
          <>
            <span className="line-through text-gray-500">${product.basePrice}.00</span>
            <span className="text-red-500! font-semibold">
              ${Math.ceil(product.basePrice - (product.basePrice * product.discount.value) / 100)}
              .00
            </span>
            <div className="px-1.5 py-0.5 bg-green-500 rounded-lg font-bold text-white! flex items-center justify-center text-xs">
              {product.discount.value}%
            </div>
          </>
        ) : (
          <h4 className=" text-gray-500 font-semibold">${product.basePrice}.00</h4>
        )}
      </div>

      {isChooseOption && (
        <Button
          variant="light"
          radius="full"
          className="bg-[#EDF4F6] group-hover:bg-green-500! group-hover:text-white! font-semibold"
        >
          Choose Option
        </Button>
      )}
    </div>
  );
};

export default React.memo(ProductItem);
