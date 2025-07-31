import React, { Suspense } from 'react';
import OrderStatusScreen from 'views/OrderStatusScreen';

const OrderStatus = () => {
  return (
    <Suspense fallback={<div className="text-center mt-10">Đang load orders...</div>}>
      <OrderStatusScreen />
    </Suspense>
  );
};

export default OrderStatus;
