import { Button } from '@heroui/button';
import ClientStarRatings from 'components/molecules/clientStarRating';
import { Product } from 'components/molecules/productItem';
import React, { useCallback } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { Divider } from '@heroui/react';
import ColorFilter from 'views/ProductFilter/componens/ColorFilter';
import { useUserContext } from 'context/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import { ROUTES } from 'constants/routes';

type ItemDetailProps = {
  product: Product;
};

const ItemDetail = ({ product }: ItemDetailProps) => {
  const router = useRouter();
  const { user } = useUserContext();
  const pathname = usePathname();

  const handleClick = useCallback((url: string) => {
    if (user?._id) {
      router.push(url);
    }
    localStorage.setItem('backUrl', pathname);
    router.push(ROUTES.login);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h2>{product.description}</h2>
      <ClientStarRatings
        rating={product.rating}
        starRatedColor="#facc15"
        starEmptyColor="#d1d5db"
        numberOfStars={5}
        starDimension="16px"
        starSpacing="2px"
      />
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
      <p>Shipping calculated at checkout.</p>
      <Divider />
      <p>
        <span className="font-semibold">Type: </span>Biscuits
      </p>
      <p>
        <span className="font-semibold">SKU: </span> {product.sku}
      </p>
      <p>
        <span className="font-semibold">Availability: </span>{' '}
        <span>5+ in stock, ready to be shipped</span>
      </p>
      <div>
        <p className="font-semibold">Quantity</p>
        <div className="mt-2 flex gap-2">
          <div className="flex">
            <span className="flex items-center justify-center border border-gray-200 py-2 px-5">
              5
            </span>
            <div className="flex flex-col">
              <div className="flex items-center justify-center border border-gray-200 p-1">
                <MinusIcon className="w-3 h-3" />
              </div>
              <div className="flex items-center justify-center border border-gray-200 p-1">
                <PlusIcon className="w-3 h-3" />
              </div>
            </div>
          </div>
          <Button className="flex-1 rounded bg-green-500 text-white! font-semibold">
            Add to Cart
          </Button>
        </div>
      </div>
      <Divider className="my-2" />
      <div>
        <p className="font-semibold">Weight</p>
        <div className="mt-2 flex gap-2">
          <Button className="border border-gray-200 rounded" variant="light">
            250gm
          </Button>
          <Button className="border border-gray-200 rounded" variant="light">
            100gm
          </Button>
        </div>
      </div>
      <Divider className="my-2" />
      <div>
        <p className="font-semibold">Color</p>
        <div className="mt-2">
          <ColorFilter />
        </div>
      </div>
      <Divider className="my-2" />
      <div className="flex gap-2">
        <Button
          onClick={() => handleClick(ROUTES.cart)}
          className="rounded-full text-white! bg-green-500"
        >
          Add to Cart
        </Button>
        <Button
          onClick={() => handleClick(ROUTES.checkout)}
          className="rounded-full text-white! bg-blue-500"
        >
          Buy it now
        </Button>
      </div>
      <Divider className="my-2" />
      <div>
        <p className="font-semibold line-clamp-4">Product detail</p>
        <p>{product.title}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
