import {RouterProvider, createHashRouter} from 'react-router-dom';

export default function App({router}: { router: ReturnType<typeof createHashRouter> }) {
    return (
        <RouterProvider
            router={router}
            fallbackElement={<p>loading</p>}
        />
    );
}
