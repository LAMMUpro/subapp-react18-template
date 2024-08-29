import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from '@/router';

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>loading</p>} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    console.log('dispose');
    return router.dispose();
  });
}
