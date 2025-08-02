'use client';

import CategoryItem from 'components/molecules/categoryItem';
import { useAppSelector } from 'hooks/useAppDispatch';
import React from 'react';

const TopDealScreen = () => {
  const categoryItems = useAppSelector((state) => state.categories.categories);

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-[1200px] grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8">
        {categoryItems &&
          categoryItems.map((categoryChildren) =>
            categoryChildren.children.map((item) => (
              <CategoryItem key={item._id} categoryItem={item} />
            )),
          )}
      </div>
    </div>
  );
};

export default TopDealScreen;
