import type { RouteObject } from 'react-router-dom'

import routeComponent from '@/pages/demo/routeComponent';
import micromainComponent from '@/pages/demo/micromainComponent';
import testElement from '@/pages/demo/testElement';
import NotFound from '@/pages/demo/404';
import PageEmpty from '@/pages/empty';

export const baseRoutes: RouteObject[] = [
  {
    path: '/empty',
    Component: PageEmpty,
  },
  {
    path: '/demo/micromainComponent',
    Component: micromainComponent,
  },
  {
    path: '/demo/routeComponent',
    Component: routeComponent,
  },
  {
    path: '/demo/test-element',
    Component: testElement,
  },
  {
    path: '*',
    Component: NotFound,
  },
];
