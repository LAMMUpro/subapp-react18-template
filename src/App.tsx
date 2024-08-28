import { useEffect, useState } from 'react';
import {
  RouterProvider,
  useLocation,
  useNavigate
} from 'react-router-dom';

import MicroComponent from 'micro-app-utils/react18/MicroComponent';
import router from '../router';

function Footer(props: any) {
  return <div>
    <div>uuid: {props.uuid}</div>
    <div>id: {props.id}</div>
  </div>;
}

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
  // const [showDialog, setShowDialog] = useState(false);
  // return (
  //   <>
  //     <div>
  //       <button onClick={() => setShowDialog(!showDialog)}>显示弹窗</button>
  //
  //       <MicroComponent
  //         _is="BaseDialog"
  //         modelValue={showDialog}
  //         onUpdate:modelValue={() => setShowDialog(false)}
  //         default={<div>默认</div>}
  //         footer={<Footer id='123'>脚部</Footer>}
  //       ></MicroComponent>
  //     </div>
  //   </>
  // );
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    console.log('dispose');
    return router.dispose();
  });
}
