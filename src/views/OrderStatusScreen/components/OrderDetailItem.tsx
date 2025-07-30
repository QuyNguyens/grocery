import { Image } from '@heroui/image';
import React from 'react';
import { OrderDetail } from 'types/order';
import { formatCurrency } from 'utils/formatCurrency';

type OrderDetailItemProps = {
  orderDetail: OrderDetail;
};

const OrderDetailItem = ({ orderDetail }: OrderDetailItemProps) => {
  return (
    <tr className="border-t border-gray-200 hover:bg-gray-100">
      <td className="p-2">
        <Image
          alt="product image"
          src={orderDetail.image}
          width={60}
          className="rounded-lg border border-gray-200"
        />
      </td>
      <td className="p-2">
        <div className="flex flex-col gap-1">
          <h4 className="text-sm text-gray-500">{orderDetail.type || 'Vegetable'}</h4>
          <p className="font-semibold text-sm">{orderDetail.name}</p>
        </div>
      </td>
      <td className="p-2">
        <div className="flex gap-2 items-center">
          <h4 className="text-gray-400 text-sm">{formatCurrency(orderDetail?.price || 0)}</h4>
        </div>
      </td>
      <td className="p-2">
        <h4 className="text-gray-400 text-sm">{orderDetail.quantity}</h4>
      </td>
      <td className="p-2">
        <h4 className="text-gray-400 text-sm">
          {orderDetail.quantity * (orderDetail?.price || 1)}
        </h4>
      </td>
    </tr>
  );
};

export default OrderDetailItem;
