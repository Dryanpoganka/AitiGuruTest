import { lazy } from 'react';

const LoginPage = lazy(() => import('@pages/LoginPage'));
const ProductPage = lazy(() => import('@pages/ProductPage'));
export const ROUTES = {
  LOGIN: '/',
  PRODUCT: '/product',
} as const;

export const routesConfig = [
  { path: ROUTES.LOGIN, element: <LoginPage />, label: 'Логин' },
  { path: ROUTES.PRODUCT, element: <ProductPage />, label: 'Товары' },
];
