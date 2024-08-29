import { useEffect } from 'react';
import { RouteObject, useNavigate } from 'react-router-dom';
import routeComponent from '@/pages/demo/routeComponent';
import micromainComponent from '@/pages/demo/micromainComponent';
import testElement from '@/pages/demo/testElement';
import NotFound from '@/pages/demo/404';

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/micro-main');
  }, []);
  return micromainComponent();
};

export const baseRoutes: RouteObject[] = [
  {
    path: '/',
    Component: Redirect,
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
