import React from 'react';
import { OrderDetail } from 'types/order';
import OrderDetailItem from './OrderDetailItem';

type OrdersDetailProps = {
  ordersDetail: OrderDetail[];
};

const OrdersDetail = ({ ordersDetail }: OrdersDetailProps) => {
  return (
    <div className="overflow-y-auto max-h-[400px] bg-white shadow-lg rounded-lg p-4">
      <table className="w-full text-left">
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
    </div>
  );
};

export default OrdersDetail;
