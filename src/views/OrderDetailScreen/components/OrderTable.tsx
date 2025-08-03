import React from 'react';
import { Order } from 'types/order';
import OrderItem from './OrderItem';
import OrderItemMobile from './OrderItemMobile';

type OrderTableProps = {
  orders: Order[];
};

const OrderTable = ({ orders }: OrderTableProps) => {
  return (
    <>
      <div className="hidden md:block overflow-y-auto max-h-[400px]">
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
            {orders.map((order, index) => (
              <OrderItem key={index} order={order} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden">
        {orders.map((order, index) => (
          <OrderItemMobile key={index} order={order} />
        ))}
      </div>
    </>
  );
};

export default OrderTable;
