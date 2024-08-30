import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import type {RemixRouter} from 'react-router-dom'
import { createHashRouter } from 'react-router-dom';

import { isSubApp } from 'micro-app-utils';
import { generateDataListener } from 'micro-app-utils/listener';
import { MicroComponentSlotMap } from 'micro-app-utils/data';

import {routes} from '@/router';

import App from './App.tsx';


let app = createRoot(document.getElementById('root')!);

/** 监听微前端主应用数据 */
let dataListener: (data: BaseObj<any>) => void;

/**
 * 微前端渲染钩子
 */
window.mount = () => {
  /** 每次mount需要重新构建路由 */
  const router: RemixRouter = createHashRouter(routes, {
    basename: '/',
  });

  app.render(
    <StrictMode>
      <App router={router} />
    </StrictMode>
  );

  dataListener = generateDataListener({
    micro_component: ({ slotName, elementId, props, parentElementId }) => {
      const Element = document.body.querySelector(`#${elementId}`);
      const component = MicroComponentSlotMap[parentElementId]?.[slotName];
      if (Element && component) {
        createRoot(Element).render(
          React.createElement(component.type, {
            ...component.props,
            ...props,
          })
        );
      }
    },
  });
  window.microApp?.addDataListener(dataListener, true);

  /**
   * 本地开发相关配置
   */
  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      /** 在模块热替换时调用清理逻辑。确保在 HMR 环境中正确管理资源可以帮助你避免内存泄漏和其他潜在的问题 */
      return router.dispose();
    });
  }
};

/**
 * 微前端卸载钩子
 */
window.unmount = () => {
  window.microApp?.removeDataListener(dataListener);
  app.render(<div></div>);
};

/**
 * 应用独立运行时，直接运行渲染钩子函数
 */
if (!isSubApp) {
  window.mount();
}
