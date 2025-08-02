import CategoryItem from 'components/molecules/categoryItem';
import ImageTitle from 'components/molecules/imageTitle';
import { useAppSelector } from 'hooks/useAppDispatch';
import React, { useMemo } from 'react';
import { CategoryChildrenGroup } from 'types/category';
import { Product } from 'types/product';

type ShopByProps = {
  products: Product[];
};
const ShopBy = ({ products }: ShopByProps) => {
  const categoryItems = useAppSelector((state) => state.categories.categories);

  const categoryDisplay = useMemo(() => {
    const allChildren: CategoryChildrenGroup[] = categoryItems.flatMap((group) => group.children);
    const shuffled = allChildren.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 8);
  }, [categoryItems]);

  return (
    <div className="p-4 flex-1">
      <h3 className="text-[16px] text-center text-gray-700 font-semibold">Shop by</h3>
      <div className="mt-4 grid grid-cols-4 gap-5">
        {categoryDisplay &&
          categoryDisplay.map((item) => <CategoryItem key={item._id} categoryItem={item} />)}
      </div>
    </div>
  );
};

export default ShopBy;
