import { AUTH_ROUTES, COLLECTIONS_ROUTES, EMPTY_ROUTES, HEADER_ONLY_ROUTES } from 'constants/routes';
import { ComponentType } from 'react';
import AuthLayout from '../authLayout';
import CheckoutLayout from '../checkoutLayout';
import EmptyLayout from '../emptyLayout';
import CollectionsLayout from '../collectionsLayout';

export type TLayoutConfig = {
  pathname?: string[];
  prefixPathname?: string;
  Layout: ComponentType<{ children: React.ReactNode }>;
};

export const LAYOUT_CONFIG: TLayoutConfig[] = [
  {
    pathname: [...AUTH_ROUTES],
    Layout: AuthLayout,
  },
  {
    pathname: [...HEADER_ONLY_ROUTES],
    Layout: CheckoutLayout,
  },
  {
    pathname: [...EMPTY_ROUTES],
    Layout: EmptyLayout
  },
  {
    pathname: [...COLLECTIONS_ROUTES],
    Layout: CollectionsLayout
  }
];
