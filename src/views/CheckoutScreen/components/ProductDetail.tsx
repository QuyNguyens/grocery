import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { Image } from '@heroui/image';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import { CartItem } from 'types/cart';
import { CalculateDiscount } from 'utils/calculateDiscount';

type ProductDetailProps = {
  cartItems: CartItem[];
  totalPrice: number;
};

const ProductDetail = ({ totalPrice, cartItems }: ProductDetailProps) => {
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col gap-5 px-10 py-2 bg-white shadow-2xl rounded-lg">
      <div onClick={() => router.push('/cart')} className="flex items-center gap-1">
        <ArrowUturnLeftIcon className="w-5 h-5" />
        <h3>Back to Cart</h3>
      </div>
      <div className="ml-1 mt-3">
        <div>
          <h3>Pay Powdur</h3>
          <h1 className="text-3xl">${totalPrice}</h1>
        </div>
        <div className="overflow-y-auto max-h-[300px] pr-5">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between py-3 border-b border-gray-200">
              <div className="flex gap-3">
                <Image
                  className="border border-gray-200"
                  alt="product checkout"
                  src={item.image}
                  width={50}
                />
                <div>
                  <h4 className="line-clamp-1 w-3/4">{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              {item.discount ? (
                <div className="flex flex-col items-end">
                  <div className="flex gap-3">
                    <span className="line-through text-gray-500">${item.price}.00</span>
                    <span className="text-red-500! font-semibold">
                      ${CalculateDiscount(item.price, item.discount.value) * item.quantity}.00
                    </span>
                  </div>
                  {item.quantity > 1 && (
                    <span className="text-sm font-normal text-gray-500">
                      ${CalculateDiscount(item.price, item.discount.value)}.00 for each
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-end">
                  <p>${item.price * item.quantity}.00</p>
                  {item.quantity > 1 && (
                    <span className="text-sm font-normal text-gray-500">
                      ${CalculateDiscount(item.price, item.discount)}.00 for each
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-3/4 flex flex-col">
          <div className="w-full flex justify-between font-semibold py-3 border-b border-gray-200">
            <h4>Subtotal</h4>
            <h4>${totalPrice}.00</h4>
          </div>
          <div className="w-full flex justify-between font-semibold py-3 border-b border-gray-200">
            <div>
              <span className="text-gray-400 font-normal">Shipping</span>
              <p className="text-xs text-gray-400! font-normal">
                Ground shipping (3-5 business days)
              </p>
            </div>
            <h4 className="text-gray-400! font-normal">${5}.00</h4>
          </div>
          <div className="w-full flex justify-between font-semibold py-3">
            <h4>Total due</h4>
            <h4>${totalPrice + 5}.00</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
