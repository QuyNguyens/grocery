import React from 'react';
import { Order } from 'types/order';
import OrderItem from './OrderItem';

type OrderTableProps = {
  orders: Order[];
};

const OrderTable = ({ orders }: OrderTableProps) => {
  return (
    <div className="overflow-y-auto max-h-[400px]">
      <table className="w-full text-left">
        <thead>
          <tr className="font-semibold">
            <th className="p-2">Id</th>
            <th className="p-2">Status</th>
            <th className="p-2">Total amount</th>
            <th className="p-2">Payment method</th>
            <th className="p-2">Create at</th>
            <th className="p-2">Order detail</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order, index) => {
              return <OrderItem key={index} order={order} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
