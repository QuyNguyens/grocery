'use client';
import { useCallback, useEffect, useState } from 'react';
import { LAYOUT_CONFIG } from './layout-config';
import { usePathname, useRouter } from 'next/navigation';
import MainLayout from '../mainLayout';
import { Provider } from 'react-redux';
import { store } from 'stores/store';
import { HeroUIProvider } from '@heroui/system';
import { ToastProvider } from '@heroui/react';
import { PROTECTED_ROUTES } from 'constants/routes';

export default function InitLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isProtected = PROTECTED_ROUTES.includes(pathname);
    const loggedIn = localStorage.getItem('access_token');

    if (isProtected && !loggedIn) {
      router.replace('/login');
    } else {
      setIsCheckingAuth(false);
    }
  }, [pathname, router]);

  const renderLayout = useCallback(() => {
    const Layout = LAYOUT_CONFIG.find((item) => {
      return (
        item.pathname?.includes(pathname) ||
        (item.prefixPathname && pathname.startsWith(item.prefixPathname))
      );
    });

    if (Layout) {
      return <Layout.Layout>{children}</Layout.Layout>;
    }

    return <MainLayout>{children}</MainLayout>;
  }, [children, pathname]);

  if (isCheckingAuth) {
    return null;
  }

  return (
    <HeroUIProvider>
      <ToastProvider placement="top-center" toastOffset={60} />
      <Provider store={store}>{renderLayout()}</Provider>
    </HeroUIProvider>
  );
}
