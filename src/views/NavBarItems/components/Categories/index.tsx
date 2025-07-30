import React, { useEffect, useMemo, useState } from 'react';
import Items from '../OurStore/components/Items';
import Catalog from 'components/molecules/catalog';
import { useAppSelector } from 'hooks/useAppDispatch';
import { PRODUCT_KEY } from 'constants/product';
import { CategoryGroup } from 'types/category';

type CategoriesProps = {
  categoryItems: CategoryGroup[];
};
const Categories = ({ categoryItems }: CategoriesProps) => {
  const productState = useAppSelector(
    (state) => state.products.collections[PRODUCT_KEY.bestSelling],
  );
  const products = productState?.pages?.[productState?.currentPage || 1];

  return (
    <div className="flex">
      <div className="flex-1 p-4">
        {categoryItems && (
          <div className="w-full grid grid-cols-3 gap-4">
            {categoryItems.map((categoryItem, index) => (
              <Items
                key={index}
                title={categoryItem.parentName}
                list={categoryItem.children.map((item) => item.name)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex-1">
        <Catalog title="Best Selling" products={products} overflowHeight="max-h-[230px]" />
      </div>
    </div>
  );
};

export default Categories;
