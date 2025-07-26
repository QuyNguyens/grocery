import {
  useDisclosure,
} from '@heroui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import AmountCart from './AmountCart';
import DrawerCart from './DrawerCart';
import { usePathname, useRouter } from 'next/navigation';
import { ROUTES } from 'constants/routes';
import { useCallback } from 'react';

const Cart = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();

  const handleOpenCart = useCallback(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      return pathname === ROUTES.cart ? undefined : onOpen();
    }
    router.push('/login');
  }, [router]);

  return (
    <>
      <div className="flex gap-2" onClick={handleOpenCart}>
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
