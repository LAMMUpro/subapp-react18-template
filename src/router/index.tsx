import type { RouteObject } from 'react-router-dom';

import MicroComponent from 'micro-app-utils/react18/MicroComponent';

import RouteComponent from '@/pages/demo/routeComponent';
import MicromainComponent from '@/pages/demo/micromainComponent';
import TestElement from '@/pages/demo/testElement';
import Interceptor from '@/router/interceptor';

/**
 * demo路由
 */
const demoRoutes: RouteObject[] = [
  {
    path: '/demo/micromainComponent',
    element: <MicromainComponent />,
  },
  {
    path: '/demo/routeComponent',
    element: <RouteComponent />,
  },
  {
    path: '/demo/test-element',
    element: <TestElement />,
  },
]

/** 
 * 基础路由
 */
export const baseRoutes: RouteObject[] = [
  {
    path: '/empty',
    element: <MicroComponent _is="PageEmpty"/>,
  },
  {
    path: '/404',
    element: <MicroComponent _is="Page404"/>,
  },
  {
    path: '/403',
    element: <MicroComponent _is="Page403"/>,
  },
  {
    path: '*',
    element: <MicroComponent _is="Page404" />,
  },
  ...demoRoutes,
];

const wrapRoutesWithAnthRouter = (routes: RouteObject[]): RouteObject[] => {
  return routes.map((route) => {
    const wrappedRoute: RouteObject = {
      ...route,
      element: <Interceptor>{route.element}</Interceptor>,
    };

    if (route.children) {
      wrappedRoute.children = wrapRoutesWithAnthRouter(route.children);
    }

    return wrappedRoute;
  });
};

export const routes = wrapRoutesWithAnthRouter(baseRoutes);
