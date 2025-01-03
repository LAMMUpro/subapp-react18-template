import { useState } from 'react';
import FlPagingSelect from 'frame-less-ui/react/paging-select';
import FlButton from 'frame-less-ui/react/button';

function api() {
  function generateId() {
    return 1 + Date.now().toString().slice(5) + Math.random().toString(36).substring(2);
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          pageSize: 10,
          currentPage: 1,
          totalCount: 100,
          list: [
            {
              id: generateId(),
              name: '上海外服（集团）有限公司国际人才分公司超长溢出测试',
            },
            { id: generateId(), name: '上海电气集团股份有限公司' },
            { id: generateId(), name: '上海外服（集团）有限公司' },
            { id: generateId(), name: '上海华耀公司有限公司' },
            { id: generateId(), name: '上海北泰实业股份有限公司' },
            { id: generateId(), name: '上海国际集团有限公司' },
            { id: generateId(), name: '上海明国实业有限公司' },
            { id: generateId(), name: '上海曼珩鼎实业有限公司' },
            { id: generateId(), name: '上海闻岱商业管理有限公司' },
            { id: generateId(), name: '上海叁零财务管理咨询有限公司' },
          ],
        },
        success: true,
      });
    }, 2000);
  });
}

export default function frameLessUI() {
  

  const [info, setInfo] = useState({
    id: '4',
    name: '上海华耀公司有限公司',
  })
  return <div className="">
    <section className="-m-card">
      <h2 className="-m-title">button(按钮)</h2>
      <FlButton>
        按钮
      </FlButton>
      <div className="mt-3">{ JSON.stringify(info) }</div>
    </section>

    <section className="-m-card">
      <h2 className="-m-title">paging-select(分页选择器)</h2>
      <FlPagingSelect
        id={info.id}
        label={info.name}
        api={api}
        immediate
        optionSetting={{ label: 'name', id: 'id' }}
        style={{ width: '300px' }}
      >
      </FlPagingSelect>
      <div className="mt-3">{ JSON.stringify(info) }</div>
    </section>

    <section className="-m-card">
      <h2 className="-m-title">button(按钮)</h2>
      <fl-button type="primary">普通按钮</fl-button>
      <fl-button
        className="ml-1"
        type="success"
      >成功按钮</fl-button>
      <fl-button
        className="ml-1"
        type="warning"
      >警告按钮</fl-button>
      <fl-button
        className="ml-1"
        type="danger"
      >危险按钮</fl-button>
    </section>
  </div>;
}
