import { TrashIcon } from '@heroicons/react/24/outline';
import { Image } from '@heroui/image';
import React, { useCallback, useState } from 'react';
import { CartItem as CartItemData } from 'types/cart';
import ModelPopup from '../modelPopup';
import { useUserContext } from 'context/AuthContext';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { deleteCartItem } from 'stores/cartSlice';

type CartItemProps = {
  item: CartItemData;
};

const CartItem = ({ item }: CartItemProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useUserContext();
  const dispatch = useAppDispatch();

  const handleRemove = useCallback(async () => {
    dispatch(deleteCartItem({ userId: user?._id, itemId: item._id }));
  }, [item]);

  return (
    <div className="flex gap-3 p-3 border-b border-gray-200">
      <Image alt="image product" src={item.image} width={75} className="border border-gray-300" />
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex w-full items-start justify-between gap-5">
          <p className="font-bold text-sm hover:text-green-500">{item.name}</p>
          <TrashIcon onClick={handleRemove} className="w-6 h-6 text-red-500!" />
          <ModelPopup
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleRemove}
            title="Xác nhận xoá"
            message="Bạn có chắc muốn xoá sản phẩm này khỏi giỏ hàng?"
          />
        </div>
        <span className="text-gray-600 ml-4 text-xs">X ${item.price}.00</span>
        <span className="text-gray-600 text-xs">
          {item.attributesSnapshot.name}: {item.attributesSnapshot.value}
        </span>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
