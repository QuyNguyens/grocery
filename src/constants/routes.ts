export const ROUTES = {
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  login: '/login',
  signup: '/sign-up',
  profile: '/profile',
  home: '/',
  authors: '/authors',
  detail: '/detail',
  cart: '/cart',
  payment: '/payment',
  ourStore: '/our-store',
  special: '/special',
  categories: '/categories',
  topDeal: '/top-deal',
  checkout: '/cart/checkout',
  authCallback: '/auth/callback',
  collections: '/collections',
  orderStatus: '/order/order-status',
};

export const AUTH_ROUTES = [
  ROUTES.login,
  ROUTES.forgotPassword,
  ROUTES.resetPassword,
  ROUTES.signup,
];

export const HEADER_ONLY_ROUTES = [ROUTES.checkout, ROUTES.orderStatus];

export const EMPTY_ROUTES = [ROUTES.authCallback];

export const COLLECTIONS_ROUTES = [ROUTES.collections];
