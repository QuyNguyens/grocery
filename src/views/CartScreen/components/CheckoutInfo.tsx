import React from 'react';
import CouponCode from './CouponCode';
import { Button } from '@heroui/button';
import { span } from 'framer-motion/client';
import { useDisclosure } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { ROUTES } from 'constants/routes';

type CheckoutInfoProps = {
  total: number;
  saleTax: number;
  couponCode: string;
  setCouponCode: React.Dispatch<React.SetStateAction<string>>;
};

const CheckoutInfo = ({ total, saleTax, couponCode, setCouponCode }: CheckoutInfoProps) => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-end">
      <div className="w-2/6 flex flex-col gap-2">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <h5 className="font-semibold">Subtotal:</h5>
          <span>${total}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <h5 className="font-semibold">Sales Tax:</h5>
          <span>${saleTax}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <h5 className="font-semibold">Coupon Code:</h5>
          {
            <div className="flex gap-2">
              <span>{couponCode}</span>
              <CouponCode couponCode={couponCode} setCouponCode={setCouponCode} />
            </div>
          }
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <h5 className="font-semibold">Grand total:</h5>
          <span>${total + saleTax}</span>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => router.push(ROUTES.checkout)}
            className="bg-green-500 min-w-[230px] text-white! font-semibold rounded-lg"
          >
            Check out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
