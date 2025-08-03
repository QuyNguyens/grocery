import { TrashIcon } from '@heroicons/react/24/outline';
import { addToast, Button, Image } from '@heroui/react';
import ModelPopup from 'components/molecules/modelPopup';
import QuantityCustom from 'components/molecules/quantityCustom';
import { useUserContext } from 'context/AuthContext';
import { useAppDispatch } from 'hooks/useAppDispatch';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { deleteCartItem, updateCartItem } from 'stores/cartSlice';
import { CartItem } from 'types/cart';
import { formatCurrency } from 'utils/formatCurrency';

type CartItemMobileProps = {
  cartItem: CartItem;
  discountedPrice: number;
};

const CartItemMobile = ({ cartItem, discountedPrice }: CartItemMobileProps) => {
  const [amount, setAmount] = useState<number>(cartItem.quantity);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { user } = useUserContext();

  useEffect(() => {
    if (user?._id && amount !== cartItem.quantity) {
      dispatch(updateCartItem({ userId: user._id, itemId: cartItem._id, quantity: amount }));
    }
  }, [amount]);

  const total = useMemo(() => {
    return discountedPrice * amount;
  }, [amount, dispatch]);

  const handleRemove = useCallback(async () => {
    dispatch(deleteCartItem({ userId: user?._id, itemId: cartItem._id }));
    addToast({
      title: 'Giỏ hàng',
      description: 'Đã xóa sản phẩm khỏi giỏ hàng',
      color: 'success',
    });
  }, [cartItem]);

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm flex gap-3">
      <Image
        alt="product image"
        src={cartItem.image}
        width={80}
        className="rounded-md border border-gray-200 z-5"
      />
      <div className="flex-1">
        <h1 className="font-semibold text-base">{cartItem.name}</h1>
        <h4 className="text-sm">{cartItem.attributesSnapshot.name}</h4>
        {cartItem.attributesSnapshot.value && (
          <div className="text-xs text-gray-400">Weight: {cartItem.attributesSnapshot.value}</div>
        )}
        <div className="mt-2 flex items-center gap-2">
          {cartItem.discount ? (
            <>
              <span className="line-through text-sm text-gray-400">
                {formatCurrency(cartItem.price)}
              </span>
              <span className="text-red-500 font-bold">{formatCurrency(discountedPrice)}</span>
            </>
          ) : (
            <span className="font-semibold">{formatCurrency(cartItem.price)}</span>
          )}
        </div>
        <div className="mt-2">
          <QuantityCustom
            inStock={cartItem.quantity}
            amount={cartItem.quantity}
            setAmount={() => {}}
          />
        </div>
        <h3 className="mt-2 text-sm font-bold">
          Total: {formatCurrency(discountedPrice * cartItem.quantity)}
        </h3>
      </div>
      <Button
        className="bg-red-500 text-white! rounded-full"
        onPress={() => setIsModalOpen(true)}
        isIconOnly
        size="sm"
        aria-label="Remove item"
      >
        <TrashIcon className="w-4 h-4" />
      </Button>
      <ModelPopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleRemove}
        title="Xác nhận xoá"
        message="Bạn có chắc muốn xoá sản phẩm này khỏi giỏ hàng?"
      />
    </div>
  );
};

export default CartItemMobile;
