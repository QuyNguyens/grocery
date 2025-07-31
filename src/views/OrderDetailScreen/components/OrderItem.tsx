import { EyeIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import React, { useState } from 'react';
import orderService from 'services/order.service';
import { Order, OrderDetail } from 'types/order';
import OrderDetailModel from './OrderDetailModal';
import { formatDate } from 'utils/formatDate';
import OrderStatusBadge from './OrderStatusBadge';
import { formatCurrency } from 'utils/formatCurrency';

type OrderItemProps = {
  order: Order;
};

const OrderItem = ({ order }: OrderItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [ordersDetail, setOrdersDetail] = useState<OrderDetail[] | undefined>(undefined);

  const handleOpenDetail = async () => {
    try {
      const res = await orderService.getOrderDetail(order._id);
      if (res.data.success) {
        setOrdersDetail(res.data.data);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Lỗi khi lấy orders detail: ', error);
    }
  };

  return (
    <tr className="border-t border-gray-200 hover:bg-gray-100">
      <td className="p-2">
        <h4>{order._id}</h4>
      </td>
      <td className="p-2">
        <OrderStatusBadge status={order.status} />
      </td>
      <td className="p-2">
        <h4 className="font-semibold">{formatCurrency(order.totalAmount)}</h4>
      </td>
      <td className="p-2">
        <h4>{order.paymentMethod}</h4>
      </td>
      <td className="p-2">
        <h4>{formatDate(order.createdAt?.toString() || '')}</h4>
      </td>
      <td className="p-2">
        <Button
          className="bg-green-500 text-white! rounded-full"
          onClick={handleOpenDetail}
          isIconOnly
          size="sm"
          aria-label="Remove item"
        >
          <EyeIcon className="w-4 h-4" />
        </Button>
      </td>
      <OrderDetailModel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ordersDetail={ordersDetail}
      />
    </tr>
  );
};

export default OrderItem;
