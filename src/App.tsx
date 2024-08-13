import { useState } from 'react';
import MicroComponent from 'micro-app-utils/react18/MicroComponent';

function Footer(props: any) {
  return <div>
    <div>uuid: {props.uuid}</div>
    <div>id: {props.id}</div>
  </div>
}

function App() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setShowDialog(!showDialog)}>显示弹窗</button>

        <MicroComponent
          _is="BaseDialog"
          modelValue={showDialog}
          onUpdate:modelValue={() => setShowDialog(false)}
          default={<div>默认</div>}
          footer={<Footer id='123'>脚部</Footer>}
        >
        </MicroComponent>
      </div>
    </>
  );
}

export default App;
