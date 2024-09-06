import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from '@remix-run/router';
import { createHashRouter } from 'react-router-dom';
import microApp from '@micro-zoe/micro-app';

import { isSubApp, sendDataDown, sendDataUp, MicroAppInit } from 'micro-app-utils';
import { generateDataListener } from 'micro-app-utils/listener';
import { MicroComponentSlotMap, ReactMicroComponentSlotInfoMap } from 'micro-app-utils/data';

import { routes } from '@/router';
import CONSTS from '@/utils/CONSTS';

import App from './App.tsx';

/** 初始化微前端配置 */
MicroAppInit<'localhost' | 'test' | 'pre' | 'master'>({
  env: process.env.NODE_ENV === 'development' ? 'localhost' : 'master',
  tagName: CONSTS.microAppTagName,
  dataListener: generateDataListener({
    /** 子应用接收到这个请求需要往上传递，直到传给顶部主应用 */
    micro_component_request: (data) => {
      sendDataUp({
        emitName: 'micro_component_request',
        parameters: [{
          ...data,
          subAppNameList: [...data.subAppNameList, window.__MICRO_APP_NAME__!]
        }],
      });
    },
  }),
  subAppSettingList: [
    {
      name: 'micromain',
      prefix: 'micromain',
      routerMode: 'history',
      urlMap: {
        localhost: '//127.0.0.1:1314/micromain/',
        test: 'https://micro-admin-template.lammu.cn/micromain/',
        pre: 'https://micro-admin-template.lammu.cn/micromain/',
        master: 'https://micro-admin-template.lammu.cn/micromain/',
      },
      builder: 'vite',
      iframe: true,
      framework: 'vue3',
    },
    {
      name: 'vue3',
      prefix: 'vue3',
      routerMode: 'hash',
      urlMap: {
        localhost: '//127.0.0.1:1320/vue3/',
        test: 'https://micro-admin-template.lammu.cn/vue3/',
        pre: 'https://micro-admin-template.lammu.cn/vue3/',
        master: 'https://micro-admin-template.lammu.cn/vue3/',
      },
      builder: 'vite',
      iframe: true,
      framework: 'vue3',
    },
    {
      name: 'vue2',
      prefix: 'vue2',
      routerMode: 'hash',
      urlMap: {
        localhost: '//127.0.0.1:1330/vue2/',
        test: 'https://micro-admin-template.lammu.cn/vue2/',
        pre: 'https://micro-admin-template.lammu.cn/vue2/',
        master: 'https://micro-admin-template.lammu.cn/vue2/',
      },
      builder: 'webpack',
      iframe: false,
      framework: 'vue2',
    },
    {
      name: 'react18',
      prefix: 'react18',
      routerMode: 'hash',
      urlMap: {
        localhost: '//127.0.0.1:1340/react18/',
        test: 'https://micro-admin-template.lammu.cn/react18/',
        pre: 'https://micro-admin-template.lammu.cn/react18/',
        master: 'https://micro-admin-template.lammu.cn/react18/',
      },
      builder: 'vite',
      iframe: true,
      framework: 'react18',
    },
  ],
});

/** 启动微前端 */
microApp.start({
  tagName: CONSTS.microAppTagName,
  /** 防止子应用请求父应用资源（部署时需要配置这个url指向这个文件） */
  iframeSrc: `/micromain/empty.html`,
  'keep-router-state': true,
});

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
