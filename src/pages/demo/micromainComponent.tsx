import MicroComponent from 'micro-app-utils/react18/MicroComponent';
import { useState } from 'react';

function micromainComponent() {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [number, setNumber] = useState(1);
  return (
    <div>
      <div>
        <section className="-m-card lightblue">
          <p className="-m-title">SvgIcon图标</p>
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

        <section className="-m-card lightcoral">
          <span className="-m-title">Dialog弹窗</span>
          <button onClick={() => setIsShowDialog(true)}>点击弹窗:{number}</button>
          <MicroComponent
            _is="BaseDialog"
            modelValue={isShowDialog}
            onUpdate:modelValue={() => setIsShowDialog(false)}
            default={
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
                  onClick={() => setNumber(number + 1)}
                >
                  计数器加1
                </button>
              </div>
            }
            footer={
              <div>
                <button
                  className="btn"
                  onClick={() => setIsShowDialog(false)}
                >
                  确定
                </button>
                <button
                  className="btn"
                  style={{
                    marginLeft: '10px',
                    backgroundColor: 'rgb(241, 241, 241)',
                    color: 'gray',
                  }}
                  onClick={() => setIsShowDialog(false)}
                >
                  关闭
                </button>
              </div>
            }
          ></MicroComponent>
        </section>
      </div>
    </div>
  );
}

export default micromainComponent;
