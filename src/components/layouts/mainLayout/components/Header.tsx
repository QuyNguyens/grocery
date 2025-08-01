import React from 'react';
import { Navbar, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import Search from './Search';
import Cart from './Cart';
import Avatar from './Avatar';
import HeaderLogo from 'components/molecules/headerLogo';

const Header = () => {
  const accessToken = null;

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="pr-3 flex-[1]" justify="start">
        <HeaderLogo />
      </NavbarContent>

      <NavbarContent className="hidden flex-[3] sm:flex gap-4" justify="center">
        <Search />
      </NavbarContent>

      <NavbarContent className="flex-[2]" justify="end">
        {accessToken ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="warning" href="#" variant="flat">
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
