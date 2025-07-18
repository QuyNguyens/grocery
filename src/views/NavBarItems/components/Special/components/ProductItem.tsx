import { Button } from '@heroui/button';
import { Image } from '@heroui/image';
import StarRatings from 'react-star-ratings';

export interface Product {
  image: React.ReactNode;
  description: string;
  rating: number;
  price: number;
  discount: number;
  name: string;
}

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-2 group">
      <Image
        className="border border-gray-300 rounded-lg"
        alt="product"
        src={product.image?.toString()}
      />
      <p className="font-semibold text-sm line-clamp-2">{product.description}</p>
      <StarRatings
        rating={product.rating}
        starRatedColor="#facc15"
        starEmptyColor="#d1d5db"
        numberOfStars={5}
        starDimension="16px"
        starSpacing="2px"
      />
      <div className="flex gap-2">
        {product.discount ? (
          <>
            <span className="line-through text-gray-500">${product.price}.00</span>
            <span className="text-red-500 font-semibold">
              ${Math.ceil(product.price - (product.price * product.discount) / 100)}.00
            </span>
            <div className="px-1.5 py-0.5 bg-green-500 rounded-lg font-bold text-white flex items-center justify-center text-xs">
              {product.discount}%
            </div>
          </>
        ) : (
          <span className=" text-gray-500">${product.price}.00</span>
        )}
      </div>
      <Button
        variant="light"
        radius="full"
        className="bg-[#EDF4F6] group-hover:bg-green-500! group-hover:text-white font-semibold"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductItem;
