import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Image,
  Divider,
} from '@heroui/react';
import { TrashIcon } from '@heroicons/react/24/outline';
import CartItem from 'components/molecules/cartItem';

type DrawerCartProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const DrawerCart = ({ isOpen, onOpenChange }: DrawerCartProps) => {
  return (
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1 bg-green-500 text-white!">
              <span className="ml-4 text-sm">Your Shopping Cart</span>
            </DrawerHeader>
            <DrawerBody className="mt-5 px-4 flex flex-col gap-1">
              <CartItem
                item={{
                  image:
                    'https://demo-grocy-01.myshopify.com/cdn/shop/files/33_02_140x.jpg?v=1719656359',
                  description: 'Amaranthus 1 Bunch (Approx 160 g - 1500 g)',
                  amount: 30.0,
                  weight: 0.5,
                }}
              />
              <Divider className="my-4" />
              <CartItem
                item={{
                  image:
                    'https://demo-grocy-01.myshopify.com/cdn/shop/files/29_02_140x.jpg?v=1719656386',
                  description: 'Potato per kg (Approx. 950 g - 1000 g)',
                  amount: 20.0,
                  weight: 1,
                }}
              />
            </DrawerBody>
            <DrawerFooter className="bg-[#EDF4F6] px-0 py-0 flex flex-col">
              <div className="flex w-full items-center justify-between px-4 py-4 border-b border-gray-300">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-[#184363]">Total Item</span>
                  <span>2</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-[#184363]">Subtotal</span>
                  <span>$50.00</span>
                </div>
              </div>
              <div className="flex mx-4 my-3 gap-3">
                <Button
                  fullWidth
                  radius="full"
                  className="text-white! font-bold bg-green-500 hover:bg-green-600"
                  onPress={onClose}
                >
                  ViewCart
                </Button>
                <Button
                  className="font-bold text-white!"
                  fullWidth
                  radius="full"
                  color="primary"
                  onPress={onClose}
                >
                  Checkout
                </Button>
              </div>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default React.memo(DrawerCart);
