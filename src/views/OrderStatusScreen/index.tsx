'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import orderService from 'services/order.service';
import { OrderDetail } from 'types/order';
import OrdersDetail from './components/OrdersDetail';
import DeliveryAddress from './components/DeliveryAddress';
import TotalInfo from './components/TotalInfo';
import { Button } from '@heroui/button';

const OrderStatusScreen = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const orderId = searchParams.get('orderId');
  const router = useRouter();

  const [ordersDetail, setOrdersDetail] = useState<OrderDetail[]>([]);

  useEffect(() => {
    const fetchOrdersDetail = async () => {
      try {
        if (orderId) {
          const res = await orderService.getOrderDetail(orderId);
          if (res.data.success) {
            setOrdersDetail(res.data.data);
          }
        }
      } catch (error) {
        console.error('lỗi khi lấy chi tiết đơn hàng: ', error);
      }
    };
    fetchOrdersDetail();
  }, [orderId]);

  const totalPrice = useMemo(() => {
    return ordersDetail.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    
  }, [ordersDetail]);
  console.log('totalPrice: ', totalPrice);
  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px]">
        {status?.includes('00') ? (
          <h1 className="text-3xl text-center text-green-500! font-semibold">
            Đặt hàng thành công
          </h1>
        ) : (
          <h1 className="text-3xl text-center text-red-500! font-semibold">Đặt hàng thất bại</h1>
        )}
        <OrdersDetail ordersDetail={ordersDetail} />
        <div className="mt-5 flex flex-col md:flex-row justify-between gap-8">
          <DeliveryAddress />
          <TotalInfo totalPrice={totalPrice} shippingFee={5} />
        </div>
        <div className="w-full flex justify-end">
          <Button
            onPress={() => router.push('/')}
            variant="solid"
            className="mt-5 bg-green-500 text-white! font-semibold"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusScreen;
