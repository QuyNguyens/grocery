// OrderDetailModel.tsx
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@heroui/react';
import OrdersDetail from 'views/OrderStatusScreen/components/OrdersDetail';
import { OrderDetail } from 'types/order';

type OrderDetailModelProps = {
  isOpen: boolean;
  onClose: () => void;
  ordersDetail: OrderDetail[] | undefined;
};

export default function OrderDetailModel({ isOpen, onClose, ordersDetail }: OrderDetailModelProps) {
  return (
    <Modal size='5xl' isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className="flex flex-col gap-1 ml-4">
              <h1>Orders detail</h1>
            </ModalHeader>
            <ModalBody>{ordersDetail && <OrdersDetail ordersDetail={ordersDetail} />}</ModalBody>
            <ModalFooter>
              <Button className="bg-green-500 text-white! font-semibold" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
