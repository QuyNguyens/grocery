import React, { useMemo } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from '@heroui/react';
import CartItem from 'components/molecules/cartItem';
import { useRouter } from 'next/navigation';
import { ROUTES } from 'constants/routes';
import { CartItem as CartItemData } from 'types/cart';

type DrawerCartProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  cartItems: CartItemData[];
};

const DrawerCart = ({ cartItems, isOpen, onOpenChange }: DrawerCartProps) => {
  const router = useRouter();

  const totalPrice = useMemo(() => {
    if (cartItems.length > 0)
      return cartItems?.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    return 0;
  }, [cartItems]);

  return (
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent>
        {(onClose) => (
          <>
            <DrawerHeader className="flex flex-col gap-1 bg-green-500 text-white!">
              <span className="ml-4 text-sm">Your Shopping Cart</span>
            </DrawerHeader>
            <DrawerBody className="mt-5 px-4 flex flex-col gap-1">
              {cartItems.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </DrawerBody>
            <DrawerFooter className="bg-[#EDF4F6] px-0 py-0 flex flex-col">
              <div className="flex w-full items-center justify-between px-4 py-4 border-b border-gray-300">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-[#184363]">Total Item</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-[#184363]">Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
              </div>
              <div className="flex mx-4 my-3 gap-3">
                <Button
                  fullWidth
                  radius="full"
                  className="text-white! font-bold bg-green-500 hover:bg-green-600"
                  onClick={() => {
                    onClose();
                    router.push(ROUTES.cart);
                  }}
                >
                  ViewCart
                </Button>
                <Button
                  className="font-bold text-white!"
                  fullWidth
                  radius="full"
                  color="primary"
                  onClick={() => {
                    onClose();
                    router.push(ROUTES.checkout);
                  }}
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
