import React from 'react';
import { OrderStatus } from 'types/order';

type OrderStatusBadgeProps = {
  status: OrderStatus;
};

const orderStatusColorMap: Record<OrderStatus, string> = {
  pending: 'bg-yellow-100 text-yellow-800',
  paid: 'bg-blue-100 text-blue-800',
  shipped: 'bg-purple-100 text-purple-800',
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
};

const OrderStatusBadge = ({ status }: OrderStatusBadgeProps) => {
  const colorClass = orderStatusColorMap[status];

  return (
    <div className={`px-2 py-1 w-20 rounded text-sm text-center font-medium ${colorClass}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  );
};

export default OrderStatusBadge;
