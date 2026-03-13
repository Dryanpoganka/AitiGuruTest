import { lazy } from 'react';

const LoginPage = lazy(() => import('@pages/LoginPage'));

export const ROUTES = {
  LOGIN: '/',
  REALTY: '/realty',
} as const;

export const routesConfig = [
  { path: ROUTES.LOGIN, element: <LoginPage />, label: 'Логин' },
  //   { path: ROUTES.REALTY, element: <RealtyPage />, label: "Товары" },
];
