import { Image } from '@heroui/image';
import React from 'react';
import Logo from '../../../../../public/logo/app-logo.png';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/navbar';
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import Search from './Search';
import Cart from './Cart';
import Avatar from './Avatar';

const Header = () => {
    const accessToken = null;
  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="pr-3 flex-[1]" justify="start">
        <NavbarBrand>
          <Image alt="logo" src={Logo.src} width={60} />
          <p className="font-bold text-inherit">Grocery</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden flex-[3] sm:flex gap-4" justify="center">
        <Search />
      </NavbarContent>

      <NavbarContent className="flex-[2]" justify="end">
        {
            accessToken ?
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
            : <Avatar />
        }
        <Cart />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
