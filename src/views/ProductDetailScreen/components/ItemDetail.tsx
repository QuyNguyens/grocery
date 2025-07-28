import { Button } from '@heroui/button';
import ClientStarRatings from 'components/molecules/clientStarRating';
import React, { useCallback, useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { Divider } from '@heroui/react';
import ColorFilter from 'views/ProductFilter/componens/ColorFilter';
import { useUserContext } from 'context/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import { ROUTES } from 'constants/routes';
import { ProductVariant } from 'types/product';
import QuantityCustom from 'components/molecules/quantityCustom';
import { CartItem } from 'types/cart';
import cartService from 'services/cart.service';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { addCartItem } from 'stores/cartSlice';

type ItemDetailProps = {
  product: ProductVariant;
};

const ItemDetail = ({ product }: ItemDetailProps) => {
  const [amount, setAmount] = useState<number>(1);
  const [weightSelected, setWeightSelected] = useState<string>('');
  const [colorSelected, setColorSelected] = useState<string>('');

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useUserContext();
  const pathname = usePathname();

  const handleAddToCart = async () => {
    const cartItem: any = {
      productVariantId: product._id,
      quantity: amount,
      attributesSnapshot: {
        name: colorSelected != '' ? 'Color' : weightSelected != '' ? 'Weight' : '',
        value: colorSelected != '' ? colorSelected : weightSelected != '' ? weightSelected : '',
      },
      name: product.name,
      image: product?.images[0],
      type: product.categoryType,
    };
    dispatch(addCartItem({ item: cartItem, userId: user?._id }));
  };

  const handleNavigate = useCallback((url: string) => {
    if (user?._id) {
      router.push(url);
    } else {
      localStorage.setItem('backUrl', pathname);
      router.push(ROUTES.login);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold">{product.name}</h2>
      <div className="flex items-end gap-1">
        <ClientStarRatings
          rating={product?.rating?.value || 0}
          starRatedColor="#facc15"
          starEmptyColor="#d1d5db"
          numberOfStars={5}
          starDimension="16px"
          starSpacing="2px"
        />
        <span className="text-sm">({product?.rating?.total})</span>
      </div>
      {product.discount.value > 0 ? (
        <div className="flex gap-2">
          <span className="line-through text-gray-500">${product.price}.00</span>
          <span className="text-red-500! font-semibold">
            ${Math.ceil(product.price - (product.price * product.discount.value) / 100)}.00
          </span>
          <div className="px-1.5 py-0.5 bg-green-500 rounded-lg font-bold text-white! flex items-center justify-center text-xs">
            {product.discount.value}%
          </div>
        </div>
      ) : (
        <span className=" text-gray-500">${product.price}.00</span>
      )}
      <p>Shipping calculated at checkout.</p>
      <Divider />
      <p>
        <span className="font-semibold">Type: </span>
        {product?.categoryType}
      </p>
      <p>
        <span className="font-semibold">SKU: </span> {product.sku}
      </p>
      <p>
        <span className="font-semibold">Tag: </span>
        {product.categoryRefType &&
          product.categoryRefType.map((item, index) => (
            <span className="hover:underline" key={index} onClick={() => router.push(item)}>
              {item}
              {product?.categoryRefType && index < product.categoryRefType.length - 1 && ', '}
            </span>
          ))}
      </p>
      <p>
        <span className="font-semibold">Availability: </span>{' '}
        <span>{product.quantity}+ in stock, ready to be shipped</span>
      </p>
      <div>
        <p className="font-semibold">Quantity</p>
        <div className="mt-2 flex gap-2">
          <QuantityCustom inStock={product.quantity} amount={amount} setAmount={setAmount} />
          <Button className="flex-1 rounded bg-green-500 text-white! font-semibold">
            Add to Cart
          </Button>
        </div>
      </div>
      <Divider className="my-2" />
      {product?.type === 'Weight' && (
        <div>
          <p className="font-semibold">Weight</p>
          <div className="mt-2 flex gap-2">
            {product?.attribute &&
              product.attribute.map((item, index) => (
                <Button
                  onClick={() => setWeightSelected(item)}
                  key={index}
                  className={`border ${weightSelected === item ? 'border-orange-500' : 'border-gray-200'} rounded`}
                  variant="light"
                >
                  {item}
                </Button>
              ))}
          </div>
        </div>
      )}
      {product?.type === 'Color' && (
        <div>
          <p className="font-semibold">Color</p>
          <div className="mt-2">
            {product?.attribute && (
              <ColorFilter
                color={colorSelected}
                setColor={setColorSelected}
                colors={product.attribute.map((color) => color.toLowerCase())}
              />
            )}
          </div>
        </div>
      )}
      <Divider className="my-2" />
      <div className="flex gap-2">
        <Button onClick={handleAddToCart} className="rounded-full text-white! bg-green-500">
          Add to Cart
        </Button>
        <Button
          onClick={() => handleNavigate(ROUTES.checkout)}
          className="rounded-full text-white! bg-blue-500"
        >
          Buy it now
        </Button>
      </div>
      <Divider className="my-2" />
      <div>
        <p className="font-semibold line-clamp-4">Product detail</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
