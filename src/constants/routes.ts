export const ROUTES = {
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  login: '/login',
  signup: '/sign-up',
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
};

export const AUTH_ROUTES = [
  ROUTES.login,
  ROUTES.forgotPassword,
  ROUTES.resetPassword,
  ROUTES.signup,
];

export const HEADER_ONLY_ROUTES = [ROUTES.checkout];

export const EMPTY_ROUTES = [ROUTES.authCallback];
