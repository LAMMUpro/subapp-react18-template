import { useState } from 'react';

import MicroComponent from 'micro-app-utils/react18/MicroComponent';

function micromainComponent() {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [number, setNumber] = useState(1);

  const defaultDOM = (
    <div>
      <div>默认插槽:{number}</div>
      <button
        style={{
          backgroundColor: 'lightskyblue',
          color: 'white',
          fontSize: '14px',
          borderRadius: '4px',
          padding: '6px 10px',
        }}
        onClick={() => setNumber((val) => val + 1)}
      >
        计数器加1
      </button>
    </div>
  );

  return (
    <>
      <div>
        <section>
          <p>SvgIcon图标</p>
          <MicroComponent
            _is="SvgIcon"
            style="margin-right: 6px"
            name="Github"
          ></MicroComponent>
          <MicroComponent
            _is="SvgIcon"
            style="margin-right: 6px"
            name="arrow-bottom"
          ></MicroComponent>
          <MicroComponent
            _is="SvgIcon"
            style="margin-right: 6px"
            name="docs-question"
          ></MicroComponent>
          <MicroComponent
            _is="SvgIcon"
            style="margin-right: 6px"
            name="zhanwei"
          ></MicroComponent>
        </section>

        <section>
          <button onClick={() => setIsShowDialog(true)}>点击弹窗:{number}</button>
          <MicroComponent
            _is="BaseDialog"
            modelValue={isShowDialog}
            default={defaultDOM}
            footer={<div>脚部</div>}
          ></MicroComponent>
        </section>
      </div>
    </>
  );
}

export default micromainComponent;
