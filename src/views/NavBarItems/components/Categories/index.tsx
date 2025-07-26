import React, { useEffect, useMemo, useState } from 'react';
import Items from '../OurStore/components/Items';
import Catalog from 'components/molecules/catalog';
import { useAppSelector } from 'hooks/useAppDispatch';
import { PRODUCT_KEY } from 'constants/product';
import { CategoryGroup } from 'types/category';
import { categoryServices } from 'services/category.service';

const Categories = () => {
  const categories = useAppSelector((state) => state.products.collections[PRODUCT_KEY.categories]);
  const [categoryItems, setCategoryItems] = useState<CategoryGroup[] | undefined>(undefined);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await categoryServices.get();

        if (res?.data.success) {
          setCategoryItems(res?.data.data);
        }
      } catch (error) {
        console.error('error when get category: ', error);
      }
    };
    fetchCategory();
  }, []);

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
        <Catalog title="Best Selling" products={categories?.products} />
      </div>
    </div>
  );
};

export default Categories;
