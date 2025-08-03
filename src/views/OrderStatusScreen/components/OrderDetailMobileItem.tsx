import { Image } from '@heroui/image';
import React from 'react';
import { OrderDetail } from 'types/order';
import { formatCurrency } from 'utils/formatCurrency';

type OrderDetailMobileItemProps = {
  orderDetail: OrderDetail;
};

const OrderDetailMobileItem = ({ orderDetail }: OrderDetailMobileItemProps) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm flex gap-3">
      <Image
        alt="product image"
        src={orderDetail.image}
        width={80}
        className="rounded-md border border-gray-200 z-5"
      />
      <div className="flex-1">
        <p className="text-sm text-gray-500">
          <span className="font-semibold">Type:</span> {orderDetail.type || 'Vegetable'}
        </p>
        <p className="font-semibold text-sm">{orderDetail.name}</p>
        <p className="text-gray-400 text-sm">
          <span className="font-semibold">Price:</span> {formatCurrency(orderDetail?.price || 0)}
        </p>
        <p className="text-gray-400 text-sm">
          <span className="font-semibold">Quantity:</span> {orderDetail.quantity}
        </p>
        <p className="text-gray-400 text-sm">
          <span className="font-semibold">Total:</span>{' '}
          {formatCurrency(orderDetail.quantity * (orderDetail?.price || 1))}
        </p>
      </div>
    </div>
  );
};

export default OrderDetailMobileItem;
