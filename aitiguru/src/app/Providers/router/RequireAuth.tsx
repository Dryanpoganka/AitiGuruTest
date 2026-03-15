import { Navigate, useLocation } from 'react-router-dom';
import { useUserStore } from '@entities/user/index';
import { ROUTES } from '@shared/Config/routes';
import type { JSX } from 'react';
import { PageLoader } from '@shared/UI/PageLoader/PageLoader';
import Cookies from 'js-cookie';
interface RequireAuthProps {
  children: JSX.Element;
}
export const RequireAuth = ({ children }: RequireAuthProps) => {
  const isAuth = useUserStore((state) => state.isAuth);
  const _hasHydrated = useUserStore((state) => state._hasHydrated);

  const isActuallyAuth = isAuth || !!Cookies.get('accessToken');

  if (!_hasHydrated) {
    return isActuallyAuth ? children : <PageLoader />;
  }

  if (!isAuth) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return children;
};
