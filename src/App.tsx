import {RouterProvider} from 'react-router-dom';
import { Router } from '@remix-run/router'

export default function App({router}: { router: Router }) {
    return (
        <RouterProvider
            router={router}
            fallbackElement={<p>loading</p>}
        />
    );
}
