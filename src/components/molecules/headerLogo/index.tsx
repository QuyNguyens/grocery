import { Image } from '@heroui/image';
import { NavbarBrand } from '@heroui/navbar';
import React from 'react';
import Logo from '../../../../public/logo/app-logo.png';
import { useRouter } from 'next/navigation';

const HeaderLogo = () => {
  const router = useRouter();

  return (
    <NavbarBrand onClick={() => router.push('/')}>
      <Image alt="logo" src={Logo.src} width={60} />
      <p className="font-bold text-inherit">Grocery</p>
    </NavbarBrand>
  );
};

export default HeaderLogo;
