import { CreateAccountingPage } from 'pages/CreateAccountingPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

export enum Routes {
  MAIN = 'main',
  CREATOR = 'creator',
}

export const routePath: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.CREATOR]: '/creator',
};

export const routeConfig: Record<Routes, RouteProps> = {
  [Routes.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
  },
  [Routes.CREATOR]: {
    path: routePath.creator,
    element: <CreateAccountingPage />,
  },
};
