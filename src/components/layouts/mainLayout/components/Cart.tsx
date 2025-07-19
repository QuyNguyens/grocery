import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from '@heroui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import AmountCart from './AmountCart';
import DrawerCart from './DrawerCart';

const Cart = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="flex gap-2" onClick={onOpen}>
        <ShoppingCartIcon className="w-8 h-8" />
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xs">Cart</span>
            <AmountCart amount={0} />
          </div>
          <span className="font-bold text-[#184363]">$0.00</span>
        </div>
      </div>
      <DrawerCart isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default Cart;
