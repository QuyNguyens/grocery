import { Button } from '@heroui/button';
import { Image } from '@heroui/image';
import React from 'react';
import ClientStarRatings from '../clientStarRating';
import { Product } from 'types/product';
import { useRouter } from 'next/navigation';

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/products/${product._id}`)}
      className="flex flex-col gap-2 group"
    >
      <Image
        className="w-full border border-gray-300 rounded-lg overflow-hidden"
        alt="product"
        src={product?.images[0].toString()}
      />
      <p className="font-semibold text-sm line-clamp-2">{product.description}</p>

      <div className="flex gap-2 items-end">
        <ClientStarRatings
          rating={product?.rating || 0}
          starRatedColor="#facc15"
          starEmptyColor="#d1d5db"
          numberOfStars={5}
          starDimension="16px"
          starSpacing="2px"
        />
        <h6 className="text-sm">({product?.totalRating})</h6>
      </div>
      <div className="flex gap-2">
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
          <span className=" text-gray-500">${product.basePrice}.00</span>
        )}
      </div>
      {product.attributeValueIds.length > 0 ? (
        <Button
          variant="light"
          radius="full"
          className="bg-[#EDF4F6] group-hover:bg-green-500! group-hover:text-white! font-semibold"
        >
          Add to Cart
        </Button>
      ) : (
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
