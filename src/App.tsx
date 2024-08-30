import {RouterProvider} from 'react-router-dom';
import type { RemixRouter } from 'react-router-dom'

export default function App({router}: { router: RemixRouter }) {
    return (
        <RouterProvider
            router={router}
            fallbackElement={<p>loading</p>}
        />
    );
}
