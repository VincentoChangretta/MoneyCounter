import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';



export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({path, element}) => (
        <Route key={path} path={path} element={(
          <Suspense fallback="...loading"> 
            <div>
              {element}
            </div>
          </Suspense>
        )}/>
      ))}
    </Routes>

  );
}
