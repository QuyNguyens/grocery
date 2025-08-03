import React from 'react';
import { OrderDetail } from 'types/order';
import OrderDetailItem from './OrderDetailItem';
import OrderDetailMobileItem from './OrderDetailMobileItem';

type OrdersDetailProps = {
  ordersDetail: OrderDetail[];
};

const OrdersDetail = ({ ordersDetail }: OrdersDetailProps) => {
  return (
    <div className="overflow-y-auto max-h-[400px] bg-white shadow-lg rounded-lg p-4">
      <table className="hidden md:table w-full text-left">
        <thead>
          <tr className="font-semibold">
            <th className="p-2">Item</th>
            <th className="p-2">Info</th>
            <th className="p-2">Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {ordersDetail &&
            ordersDetail.map((order, index) => {
              return <OrderDetailItem key={index} orderDetail={order} />;
            })}
        </tbody>
      </table>

      <div className="md:hidden space-y-4">
        {ordersDetail.map((item, index) => {
          return <OrderDetailMobileItem key={index} orderDetail={item} />;
        })}
      </div>
    </div>
  );
};

export default OrdersDetail;
