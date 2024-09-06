import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from '@remix-run/router';
import { createHashRouter } from 'react-router-dom';

import { isSubApp, sendDataDown } from 'micro-app-utils';
import { generateDataListener } from 'micro-app-utils/listener';
import { MicroComponentSlotMap, ReactMicroComponentSlotInfoMap } from 'micro-app-utils/data';

import { routes } from '@/router';

import App from './App.tsx';

let app = createRoot(document.getElementById('__subapp_react18')!);

/** 监听微前端主应用数据 */
let dataListener: (data: BaseObj<any>) => void;

/**
 * 微前端渲染钩子
 */
window.mount = () => {
  /** 每次mount需要重新构建路由 */
  const router: Router = createHashRouter(routes, {
    basename: '/',
  });

  app.render(
    <StrictMode>
      <App router={router} />
    </StrictMode>
  );

  dataListener = generateDataListener({
    micro_component_slot: ({ subAppNameList, slotName, elementId, props, parentElementId }) => {
      /**
       * 当前子应用即为目标子应用
       */
      if (subAppNameList.length === 0) {
        /** 
         * react比vue项目比，多出这个步骤：将插槽的信息存储起来
         */
        if (ReactMicroComponentSlotInfoMap[parentElementId]) {
          ReactMicroComponentSlotInfoMap[parentElementId][slotName] = {
            elementId,
          };
        } else {
          ReactMicroComponentSlotInfoMap[parentElementId] = {
            [slotName]: {
              elementId,
            },
          };
        }

        /**
         * 渲染插槽
         */
        const Element = document.body.querySelector(`#${elementId}`);
        const component = MicroComponentSlotMap[parentElementId]?.[slotName];
        if (Element && component) {
          const root = createRoot(Element);
          /** 保存root，之后更新的时候可以继续渲染（MicroComponent.tsx内调用） */
          ReactMicroComponentSlotInfoMap[parentElementId][slotName].root = root;
          root.render(
            React.createElement(component.type, {
              ...component.props,
              ...props,
            })
          );
        }
      } else {
        /**
         * 往下继续传递事件
         */
        const nextSubAppName = subAppNameList.slice(-1)[0];
        sendDataDown(nextSubAppName, {
          emitName: 'micro_component_slot',
          parameters: [
            {
              slotName, elementId, props, parentElementId,
              subAppNameList: subAppNameList.slice(0, -1),
            }
          ],
        })
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
