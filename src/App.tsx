import { useEffect } from 'react';
import {
  RouterProvider,
  useLocation,
  useNavigate
} from 'react-router-dom';
import router from '@/router';

const NavigatorFromBaseApp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.microApp.addDataListener((data: Record<string, unknown>) => {
      // 当基座下发path时进行跳转
      if (data.path && data.path !== history.location.pathname) {
        navigate.push(data.path as string);
      }
    });
  }, [location]);
};

export default function App() {
  return <>

    <RouterProvider router={router} fallbackElement={<p>loading</p>} >
      <NavigatorFromBaseApp/>
    </RouterProvider>
  </>;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    console.log('dispose');
    return router.dispose();
  });
}
