import { EyeIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import React, { useState } from 'react';
import { Order, OrderDetail } from 'types/order';
import orderService from 'services/order.service';
import OrderDetailModal from './OrderDetailModal';
import OrderStatusBadge from './OrderStatusBadge';
import { formatCurrency } from 'utils/formatCurrency';
import { formatDate } from 'utils/formatDate';

type OrderItemMobileProps = {
  order: Order;
};

const OrderItemMobile = ({ order }: OrderItemMobileProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ordersDetail, setOrdersDetail] = useState<OrderDetail[] | undefined>(undefined);

  const handleOpenDetail = async () => {
    try {
      const res = await orderService.getOrderDetail(order._id);
      if (res.data.success) {
        setOrdersDetail(res.data.data);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Lỗi khi lấy order detail: ', error);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center mb-2">
          <h4 className="text-sm text-gray-600 font-medium">ID:</h4>
          <h4 className="text-sm font-semibold">{order._id}</h4>
        </div>
        <Button
          className="bg-green-500 text-white! rounded-full"
          onPress={handleOpenDetail}
          isIconOnly
          size="sm"
          aria-label="Xem chi tiết"
        >
          <EyeIcon className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex gap-2 items-center mb-2">
        <h4 className="text-sm text-gray-600 font-medium">Status:</h4>
        <OrderStatusBadge status={order.status} />
      </div>
      <div className="flex gap-2 items-center mb-2">
        <h4 className="text-sm text-gray-600 font-medium">Total:</h4>
        <h4 className="text-sm font-semibold">{formatCurrency(order.totalAmount)}</h4>
      </div>
      <div className="flex gap-2 items-center mb-2">
        <h4 className="text-sm text-gray-600 font-medium">Payment method:</h4>
        <h4 className="text-sm">{order.paymentMethod}</h4>
      </div>
      <div className="flex gap-2 items-center mb-2">
        <h4 className="text-sm text-gray-600 font-medium">CreatedAt:</h4>
        <h4 className="text-sm">{formatDate(order.createdAt?.toString() || '')}</h4>
      </div>

      <OrderDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ordersDetail={ordersDetail}
      />
    </div>
  );
};

export default OrderItemMobile;
