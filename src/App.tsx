import { RouterProvider } from 'react-router-dom';

export default function App({ router }: { router: any }) {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>loading</p>}
    />
  );
}
