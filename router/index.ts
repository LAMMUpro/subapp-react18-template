import { useEffect } from 'react';
import { createHashRouter, useNavigate } from 'react-router-dom';

import routeComponent from '../src/pages/demo/routeComponent';
import micromainComponent from '../src/pages/demo/micromainComponent';
import testElement from '../src/pages/demo/testElement';
import NotFound from '../src/pages/demo/404';

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/micro-main');
  }, []);
  // return <App/>
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
