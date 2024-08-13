import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { generateDataListener } from 'micro-app-utils/listener';
import { MicroComponentSlotMap } from 'micro-app-utils/data';
import React from 'react';

let app = createRoot(document.getElementById('root')!);

/** 监听微前端主应用数据 */
let dataListener: (data: BaseObj<any>) => void;

window.mount = () => {
  app.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  dataListener = generateDataListener({
    micro_component: ({ slotName, elementId, props, parentElementId }) => {
      const Element = document.body.querySelector(`#${elementId}`);
      const component = MicroComponentSlotMap[parentElementId]?.[slotName];
      if (Element && component) {
        createRoot(Element).render(React.createElement(component.type, {
          ...component.props,
          ...props,
        }));
      }
    },
  });
  window.microApp?.addDataListener(dataListener, true);
}

window.unmount = () => {
  window.microApp?.removeDataListener(dataListener);
  app.render(<div></div>);
}

