import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Navbar, NavbarContent } from '@heroui/navbar';
import HeaderLogo from 'components/molecules/headerLogo';
import React from 'react';

const Header = () => {
  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="pr-3" justify="start">
        <HeaderLogo />
      </NavbarContent>
      <NavbarContent className="pl-3" justify="end">
        <ShoppingBagIcon className="w-5 h-5 text-blue-500 hover:text-blue-700 font-bold" />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
