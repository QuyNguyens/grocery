import React, { useEffect, useState } from 'react';
import { Navbar, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import Search from './Search';
import Cart from './Cart';
import Avatar from './Avatar';
import HeaderLogo from 'components/molecules/headerLogo';
import { useUserContext } from 'context/AuthContext';

const Header = () => {
  const { user } = useUserContext();

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="pr-3 flex-[1]" justify="start">
        <HeaderLogo />
      </NavbarContent>

      <NavbarContent className="hidden flex-[3] sm:flex gap-4" justify="center">
        <Search />
      </NavbarContent>

      <NavbarContent className="flex-[2]" justify="end">
        {!user?._id ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="warning" href="/signup" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        ) : (
          <Avatar />
        )}
        <Cart />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
