'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Department from './components/Department';
import OurStore from './components/OurStore';
import MenuDropdown from 'components/molecules/MenuDropdown';
import Special from './components/Special';
import Categories from './components/Categories';
import TopDeal from './components/TopDeal';
import Element from './components/Element';
import { ROUTES } from 'constants/routes';
import { fetchProductsByCollection } from 'stores/productSlice';
import { PRODUCT_KEY } from 'constants/product';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { getCategory } from 'stores/categorySlice';

const NavBarItems = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const router = useRouter();
  const categoryItems = useAppSelector((state) => state.categories.categories);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.categories,
        page: 1,
        limit: 8,
        name: 'Vegetables',
      }),
    );
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.bestSelling,
        page: 1,
        limit: 8,
        name: '',
      }),
    );
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.topDeal,
        page: 1,
        limit: 8,
        name: '',
      }),
    );
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.special,
        page: 1,
        limit: 8,
        name: '',
      }),
    );
    dispatch(
      fetchProductsByCollection({
        collectionKey: PRODUCT_KEY.ourStore,
        page: 1,
        limit: 9,
        name: '',
      }),
    );
    if (categoryItems.length === 0) {
      dispatch(getCategory());
    }
  }, []);

  return (
    <div className="relative z-20 px-3 p-2 max-w-[1200px] mx-auto flex items-center gap-10 border-b bg-white border-gray-300">
      <Department />
      <span
        onClick={() => router.push('/')}
        className="font-semibold hover:text-green-500 duration-300"
      >
        Home
      </span>
      <MenuDropdown
        routeName={`${ROUTES.collections}/${ROUTES.ourStore}`}
        id="ourStore"
        label="Our store"
        activeId={activeId}
        setActiveId={setActiveId}
      >
        <OurStore />
      </MenuDropdown>
      <MenuDropdown
        routeName={`${ROUTES.collections}/${ROUTES.special}`}
        id="special"
        label="Special"
        activeId={activeId}
        setActiveId={setActiveId}
      >
        <Special />
      </MenuDropdown>
      <MenuDropdown
        routeName={ROUTES.categories}
        id="categories"
        label="Categories"
        activeId={activeId}
        setActiveId={setActiveId}
      >
        {categoryItems && <Categories categoryItems={categoryItems} />}
      </MenuDropdown>
      <MenuDropdown
        routeName={ROUTES.topDeal}
        id="topDeal"
        label="TopDeal"
        activeId={activeId}
        setActiveId={setActiveId}
      >
        <TopDeal />
      </MenuDropdown>
      <Element />
    </div>
  );
};

export default NavBarItems;
