'use client';
import { useCallback } from 'react';
import { LAYOUT_CONFIG } from './layout-config';
import { usePathname } from 'next/navigation';
import MainLayout from '../mainLayout';
import { Provider } from 'react-redux';
import { store } from 'stores/store';

export default function InitLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

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

  return (
    <>
      <Provider store={store}>{renderLayout()}</Provider>
    </>
  );
}
