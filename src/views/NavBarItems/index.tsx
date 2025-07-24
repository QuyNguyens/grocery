'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Department from './components/Department';
import OurStore from './components/OurStore';
import MenuDropdown from 'components/molecules/MenuDropdown';
import Special from './components/Special';
import Categories from './components/Categories';
import TopDeal from './components/TopDeal';
import Element from './components/Element';
import { ROUTES } from 'constants/routes';

const NavBarItems = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const closeAll = () => setActiveId(null);
  const router = useRouter();

  return (
    <div className="relative mt-3 px-3 pb-2 max-w-[1200px] mx-auto flex items-center gap-10 border-b border-gray-300">
      <Department />
      <span
        onClick={() => router.push('/')}
        className="font-semibold hover:text-green-500 duration-300"
      >
        Home
      </span>
      <MenuDropdown
        routeName={ROUTES.ourStore}
        id="ourStore"
        label="Our store"
        activeId={activeId}
        setActiveId={setActiveId}
      >
        <OurStore />
      </MenuDropdown>
      <MenuDropdown
        routeName={ROUTES.special}
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
        <Categories />
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
