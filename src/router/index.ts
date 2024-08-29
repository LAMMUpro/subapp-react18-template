import { useEffect } from 'react';
import { createHashRouter, useNavigate } from 'react-router-dom';

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

const router = createHashRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        Component: Redirect
      },
      {
        path: 'micro-main',
        Component: micromainComponent
      }
    ]
  },
  {
    path: '/apptsx',
    Component: routeComponent
  },
  {
    path: '/demo/routeComponent',
    Component: routeComponent
  },
  {
    path: '/demo/test-element',
    Component: testElement
  },
  {
    path: '*',
    Component: NotFound
  }
], {
  basename: '/'
});

export default router;
