import { RequireAuth } from './RequireAuth';
import { routesConfig } from '@shared/Config/routes';
import { PageLoader } from '@shared/UI/PageLoader/PageLoader';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routesConfig.map(({ path, element, isProtect }) => {
          const routeElement = (
            <Suspense fallback={<PageLoader />}>{element}</Suspense>
          );

          return (
            <Route
              key={path}
              path={path}
              element={
                isProtect ? (
                  <RequireAuth>{routeElement}</RequireAuth>
                ) : (
                  routeElement
                )
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};
