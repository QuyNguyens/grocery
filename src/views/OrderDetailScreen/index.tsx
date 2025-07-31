'use client';

import { useUserContext } from 'context/AuthContext';
import { useEffect, useState } from 'react';
import orderService from 'services/order.service';
import { Order } from 'types/order';
import OrderTable from './components/OrderTable';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const OrderDetailScreen = () => {
  const [orders, setOrders] = useState<Order[] | undefined>(undefined);
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await orderService.getOrders(user?._id);
      if (res.data.success) {
        setOrders(res.data.data);
      }
    };
    if (user._id) {
      fetchOrder();
    }
  }, [user]);

  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px]">
        <h1 className="text-center text-3xl mb-8">Your Orders</h1>
        {orders && orders.length > 0 ? (
          <OrderTable orders={orders} />
        ) : (
          <p className="text-center">
            You don't have any orders,{' '}
            <Link href="/" className="hover:underline font-semibold">
              Continue shopping
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderDetailScreen;
