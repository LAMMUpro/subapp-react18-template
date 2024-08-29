import {RouterProvider} from 'react-router-dom';
import type {RouteObject} from 'react-router-dom'

export default function App({router}: { router: RouteObject[] }) {
    return (
        <RouterProvider
            router={router}
            fallbackElement={<p>loading</p>}
        />
    );
}
