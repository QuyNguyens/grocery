import { Image } from '@heroui/image';
import { PRODUCT_KEY } from 'constants/product';
import { useRouter } from 'next/navigation';
import React from 'react';
import { CategoryChildrenGroup } from 'types/category';

type CategoryItemProps = {
  categoryItem: CategoryChildrenGroup;
};

const CategoryItem = ({ categoryItem }: CategoryItemProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`${PRODUCT_KEY.collections}/${categoryItem.name}`)}
      className="flex flex-col gap-2"
    >
      <Image
        alt="category"
        src={
          categoryItem?.imageUrl
        }
        width={425}
        className="border border-gray-200 rounded z-5"
      />
      <h4 className="font-semibold text-sm text-center">{categoryItem?.name}</h4>
    </div>
  );
};

export default CategoryItem;
